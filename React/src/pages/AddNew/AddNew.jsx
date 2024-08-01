import { useState } from "react";
import { uploadData } from "../../Api";
import WaitingOverlay from "../../Component/WaitingOverlay/WaitingOverlay";

function AddNew() {
  const [isWaiting, setWaiting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);

    const title = formData.get("title");
    const description = formData.get("description");
    const thumbnail = formData.get("thumbnail");
    const video = formData.get("video");

    // Form validation
    if (!title || title.length === 0 || title.length > 50) {
      alert("Title is required and must be less than 50 characters.");
      return;
    }

    if (!description || description.length === 0 || description.length > 200) {
      alert("Description is required and must be less than 200 characters.");
      return;
    }

    if (!thumbnail || !isImageFileValid(thumbnail)) {
      alert("Invalid thumbnail file. Only JPG and PNG are allowed.");
      return;
    }

    if (!video || !isVideoFileValid(video)) {
      alert("Invalid video file. Only MPG, AVI, and MP4 are allowed.");
      return;
    }

    // Upload data
    try {
      setWaiting(true);
      const data = await uploadData(formData);
      console.log(data);
      alert("Upload successful!");
    } catch (error) {
      console.error(error);
      alert(error.message);
    } finally {
      setWaiting(false);
    }
  };

  const isImageFileValid = (file) => {
    const validImageTypes = ["image/jpeg", "image/png"];
    return validImageTypes.includes(file.type);
  };

  const isVideoFileValid = (file) => {
    const validVideoTypes = ["video/mpg", "video/avi", "video/mp4"];
    return validVideoTypes.includes(file.type);
  };

  return (
    <>
      {isWaiting && <WaitingOverlay message="Uploading data, please wait..." />}
      <div className="container mt-4">
        <div className="card">
          <div className="card-body">
            <h1 className="card-title">Add New</h1>
            <form onSubmit={handleSubmit}>
              <div className="form-group m-2">
                <label htmlFor="formTitle">Title</label>
                <input
                  type="text"
                  className="form-control"
                  id="formTitle"
                  name="title"
                  maxLength={50}
                  required
                />
              </div>

              <div className="form-group m-2">
                <label htmlFor="formDescription">Description</label>
                <textarea
                  className="form-control"
                  id="formDescription"
                  name="description"
                  maxLength={200}
                  required
                ></textarea>
              </div>

              <div className="form-group m-3">
                <label htmlFor="formThumbnail">
                  Upload Thumbnail (JPG, PNG)
                </label>
                <input
                  type="file"
                  className="form-control-file"
                  id="formThumbnail"
                  name="thumbnail"
                  accept="image/jpeg, image/png"
                  required
                />
              </div>

              <div className="form-group m-3">
                <label htmlFor="formVideo">Upload Video (MPG, AVI, MP4)</label>
                <input
                  type="file"
                  className="form-control-file"
                  id="formVideo"
                  name="video"
                  accept="video/mpg, video/avi, video/mp4"
                  required
                />
              </div>

              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default AddNew;
