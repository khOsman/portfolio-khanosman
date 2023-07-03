import React, { useRef } from 'react';
import Navbar from '../shared/Navbar';
import Footer from '../shared/Footer';
import useTitle from '../hooks/useTitle';

import { useForm } from 'react-hook-form';
import emailjs from '@emailjs/browser';

const Contact = () => {
    useTitle('Contact');
    const { register, handleSubmit, formState: { errors } } = useForm();
    const form = useRef();
    const onSubmit = async (data) => {
        try {
            // Replace with your backend API endpoint for sending emails
            console.log('form-data', data);
            emailjs.sendForm(import.meta.env.VITE_email_sid, import.meta.env.VITE_email_tid, form.current, import.meta.env.VITE_email_pbk)
                .then((result) => {
                    console.log('Email sent response', result.text);
                }, (error) => {
                    console.log(error.text);
                });
        } catch (error) {
            console.log('Caught Error: ', error.text);
        }
    };


    return (


        <div id="contact" className='flex lg:flex-row flex-col justify-center gap-8 items-center  mx-auto w-5/2 p-8 text-white '>

            <div >
                <img className='lg:w-full' src="./images/contact.avif" alt="" />
            </div>
            <div className='lex flex-col justify-center items-center'>
                <div>
                    <h2 className='lg:text-3xl font-semibold mt-10'>Let's Get in Touch: Ways to Connect with Me</h2>
                </div>
                <div>
                    <article className='my-8'>
                        Thank you for your interest in getting in touch with me.
                        I welcome your feedback, questions, and suggestions.
                        If you have a specific question or comment, please feel
                        free to email me. I make an effort to respond to all messages within 24 hours.
                    </article>
                </div>
                <form ref={form} onSubmit={handleSubmit(onSubmit)} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" className="input input-bordered input-success w-full  mb-1" {...register('name', { required: true })} placeholder="Name" />
                        {errors.name && <span>This field is required</span>}
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" className="input input-bordered input-success w-full mb-1" {...register('email', { required: true })} placeholder="Email" />
                        {errors.email && <span>This field is required</span>}
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Message</span>
                        </label>
                        <textarea className="textarea textarea-success mb-1" placeholder="Message" {...register('message', { required: true })} />
                        {errors.message && <span>This field is required</span>}
                    </div>

                    <div className="form-control mt-6">
                        <button className="btn bg-green-400 text-white">Send</button>
                    </div>
                </form>

            </div>

        </div>


    );
};

export default Contact;