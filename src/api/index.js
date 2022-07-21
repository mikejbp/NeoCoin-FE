//aqui s la union del front con el backend

export const url = "https://c423tback.herokuapp.com/api";

export const setHeaders = () => {
  const headers = {
    headers: {
      "x-auth-token": localStorage.getItem("token"),
    },
  };

  return headers;
};
