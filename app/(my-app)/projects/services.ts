import axios from "axios";

export const getProjects = async () => {
  const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/projects?limit=4`);
  return response.data;
};
