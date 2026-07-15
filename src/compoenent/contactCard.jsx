import React from "react";
import { useState } from "react";
import { CiUser } from "react-icons/ci";
import { MdAlternateEmail } from "react-icons/md";
import { IoIosCall } from "react-icons/io";
import { motion } from "framer-motion";
import Success from "./Success";
const ContactCard = () => {
  let [modal, setModal] = useState(false);
  let [value, setValue] = useState({
    name: "",
    email: "",
    number: "",
    type: "",
    message: "",
  });
  let options = [
    { id: 1, type: "شراء عقار" },
    { id: 2, type: "بيع" },
    { id: 3, type: "إيجار" },
    { id: 4, type: "ادارة عقار" },
    { id: 5, type: "عرض التقسيط" },
  ];
  let handleChange = (e) => {
    setValue({ ...value, [e.target.name]: e.target.value }); //connect input with data
  };
  console.log(value);

  let close = () => {
    setModal(false);
  };
  let handleSubmit = (e) => {
    e.preventDefault();
    async function fetching() {
      try {
        const formData = new URLSearchParams();
        formData.append("name", value.name);
        formData.append("email", value.email);
        formData.append("number", value.number);
        formData.append("type", value.type);
        formData.append("message", value.message);

        const theResponse = await fetch(
          "https://script.google.com/macros/s/AKfycbyIqXnuu2s6PqRYeSAj53K-F6PqfdjDmD9ayFSg2aFODGYt4tNDe6v2XFFdQGFBLPMoTA/exec",
          {
            method: "POST",
            body: formData,
          },
        );
        if (theResponse.ok) {
          console.log("success");
          setModal(true);
          setValue({ name: "", email: "", number: "", message: "" });
        } else {
          console.log("fail");
        }
      } catch {
        console.log("something wrong!!!");
      }
    }
    fetching();
  };
  return (
    <form onSubmit={handleSubmit} className="rounded-2xl bg-white/90 p-7 shadow-md grid gap-5 md:grid-cols-2">
      <div className="relative md:col-span-2 ">
        <label className="grid gap-1 text-sm font-bold text-primary ">الاسم كامل</label>
        <input
          className="rounded-2xl border w-full border-primary px-2 py-2 outline-none transition focus:border-primary"
          type="text"
          value={value.name}
          name="name"
          onChange={handleChange}
          autoComplete="name"
          required
        />
        {!value.name && <CiUser className="absolute bottom-1.5 right-1 rounded-full  text-primary p-2 bg-primary/20" size={30} />}
      </div>

      <div className="relative md:col-span-1 ">
        <label className="grid gap-1 text-sm font-bold text-primary ">البريد الالكتروني</label>
        <input
          className="rounded-2xl border w-full border-primary px-2 py-2 outline-none transition focus:border-primary"
          type="email"
          value={value.email}
          name="email"
          onChange={handleChange}
          autoComplete="email"
          required
        />
        {!value.email && <MdAlternateEmail className="absolute bottom-1.5 right-1 rounded-full p-2 text-primary bg-primary/20 " size={30} />}
      </div>
      <div className="relative md:col-span-1 ">
        <label className="grid gap-1 text-sm font-bold text-primary ">رقم الجوال</label>
        <input
          className="rounded-2xl border w-full border-primary px-2 py-2 outline-none transition focus:border-primary"
          type="text"
          onChange={handleChange}
          value={value.number}
          name="number"
          autoComplete="name"
          required
        />
        {!value.number && <IoIosCall className="absolute bottom-1.5 right-1 rounded-full p-2 text-primary bg-primary/20 " size={30} />}
      </div>

      <label className="grid gap-2 text-sm font-bold text-primary sm:col-span-2">
        نوع الاستشارة
        <select
          name="type"
          onChange={handleChange}
          value={value.type}
          className="rounded-2xl border border-primary bg-warm-white px-4 py-4 outline-none transition focus:primary"
        >
          {options.map((option) => {
            return (
              <option key={option.id} value={option.type}>
                {option.type}
              </option>
            );
          })}
        </select>
      </label>

      <div className="relative md:col-span-2 ">
        <label className="grid gap-1 mb-1 text-sm font-bold text-primary ">استفسارك</label>
        <textarea
          rows={5}
          className="rounded-2xl border w-full border-primary px-2 py-2 outline-none transition focus:primary"
          type="text"
          onChange={handleChange}
          value={value.message}
          name="message"
          autoComplete="name"
          required
        />
      </div>

      <div className="md:col-span-2 ">
        <button className="block cursor-pointer w-full rounded-full text-white bg-primary p-3">ارسال الطلب</button>
      </div>
      {modal && <Success closeModal={close} />}
      {/* <Success closeModal ={close}/> */}
    </form>
  );
};

export default ContactCard;
