// src/api.js

import axios from "axios";

const API_URL = "http://localhost:8080/api/app";

export const uploadData = async (formData) => {
  try {
    const response = await axios.post(API_URL, formData, {
      headers: { "Content-Type": "multipart/form-data" },
    });
    return response.data;
  } catch (error) {
    throw new Error("There was an error uploading the files!");
  }
};

export const fetchData = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    throw new Error("There was an error fetching the data!");
  }
};
