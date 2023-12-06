// api.js
import axios from "axios";

const apiKey = "YOUR_METALS_API_KEY";
// const apiUrl = 'https://metals-api.com/api/latest';
const apiUrl = "https://metals-api.com/latestPost";

export const getCurrentGoldPrice = async () => {
  try {
    const response = await axios.get(apiUrl, {
      params: {
        // access_key: apiKey,
        base: "XAU", // Gold currency code
      },
    });
    console.log("gold_price_response", response);
    return response.data;
  } catch (error) {
    console.error("Error fetching gold price:", error);
    return null;
  }
};

// Sign Up for an API Key:
// Visit Metals-API and sign up to get your free API key.
// https://metals-api.com/
