import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import './Home.css';

function Afterlogin() {
    const navigate = useNavigate();


    const handleNavigation1 = () => {
        navigate('/book');
    };

    const handleNavigation2 = () => {
        navigate('/uploadbook');
    };

    const handleNavigation3 = () => {
        navigate('/manageuser');
    };

    const handleNavigation4 = () => {
        navigate('/payment');
    };

    const handleNavigation5 = () => {
        navigate('/active');
    };

    const handleNavigation6 = () => {
        navigate('/purchase');
    };

    const handleNavigation7 = () => {
        navigate('/Recharge');
    };

    const handleNavigation8 = () => {
        navigate('/addnotes');
    };

    const handleNavigation9 = () => {
        navigate('/contactus');
    };



    return (
        <div >
            <Header />
            <div id='main'  >

                <div className='university-card' class="overflow-x-hidden">
                    <center>
                        <h1>Welcome to UserName 111 Panel</h1>


                    </center>


                    <div className='afterlogin' >



                        <div className='afterloginbtn' onClick={handleNavigation1}>
                            <h1>🖊️</h1>
                            <div id='Result'>
                                BOOK CATALOG
                                <p>View available e-books</p>
                            </div>
                        </div>



                        <div className='afterloginbtn2' onClick={handleNavigation2}>
                            <h1>📚</h1>
                            <div id='Result'>
                                UPLOAD BOOKS
                                <p>Upload books for Reference</p>
                            </div>
                        </div>



                        <div className='afterloginbtn3' onClick={handleNavigation3}>
                            <h1>🚮</h1>
                            <div id='Result'>
                                Manage User
                                <p>Subscribed User control</p>
                            </div>
                        </div>




                    </div>




                    <div className='afterlogin'>



                        <div className='afterloginbtn2' onClick={handleNavigation4}>
                            <h1>👨‍🎓</h1>
                            <div id='Result'>
                                PAYMENT
                                <p>Directing to Paypal</p>
                            </div>
                        </div>




                        <div className='afterloginbtn' onClick={handleNavigation5}>
                            <h1>👨‍🎓/🔐</h1>
                            <div id='Result'>
                                ACTIVE / DEACTIVE
                                <p>Account's</p>
                            </div>
                        </div>

                        <div className='afterloginbtn2' onClick={handleNavigation6}>
                            <h1>📚</h1>
                            <div id='Result'>
                                TRACK PURCHASE
                                <p>Purchased Book people</p>
                            </div>
                        </div>


                    </div>







                    <div className='afterlogin'>



                        <div className='afterloginbtn' onClick={handleNavigation7} >
                            <h1>💲</h1>
                            <div id='Result'>
                                RECHARGE
                                <p>PLANS</p>
                            </div>
                        </div>



                        <div className='afterloginbtn3' onClick={handleNavigation8}>
                            <h1>🧑‍🏫</h1>
                            <div id='Result'>
                                ADD NOTES
                                <p>Buy Notes pdf</p>
                            </div>
                        </div>



                        <div className='afterloginbtn3' onClick={handleNavigation9}>
                            <h1>🧑‍🏫</h1>
                            <div id='Result'>
                                Contact Us
                                <p>You are Important for us</p>
                            </div>
                        </div>








                    </div>




                </div>

            </div>
            <Footer />
        </div>
    );
}

export default Afterlogin;
