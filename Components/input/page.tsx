"use client";
import React, { ChangeEvent, ChangeEventHandler } from "react";
import "./imput.css";

type PageProps = {
  input_name: string;
  formdata: string;
  setformdata: (newValue:string) => void;
};

const Page: React.FC<PageProps & React.InputHTMLAttributes<HTMLInputElement>> = ({ input_name, formdata, setformdata, ...props }) => {

  const inputClassName = formdata !== "" ? "notemptyinput" : "";
  return (
    <div>
      <div className={`inputbox w-full ${inputClassName} `}>
        <input
          title={input_name}
          required
          type="text"
          className="w-full"
          value={formdata}
          onChange={(e)=>{setformdata(e.target.value)}}
          {...props}
        />
        <span>{input_name}</span>
        <i></i>
      </div>
      <span></span>
    </div>
  );
};

export default Page;
