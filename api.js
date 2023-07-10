import axios from "axios";

const api = axios.create({
  baseURL: "https://api-sigaa.herokuapp.com/api/v1/",
  headers: { "Content-Type": "application/json" },
});
export const createLead = async (value) => {
  try {
    const res = await api.post("/leads/mail", value);
    return res;
  } catch (e) {
    return e;
  }
};
