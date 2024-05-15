import { useState } from 'react';
import axios from 'axios';

const RazorpayPayment = () => {
  const [amount, setAmount] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Fetch API to create order on the server
    const response = await axios.post('/create-order', {
      amount: amount * 100, // Amount in paisa
      name: name,
      email: email
    });

    const { orderId } = response.data;

    // Initialize Razorpay checkout
    const options = {
      key: 'YOUR_KEY_ID', // Replace with your actual Razorpay key
      amount: amount * 100,
      currency: 'INR',
      name: 'Your Company Name',
      description: 'Payment for your product/service',
      order_id: orderId,
      prefill: {
        name: name,
        email: email
      },
      handler: function(response) {
        // Handle payment success
        alert('Payment successful');
        console.log(response);
      },
      theme: {
        color: '#F37254' // Customize the color
      }
    };

    const rzp = new window.Razorpay(options);
    rzp.open();
  };

  return (
    <div className="max-w-md mx-auto mt-8 p-6 bg-white shadow-md rounded-md">
      <h1 className="text-xl font-semibold mb-4">Make a Payment</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="amount" className="block text-gray-700">Amount (in Rupees)</label>
          <input type="number" id="amount" value={amount} onChange={(e) => setAmount(e.target.value)} className="mt-1 form-input block w-full" required />
        </div>
        
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700">Name</label>
          <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} className="mt-1 form-input block w-full" required />
        </div>
        
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700">Email</label>
          <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} className="mt-1 form-input block w-full" required />
        </div>
        
        <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md">Pay Now</button>
      </form>
    </div>
  );
};

export default RazorpayPayment;
