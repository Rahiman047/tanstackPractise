import axios from "axios";

const customFetch = axios.create({
  baseURL: `https://hub.dummyapis.com`,
});

export const fetchEmployees = () => {
  return customFetch.get("/employee");
};
