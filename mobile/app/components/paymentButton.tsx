import React from "react";
import { Button } from "react-native";
import initiatePayment from "../apis/payment-api";

export default function PaymentButton() {
    const handlePay = async () => {
    try {
        const res = await initiatePayment("254790100113", 100);
        console.log("Payment initiated:", res);
    } catch (err) {
        console.error("Error initiating payment:", err);
    }
    };

    return <Button title="Pay with M-Pesa" onPress={handlePay} />;
}
