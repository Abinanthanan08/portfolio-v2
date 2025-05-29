import React from 'react';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Contact() {
    const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    toast.info("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "23122453-d289-4286-ae5c-c47b2de1f9cf");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      toast.success("Form Submitted Successfully !🎉");
      event.target.reset();
    } else {
      console.log("Error", data);
      toast.error(data.message);
    }
  };

  return (
    <section id="contact" className="bg-gray-900 text-white py-12 px-4">
      <h2 className="text-3xl md:text-4xl text-center font-bold underline mb-8">Contact</h2>

      <div className="max-w-2xl mx-auto flex flex-col items-center gap-8">
        <form onSubmit={onSubmit} className="w-4/5 flex flex-col gap-4 bg-gray-800 p-6 rounded-lg shadow-lg">
          <input 
            type="text" 
            placeholder="Name" 
            name="name"
            required 
            className="w-full p-3 rounded-md bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input 
            type="email" 
            placeholder="Email" 
            name="email"
            required 
            className="w-full p-3 rounded-md bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <textarea 
            placeholder="Message" 
            name="message" 
            required 
            rows="4"
            className="w-full p-3 rounded-md bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          ></textarea>
          <button 
            type="submit" 
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-md transition-all duration-300"
          >
            Submit
          </button>
        </form>
        <ToastContainer/>
      </div>
    </section>
  );
}

export default Contact;