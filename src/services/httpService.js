/*
 *httpService.js module responsible for
 *handeling unexpected errors.
 *used in: App.js module
 */
import axios from "axios";
import logger from "./logService";
import { toast } from "react-toastify";

// Unexpected (network down, server down, db down, bug)
// - Log them
// - Display a generic and friendly error message
axios.interceptors.response.use(null, error => {
  const expectedError =
    error.response &&
    error.response.status >= 400 &&
    error.response.status < 500;

  if (!expectedError) {
    logger.log(error);
    toast.error("An unexpected error occured");
  }

  return Promise.reject(error);
});

export default {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  delete: axios.delete
};
