// src/api.js

import axios from "axios";

// eslint-disable-next-line no-undef
const API_URL = import.meta.env.VITE_API_URL;

export const uploadData = async (formData) => {
  try {
    const response = await axios.post(API_URL + "app", formData, {
      headers: { "Content-Type": "multipart/form-data" },
    });
    return response.data;
  } catch (error) {
    throw new Error("There was an error uploading the files!");
  }
};

export const fetchData = async () => {
  try {
    const response = await axios.get(API_URL + "app");
    return response.data;
  } catch (error) {
    throw new Error("There was an error fetching the data!");
  }
};
