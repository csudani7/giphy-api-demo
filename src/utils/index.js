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

/* Global Errors state utils */
export const getErrorMessage = (errors, fieldName, fieldLabel) => {
  if (errors[fieldName]) {
    const { type } = errors[fieldName];
    switch (type) {
      case "required":
        return `${fieldLabel} is required`;
      case "sameAs":
        return "Passwords do not match. Please try again.";
      case "pattern":
        return `Invalid ${fieldLabel}`;
      default:
        console.error(`Unknow error type: ${type}`);
        return type;
    }
  } else {
    return false;
  }
};
