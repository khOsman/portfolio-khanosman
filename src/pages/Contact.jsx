import React from 'react';
import Navbar from '../shared/Navbar';
import Footer from '../shared/Footer';
import useTitle from '../hooks/useTitle';

const Contact = () => {
    useTitle('Contact');
    return (
        <div>
            <Navbar></Navbar>
            <div className='flex flex-col justify-center items-center my-5 mx-auto w-3/4'>

                <div >
                    <img className='w-[32rem]' src="https://images.unsplash.com/photo-1577563908411-5077b6dc7624?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" alt="" />
                </div>
                <div className='lex flex-col justify-center items-center'>
                    <div>
                        <h2 className='lg:text-3xl font-semibold mt-10'>Let's Get in Touch: Ways to Connect with Me</h2>
                    </div>
                    <div>
                        <article className=' my-8'>
                            Thank you for your interest in getting in touch with me.
                            I welcome your feedback, questions, and suggestions.
                            If you have a specific question or comment, please feel
                            free to email me directly at <a className='link text-blue-400' href='mailto: khanosman1917@gmail.com'>khanosman1917@gmail.com</a>. I make
                            an effort to respond to all messages within 24 hours.
                        </article>
                    </div>
                </div>

            </div>
            <Footer></Footer>
        </div>
    );
};

export default Contact;