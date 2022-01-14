import axios from "axios";

export const hitAPI = async(httpMethod, payload, endpoint) => {
  const apiUrl = process.env.REACT_APP_API_URL + endpoint;
  switch(httpMethod) {
    case "POST":
      axios.post(
        apiUrl, 
        payload
      )
      .then(response => response)
      .catch(error => console.log("error while add new anime ", error));
    break;
  }
}