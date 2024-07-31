import mongoose from "mongoose";

// Define the schema for the uploads
const AppSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      maxlength: 50,
    },
    description: {
      type: String,
      required: true,
      maxlength: 200,
    },
    thumbnailUrl: {
      type: String,
      required: true,
    },
    videoUrl: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

// Create the model from the schema
const AppModel = mongoose.model("App", AppSchema);

// Export the model
export default AppModel;
