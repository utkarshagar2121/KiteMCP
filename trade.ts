  import { KiteConnect } from "kiteconnect";

  import dotenv from "dotenv";

  dotenv.config();
  const apiKey = process.env.zerodha_api;
  const apiSecret = process.env.zerodha_api_secret;
  const requestToken = process.env.zerodha_request_token; // This is not used in the current code
  const accessToken = process.env.zerodha_access_token;

  if (!requestToken) {
    throw new Error(
      "Zerodha request token is not defined in environment variables."
    );
  }
  if (!apiSecret) {
    throw new Error(
      "Zerodha API secret is not defined in environment variables."
    );
  }
  if (!accessToken) {
    throw new Error(
      "Zerodha access token is not defined in environment variables."
    );
  }
  if (!apiKey) {
    throw new Error("Zerodha API key is not defined in environment variables.");
  }
  const kc = new KiteConnect({ api_key: apiKey });
  // console.log(kc.getLoginURL());
  // we will get the redirection to the redirecting url with the request token
  // after the user has logged in and authorized the app

  // async function init() {
  //   try {
  //     // await generateSession();
  //     //i have already generated the session and have the access token
  //     // so we can set the access token directly
  //     // kc.setAccessToken(response.access_token);
  //     kc.setAccessToken(accessToken);
  // console.log("Access Token set successfully.");
  //     // placingOrder("SELL", "RPOWER-BE", 1);
  //   } catch (err) {
  // console.error(err);
  //   }
  // }

  //removeing this as we already have the access token
  // This function is used to generate a session using the request token and api secret
  // async function generateSession() {
  //   try {
  //     const response = await kc.generateSession(requestToken, apiSecret);
  // console.log("Session generated successfully:", response);
  //     kc.setAccessToken(response.access_token);
  // console.log("Session generated: ************", response);
  //   } catch (err) {
  // console.error("Error generating session:", err);
  //   }
  // }

  export async function placingOrder(
    transaction_type: "BUY" | "SELL",
    tradingsymbol: string,
    quantity: number
  ) {
    try {
      // console.log("placing the access token through init");
      if (!accessToken) {
        throw new Error("Access token is not defined in environment variables.");
      }
      kc.setAccessToken(accessToken);
      // console.log("now making the order");
      const order_summary = await kc.placeOrder("regular", {
        exchange: "NSE",
        tradingsymbol: tradingsymbol,
        transaction_type: transaction_type,
        quantity: quantity,
        product: "CNC",
        order_type: "MARKET",
      });
      // console.log("Order Summary:", order_summary);
    } catch (err) {
      console.error("Error getting profile:", err);
    }
  }
