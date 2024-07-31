import AppModel from "../models/index.js"; // Correct model import
import cloudinary from "../cloudinary.js";

// Create new Entry
export const create = async (req, res) => {
  try {
    const { title, description } = req.body;
    const thumbnail = req.files.thumbnail;
    const video = req.files.video;

    // Upload thumbnail to Cloudinary
    const thumbnailResult = await cloudinary.uploader.upload(
      thumbnail.tempFilePath,
      { resource_type: "image" }
    );

    console.log("image url :", thumbnailResult.secure_url);

    // Upload video to Cloudinary
    const videoResult = await cloudinary.uploader.upload(video.tempFilePath, {
      resource_type: "video",
    });

    console.log("video url :", videoResult.secure_url);

    // create new entry for mongodb
    const upload = new AppModel({
      title,
      description,
      thumbnailUrl: thumbnailResult.secure_url,
      videoUrl: videoResult.secure_url,
    });

    // Save to MongoDB
    await upload.save();

    res.status(201).json(upload);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};

// Get all upload entries
export const getAll = async (req, res) => {
  try {
    const uploads = await AppModel.find();
    res.status(200).json(uploads);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};
