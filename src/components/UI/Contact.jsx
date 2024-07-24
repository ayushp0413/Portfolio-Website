import React, { useState } from 'react'
import toast, { Toaster } from 'react-hot-toast';
const Contact = () => {

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: ""
    });

    const sendMessage = (formData) => {
        const phoneNumber = '917806027629'; 
        const message = `From: ${formData.name}, Email: ${formData.email}, Subject: ${formData.subject}, Message: ${formData.message} `
        const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
        window.open(url, '_blank');
    };

    const formHandler = (e) => {
        e.preventDefault();
        console.log("FORM DATA : ", formData);  
        // send to whatsapp
        sendMessage(formData);

        if(!formData.name || !formData.email || !formData.subject || !formData.message) {
            toast.error("Please fill all fields!");
        }
        else
        toast.success("Message Sent!")
    }   


  return (
    <section id='contact' className='pb-16'>
        <div className='container'>
            <h2 className=' text-headingColor font-[700] text-[2.5rem] mb-8 '>Get in Touch</h2>

            <div className='md:flex justify-between items-center'>
                
                <div className='w-full md:w-1/2 h-[300px] sm:h-[450px]'>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29339.21183894403!2d75.89847004999997!3d23.19203495!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396372754064fd9d%3A0xbedb8f30a8c545e6!2sHarsodan%2C%20Madhya%20Pradesh!5e0!3m2!1sen!2sin!4v1721665810964!5m2!1sen!2sin" className='border-0 w-full h-full' allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>

                <div className='w-full md:w-1/2 sm:h-[450px] lg:flex items-center bg-indigo-100 px-4 lg:px-8 py-8'>
            
                    <form onSubmit={formHandler} className='w-full'>
                        <div className='mb-5'>
                            <input 
                            type='text' 
                            placeholder='Enter your name' 
                            className='w-full p-3 focus:outline-none rounded-md'
                            onChange={e => formData.name = e.target.value}
                            />

                        </div>

                        <div className='mb-5'>
                            <input 
                            type='text' 
                            placeholder='Enter your email' 
                            className='w-full p-3 focus:outline-none rounded-md'   
                            onChange={e => formData.email = e.target.value}
                            />
                        </div>

                        <div className='mb-5'>
                            <input 
                            type='text' 
                            placeholder='Subject' 
                            className='w-full p-3 focus:outline-none rounded-md' 
                            onChange={e => formData.subject = e.target.value}  
                            />
                        </div>

                        <div className='mb-5'>
                            <textarea
                            type='text' 
                            placeholder='Message goes here....'
                            rows={4}
                            className='w-full p-3 focus:outline-none rounded-md' 
                            onChange={e => formData.message = e.target.value}  
                            />
                        </div>
                        <button type='submit' className='w-full p-3 focus:outline-none rounded-md hover:bg-smallTextColor text-white bg-primaryColor ease-in duration-200'>Send on Whatsapp</button>
                        
                    </form>
                    
                </div>
            </div>
        </div>
    </section>
  )
}

export default Contact
