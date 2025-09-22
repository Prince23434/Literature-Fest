import express from "express";
import Razorpay from "razorpay";
import fs from "fs";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

// Razorpay instance
const razorpay = new Razorpay({
  key_id: "YOUR_RAZORPAY_KEY_ID",
  key_secret: "YOUR_RAZORPAY_SECRET",
});

// Create Razorpay order
app.post("/create-order", async (req, res) => {
  const { amount } = req.body;
  const options = {
    amount: amount,
    currency: "INR",
    receipt: "receipt_" + Date.now(),
  };
  try {
    const order = await razorpay.orders.create(options);
    res.json(order);
  } catch (err) {
    res.status(500).send(err);
  }
});

// Save registration only if payment was successful
app.post("/save-registration", (req, res) => {
  const { formData, paymentId, orderId } = req.body;

  fs.appendFileSync(
    "registrations.json",
    JSON.stringify({ formData, paymentId, orderId }) + "\n"
  );

  res.send({ status: "success" });
});

app.listen(5000, () => console.log("Server running on port 5000"));
