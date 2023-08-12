"use client";
import React, { useState } from "react";
import "./contact.css";
import Input from "@/Components/input/page";
import { ImLocation } from "react-icons/im";
import { BsFillTelephoneFill } from "react-icons/bs";
import { BiLogoLinkedin } from "react-icons/bi";
import { AiFillInstagram } from "react-icons/ai";
import { GiBatMask } from "react-icons/gi";
import emailjs from '@emailjs/browser';
import { BsDiscord } from "react-icons/bs";
import { ParallaxProvider } from "react-scroll-parallax";

const Page = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleNameChange = (newValue:string) => {
    setName(newValue);
  };

  const handleEmailChange = (newValue:string) => {
    setEmail(newValue);
  };


  const handleSubmit = (e:React.FormEvent<HTMLFormElement>) =>{
    e.preventDefault()
    alert(email + ' ' + name)
    emailjs.send("service_kvcbi49","template_9xsnw15",{
      from_name: name,
      to_name: "Nishant",
      message: message,
      email:email
      },'NSyoazlI0X5SlTBaw');

    setEmail('')
    setMessage('')
    setName('')
  }

  return (

    <section id="contact" className="bg-black min-h-screen mb-7">
      <h1 className="section-header text-center my-0 p-0 md:py-28 text-2 max-sm:pt-10 sm:text-3 md:text-4 font-light  text-white uppercase tracking-widest">
        Bat-Signal
      </h1>

      <div className="contact-wrapper mx-auto px-4 gap-5 py-20 relative max-w-2xl">
        <form
          id="contact-form"
          className="form-horizontal max-w-lg font-lato font-normal"
          role="form"
          onSubmit={handleSubmit}
        >
          <div className="form-group mb-6">
            <Input
              type="text"
              input_name="Name"
              id="name"
              formdata={name}
              setformdata={handleNameChange}
              name="name"
              required
            />
          </div>

          <div className="form-group mb-6">
            <Input
              type="email"
              input_name="Email"
              id="email"
              name="email"
              required
              formdata={email}
              setformdata={handleEmailChange}
            />
          </div>

          <textarea
            className="form-control max-w-lg bg-black text-white w-full border-2 border-[#FFBF30] outline-none py-2 px-4 rounded-md"
            rows={10}
            placeholder="MESSAGE......"
            name="message"
            onChange={(e)=>setMessage(e.target.value)}
            value={message}
            required
          ></textarea>

          <button
            className="btn btn-primary bg-white text-black hover:bg-[#FFBF30] rounded-md hover:text-white  send-button mt-6 h-10  overflow-hidden justify-center transition-all duration-200"
            id="submit"
            type="submit"
            value="SEND"
          >
            <div className="flex flex-col  w-full justify-center items-center h-10 transition-all duration-200">
              <span className="send-text block !mt-0 text-xs font-bold font-lato tracking-widest">
                SEND
              </span>
            </div>
          </button>
        </form>

        <div className="direct-contact-container max-w-lg ml-10 pt-4">
          <ul className="contact-list list-none  mr-4 flex flex-col gap-5 ">
            <li className="list-item">
              <div className="contact-icon-container flex justify-start items-center ml-2 gap-2 ">
                <ImLocation />
                <span className="  text-lg">Chandigarh, India</span>
              </div>
            </li>
            <li className="list-item mb-4 ">
              <div className="contact-icon-container flex justify-start items-center ml-2 gap-2 ">
                <BsFillTelephoneFill />
                <span className="contact-text max-sm:!text-md text-gray-500">
                  <a href="mailto:nishantmidha1@gmail.com" title="Send me an email">
                    Nishantji0212@gmail.com
                  </a>
                </span>
              </div>
            </li>
          </ul>

          <hr className="border-gray-300 mb-2" />

          <ul className="social-media-list flex justify-center items-center list-none ml-0 mr-4  py-5 my-8">
            <li className=" !flex justify-center items-center">
              <a
                href="https://www.linkedin.com/in/nishant-274a77253/"
                target="_blank"
                rel="noopener noreferrer"
                className=""
              >
                <i className="fa fa-github text-[30px]" aria-hidden="true">
                  <BiLogoLinkedin />
                </i>
              </a>
            </li>
            <li className=" !flex justify-center items-center">
              <a
                href="https://discordapp.com/users/nishant_jii"
                target="_blank"
                rel="noopener noreferrer"
                className=""
              >
                <i className="fa fa-codepen text-[30px]" aria-hidden="true">
                  <BsDiscord />
                </i>
              </a>
            </li>
            <li className=" !flex justify-center items-center">
              <a
                href="https://www.instagram.com/Nishant_jii"
                target="_blank"
                rel="noopener noreferrer"
                className=""
              >
                <i className="fa fa-twitter text-[30px]" aria-hidden="true">
                  <AiFillInstagram />
                </i>
              </a>
            </li>
            <li className=" !flex justify-center items-center">
              <a
                href="https://heylink.me/nishant_jii/"
                target="_blank"
                rel="noopener noreferrer"
                className=""
              >
                <i className="fa fa-instagram text-[30px]" aria-hidden="true">
                  <GiBatMask />
                </i>
              </a>
            </li>
          </ul>

          <hr className="border-gray-300 mb-4 mt-2" />

          <div className="copyright text-center">
            &copy; ALL OF THE RIGHTS RESERVED
          </div>
        </div>
      </div>
    </section>

  );
};

export default Page;
