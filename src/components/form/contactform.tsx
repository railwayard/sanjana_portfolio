"use client";

import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import emailjs from "@emailjs/browser";

type FormValues = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

interface AlertInfo {
  display: boolean;
  message: string;
  type: "success" | "danger" | "";
}

const ContactForm = () => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm<FormValues>();
  const [disabled, setDisabled] = useState(false);
  const [alertInfo, setAlertInfo] = useState<AlertInfo>({ display: false, message: "", type: "" });

  const toggleAlert = (message: string, type: "success" | "danger") => {
    setAlertInfo({ display: true, message, type });
    setTimeout(() => setAlertInfo({ display: false, message: "", type: "" }), 5000);
  };

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    try {
      setDisabled(true);

      const templateParams = {
        name: data.name,
        email: data.email,
        subject: data.subject,
        message: data.message,
        reply_to: data.email, // optional
      };

      console.log("Sending Email with:", templateParams);
      console.log("Service ID:", process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID);
      console.log("Template ID:", process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID);
      console.log("Public Key:", process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY);

      // ✅ This is the correct usage
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        templateParams,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      );

      toggleAlert("Form submitted successfully!", "success");
      reset();
    } catch (error) {
      console.error("EmailJS Error:", error);
      toggleAlert("Something went wrong. Check console logs.", "danger");
    } finally {
      setDisabled(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center w-full bg-black text-white py-12 px-8">
      <div className="w-full max-w-6xl px-10 mx-auto bg-gray-900 rounded-2xl shadow-lg p-12">
        <form onSubmit={handleSubmit(onSubmit)} method="POST" className="space-y-6">
          {/* Name & Email */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input {...register("name", { required: "Enter your name" })} placeholder="Name" className="w-full p-3 rounded-lg bg-transparent border border-gray-600" />
            <input {...register("email", { required: "Enter email" })} placeholder="Email" className="w-full p-3 rounded-lg bg-transparent border border-gray-600" />
          </div>
          {/* Subject */}
          <input {...register("subject", { required: "Enter subject" })} placeholder="Subject" className="w-full p-3 rounded-lg bg-transparent border border-gray-600" />
          {/* Message */}
          <textarea {...register("message", { required: "Enter message" })} placeholder="Message" rows={4} className="w-full p-3 rounded-lg bg-transparent border border-gray-600" />
          {/* Submit */}
          <button type="submit" disabled={disabled} className="bg-blue-600 hover:bg-blue-700 px-8 py-3 rounded-lg font-semibold">
            {disabled ? "Sending..." : "Submit"}
          </button>
        </form>

        {alertInfo.display && (
          <div className={`mt-6 p-4 text-center rounded-md ${alertInfo.type === "success" ? "bg-green-600" : "bg-red-600"}`}>
            {alertInfo.message}
          </div>
        )}
      </div>
    </div>
  );
};

export default ContactForm;