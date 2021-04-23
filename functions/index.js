/* eslint-disable max-len */
const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const secretKey = "sk_test_51IipzeJk62S2zIHk5n8G2568UC7qQxQGi9W2HtI4VB6Fm2cvrn9gODuyByM8mTj2crVhUy40iW6EiIaadX5pT2Bv00kxwLSjXe";
const stripe = require("stripe")(secretKey);


// -- App config
const app = express();

// -- Middleware
app.use(cors({origin: true}));
app.use(express.json());

// -- API Routes
app.get("/", (request, response) => response.status(200).send("Hello World"));
app.post("/payments/create", async (request, response) => {
    const total = request.query.total;
  
    console.log("Payment Request Recieved BOOM!!! for this amount >>> ", total);
  
    const paymentIntent = await stripe.paymentIntents.create({
      amount: total, // subunits of the currency
      currency: "usd",
    });
  
    // OK - Created
    response.status(201).send({
      clientSecret: paymentIntent.client_secret,
    });
  });



// -- Listener
exports.api = functions.https.onRequest(app);
// http://localhost:5001/amazon-clone-react/us-central1/api/
