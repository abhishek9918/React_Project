import React from "react";

function Contact() {
  return (
    <>
      <div className="bg-gray-100">
        <div className="container mx-auto py-8">
          <h1 className="text-3xl font-bold text-center mb-8">Contact Us</h1>

          <div className="max-w-lg mx-auto bg-white p-8 rounded-lg shadow-md">
            <div className="mb-6">
              <h2 className="text-lg font-semibold mb-4">Your Profile</h2>
              <div className="flex items-center">
                <img
                  src="https://via.placeholder.com/50"
                  alt="Profile Picture"
                  className="w-12 h-12 rounded-full"
                />
                <div className="ml-4">
                  <p className="text-gray-800 font-semibold">John Doe</p>
                  <p className="text-gray-600">john@example.com</p>
                </div>
              </div>
            </div>

            <form>
              <div className="mb-4">
                <label
                  htmlFor="name"
                  className="block text-gray-700 font-semibold mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="form-input w-full px-4 py-2 rounded-lg border focus:outline-none focus:border-blue-500"
                  placeholder="Enter your name"
                />
              </div>

              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-gray-700 font-semibold mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="form-input w-full px-4 py-2 rounded-lg border focus:outline-none focus:border-blue-500"
                  placeholder="Enter your email"
                />
              </div>

              <div className="mb-4">
                <label
                  htmlFor="message"
                  className="block text-gray-700 font-semibold mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  className="form-textarea w-full px-4 py-2 rounded-lg border focus:outline-none focus:border-blue-500"
                  rows="4"
                  placeholder="Enter your message"
                ></textarea>
              </div>

              <div className="text-center">
                <button
                  type="submit"
                  className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
