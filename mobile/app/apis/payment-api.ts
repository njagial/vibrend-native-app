import axios from "axios";

const API_BASE = "http://192.168.100.13:3000/api";

export default async function initiatePayment(phone: string, amount: number) {
    const response = await axios.post(`${API_BASE}/payments/stkpush`, { phone, amount });
    return response.data;
}
export async function checkPaymentStatus(checkoutRequestId: string) {
    const response = await axios.get(`${API_BASE}/status/${checkoutRequestId}`);
    return response.data;
}