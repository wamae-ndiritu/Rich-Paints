import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
import Toast from "../utilityComponents/Toast";
import Message from "../utilityComponents/Message";

const ToastObjects = {
  pauseOnFocusLoss: false,
  draggable: false,
  pauseOnHover: false,
  autoClose: 2000,
};

const ContactUs = () => {
  const form = useRef();
  const [isError, setIsError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("Message not sent!");
  const [details, setDetails] = useState({
    user_name: "",
    user_email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setDetails({ ...details, [e.target.name]: e.target.value });
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setIsError(false);

    if (
      details.user_name === "" ||
      details.user_email === "" ||
      details.subject === "" ||
      details.message === ""
    ) {
      setErrorMessage("All fields required!");
      setIsError(true);
    } else {
      emailjs
        .sendForm(
          "service_4gxtde7",
          "template_htmmfp8",
          form.current,
          "KehPQQgwKRR6ja30g"
        )
        .then(
          (result) => {
            toast.success("Message sent successfully!", ToastObjects);
          },
          (error) => {
            setIsError(true);
          }
        );
    }
    e.target.reset();
  };

  return (
    <div className='container mx-auto mt-10 px-4' id="contact-us">
      <Toast />
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
        {/* Left side: Image */}
        <div className='flex justify-center items-center'>
          <img
            src='/new/images/man-with-brush.jpg'
            alt='Contact us'
            className='rounded-lg shadow-lg max-h-[400px] object-cover'
          />
        </div>

        {/* Right side: Form */}
        <div className='bg-white p-6 rounded-lg shadow-lg'>
          <h2 className='text-2xl font-semibold mb-4 text-center'>
            Leave Us a Message
          </h2>
          {isError && <Message variant='alert-danger'>{errorMessage}</Message>}
          <form ref={form} onSubmit={sendEmail}>
            <div className='mb-4'>
              <label
                htmlFor='name'
                className='block text-sm font-medium text-gray-700'
              >
                Full Name
              </label>
              <input
                type='text'
                name='user_name'
                id='name'
                placeholder='John Doe'
                onChange={handleChange}
                className='mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm'
              />
            </div>
            <div className='mb-4'>
              <label
                htmlFor='email'
                className='block text-sm font-medium text-gray-700'
              >
                Email
              </label>
              <input
                type='email'
                name='user_email'
                id='email'
                placeholder='johndoe@gmail.com'
                onChange={handleChange}
                className='mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm'
              />
            </div>
            <div className='mb-4'>
              <label
                htmlFor='subject'
                className='block text-sm font-medium text-gray-700'
              >
                Subject
              </label>
              <input
                type='text'
                name='subject'
                id='subject'
                placeholder='Your Subject'
                onChange={handleChange}
                className='mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm'
              />
            </div>
            <div className='mb-4'>
              <label
                htmlFor='message'
                className='block text-sm font-medium text-gray-700'
              >
                Message
              </label>
              <textarea
                name='message'
                id='message'
                rows='5'
                placeholder='Type your message here...'
                onChange={handleChange}
                className='mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm'
              ></textarea>
            </div>
            <div className='flex justify-center'>
              <button
                type='submit'
                className='bg-red-800 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-300'
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
