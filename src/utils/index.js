/* Initial Parameter of Axios Request */
export const axiosInitialParams = {
  cache: "no-cache",
  credentials: "same-origin",
  headers: {
    "content-type": "application/json",
    "Access-Control-Allow-Origin": "*",
  },
  mode: "cors",
  redirect: "follow",
  referrer: "no-referrer",
  withCredentials: true,
};
