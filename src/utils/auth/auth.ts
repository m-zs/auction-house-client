export const setAuthToken = (token: string) => {
  sessionStorage.setItem("token", token);
};

export const getAuthToken = () => sessionStorage.getItem("token");
