import React, { useState } from 'react';
import Navbar from './Navbar';

function ContactForm() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleNameChange = (event) => {
        setName(event.target.value);
    };

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handleMessageChange = (event) => {
        setMessage(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        // Here, you can send the form data to your server using an API
        console.log(`Name: ${name}, Email: ${email}, Message: ${message}`);
    };

    return (
        <>
            <Navbar />
            <div className="w-full max-w-md  mx-auto my-10 p-10">
                <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md">
                    <label htmlFor="name" className="block font-medium text-gray-700 mb-2">Name:</label>
                    <input type="text" id="name" value={name} onChange={handleNameChange} className="w-full border-gray-300 rounded-lg shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />

                    <label htmlFor="email" className="block font-medium text-gray-700 mb-2 mt-4">Email:</label>
                    <input type="email" id="email" value={email} onChange={handleEmailChange} className="w-full border-gray-300 rounded-lg shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />

                    <label htmlFor="message" className="block font-medium text-gray-700 mb-2 mt-4">Message:</label>
                    <textarea id="message" value={message} onChange={handleMessageChange} className="w-full border-gray-300 rounded-lg shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"></textarea>

                    <button type="submit" className="mt-4 bg-indigo-500 text-white py-2 px-4 rounded-lg hover:bg-indigo-600 focus:outline-none focus:bg-indigo-600">Send</button>
                </form>
            </div>
        </>
    );
}

export default ContactForm;
