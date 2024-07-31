import { uploadData } from "../../Api";

function AddNew() {
  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);

    const title = formData.get("title");
    const description = formData.get("description");
    const thumbnail = formData.get("thumbnail");
    const video = formData.get("video");

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

    try {
      const data = await uploadData(formData);
      console.log(data);
      alert("Upload successful!");
    } catch (error) {
      console.error(error);
      alert(error.message);
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
    <div className="container mt-5">
      <h2>Add New</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
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

        <div className="form-group">
          <label htmlFor="formDescription">Description</label>
          <textarea
            className="form-control"
            id="formDescription"
            name="description"
            maxLength={200}
            required
          ></textarea>
        </div>

        <div className="form-group">
          <label htmlFor="formThumbnail">Upload Thumbnail (JPG, PNG)</label>
          <input
            type="file"
            className="form-control-file"
            id="formThumbnail"
            name="thumbnail"
            accept="image/jpeg, image/png"
            required
          />
        </div>

        <div className="form-group">
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
  );
}

export default AddNew;
