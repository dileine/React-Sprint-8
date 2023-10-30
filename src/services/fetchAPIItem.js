import axios from "axios";
import { ENDPOINTS } from "../constants/endpoints";

export const fetchAPIItem = async (
  itemUrl,
  setItemData,
  setItemError,
  signal
) => {
  try {
    const res = await axios({
      method: "get",
      url: itemUrl,
      signal: signal,
    });
    setItemData(res.data);
    console.log("Data loaded successfully");
  } catch (err) {
    setItemError(err.message);
    console.log("Error loading data");
  }
};

export const fetchAPIImg = async (imgUrl, setImg, setImgError, signal) => {
  try {
    const res = await axios({
      method: "get",
      url: imgUrl,
      signal: signal,
    });
    setImg(imgUrl);
  } catch (err) {
    setImgError(ENDPOINTS.noImg);
    console.log("Error loading the image");
  }
};
