import axios from "axios";

export const fetchAPI = async (url, page, setData, setError, signal) => {
  try {
    const res = await axios({
      method: "get",
      url: url,
      signal: signal,
      params: { page: page },
    });
    setData(res.data);
    console.log("Data loaded successfully");
  } catch (err) {
    setError(err.message);
    console.log("Error loading data");
  }
};
