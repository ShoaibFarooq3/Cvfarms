import { About_Endpoint, Home_Endpoint } from "./Endpoints";

export const GetAboutData = () => {
  var requestOptions = {
    method: "GET",
    redirect: "follow",
  };

  return fetch(About_Endpoint, requestOptions)
    .then((response) => response.json())
    .then((result) => {
      console.log(result);
      return result;
    })
    .catch((error) => {
      console.log("error", error);
      return null;
    });
};

export const GetHomeData = () => {
  var requestOptions = {
    method: "GET",
    redirect: "follow",
  };

  return fetch(Home_Endpoint, requestOptions)
    .then((response) => response.json())
    .then((result) => {
      console.log(result);
      return result;
    })
    .catch((error) => {
      console.log("error", error);
      return null;
    });
};
