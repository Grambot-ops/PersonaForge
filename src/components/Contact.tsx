import React from 'react';

const Contact: React.FC = () => {
    return (
        <div className="max-w-md mx-auto mt-10 p-5 border rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-4">Contact Me</h2>
            <form>
                <div className="mb-4">
                    <label className="block text-sm font-medium mb-2" htmlFor="name">Name</label>
                    <input
                        type="text"
                        id="name"
                        className="w-full p-2 border border-gray-300 rounded"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-medium mb-2" htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        className="w-full p-2 border border-gray-300 rounded"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-medium mb-2" htmlFor="message">Message</label>
                    <textarea
                        id="message"
                        className="w-full p-2 border border-gray-300 rounded"
                        rows={4}
                        required
                    ></textarea>
                </div>
                <button
                    type="submit"
                    className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
                >
                    Send Message
                </button>
            </form>
            <p className="mt-4 text-sm text-gray-600">
                Or reach me at: <a href="mailto:your-email@example.com" className="text-blue-500">your-email@example.com</a>
            </p>
        </div>
    );
};

export default Contact;