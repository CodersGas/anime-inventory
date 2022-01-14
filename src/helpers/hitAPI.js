import axios from "axios";

export const hitAPI = async (httpMethod, payload, endpoint) => {
  const apiUrl = (process.env.NODE_ENV === "development" ? process.env.REACT_APP_API_LOCAL_URL : process.env.REACT_APP_API_PROD_URL) + endpoint;
  switch (httpMethod) {
    case "POST":
      await axios.post(
        apiUrl,
        payload
      )
        .then(response => response)
        .catch(error => console.log("error while add new anime ", error));
      break;
  }
}