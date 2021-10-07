import axios from "axios";
const apiUrl = process.env.REACT_APP_API_URL;

export const loginUserToApi = async (user) => {
  const response = await axios.post(`${apiUrl}/auth/login`, user);
  try {
    console.log(response.data);
    if (response.data.user) {
      localStorage.setItem("jwtmyPortfolio", JSON.stringify(response.data));
    }
  } catch (error) {
    console.log(error);
  }
  return response;
};

export const isAuthenticated = () => {
  if (typeof window == "undefined") {
    return false;
  }
  if (localStorage.getItem("jwtmyPortfolio")) {
    return JSON.parse(localStorage.getItem("jwtmyPortfolio"));
  }
  return false;
};

export const logOut = async () => {
  await localStorage.removeItem("jwtmyPortfolio");
};
