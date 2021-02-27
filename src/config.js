export default {
  PORT: process.env.PORT || 8000,
  API_ENDPOINT:
    process.env.REACT_APP_API_BASE_URL || "http://localhost:8000/api",
  IMAGE_URL: process.env.REACT_APP_IMAGE_URL,
  TOKEN_KEY: "FBL-client-auth-token",
};
