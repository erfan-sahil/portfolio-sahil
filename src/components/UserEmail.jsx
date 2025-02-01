import { Input } from "@material-tailwind/react";
import React from "react";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";

export function UserEmail() {
  const [message, setMessage] = useState("");

  const handleChange = (event) => {
    setMessage(event.target.value);
  };

  const sendMessage = () => {
    const templateParams = {
      to_email: "erfansahil20@gmail.com",
      message: message,
    };

    emailjs
      .send(
        "service_okj7de9",
        "template_ov6axqa",
        templateParams,
        "nYmlB2kRMAXRpPC_8"
      )
      .then(
        (response) => {
          toast("Email Sent!");
          console.log("Email sent!", response);
          setMessage("");
        },
        (error) => {
          console.error("Email could not be sent:", error);
        }
      );
  };

  return (
    <div
      id="userContact"
      className="bg-[#fdfcf6] h-full w-full flex  justify-center items-center px-8 pt-16 xl:pt-28 pr-[80px] xl:pr-[250px]"
    >
      <div className="w-full xl:w-2/3 h-max border-dashed border-2 border-gray-500 flex flex-col xl:flex-row items-center justify-center p-5 xl:p-12">
        <p
          className=" text-xl font-medium mb-3"
          style={{ fontFamily: "Caudex, serif" }}
        >
          If you're looking for a Software Engineer, let's talk! Reach out at
          <span
            className="font-semibold"
            style={{ fontFamily: "Caudex, serif" }}
          >
            {" "}
            erfansahil20@gmail.com
          </span>
        </p>
        <Input
          label="Message"
          value={message}
          onChange={handleChange}
          style={{ fontFamily: "Caudex, serif" }}
          icon={
            <i
              class="fa-solid fa-angles-right cursor-pointer animate-bounce"
              onClick={sendMessage}
            ></i>
          }
          className="rounded-none border-dotted  border-gray-700 h-full"
        />
      </div>
    </div>
  );
}
