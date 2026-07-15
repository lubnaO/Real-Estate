import React, { useState } from "react";
import { useEffect } from "react";
import Button from "./button";
import ContactCard from "./contactCard";
import { motion } from "framer-motion";
import MotionSection from "./MotionSection";

const Hero = () => {
  useEffect(() => {
    // new FinisherHeader({
    //   count: 5,
    //   size: {
    //     min: 500,
    //     max: 800,
    //     pulse: 0,
    //   },
    //   speed: {
    //     x: {
    //       min: 0,
    //       max: 0.5,
    //     },
    //     y: {
    //       min: 0,
    //       max: 0.5,
    //     },
    //   },
    //   colors: {
    //     background: "#f0fdf4",
    //     particles: ["#0d542b", "#9cb080"],
    //   },
    //   blending: "lighten",
    //   opacity: {
    //     center: 0.4,
    //     edge: 0.15,
    //   },
    //   skew: 0,
    //   shapes: ["t"],
    // });
  });
  return (
    <MotionSection id="hero" className="relative overflow-hidden md:h-screen ">
      <div className="absolute  header bg-cover bg-center  finisher-header w-full inset-0 "></div>

      <div className="max-w-6xl relative min-h-screen mx-auto px-10 z-10 grid grid-cols-1 gap-8 md:grid-cols-2 items-start pt-40">
        <motion.div
          initial={{ opacity: 0, x: 70, filter: "blur(8px)" }}
          animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="md:mt-10"
        >
          <p className="bg-white/20 backdrop-blur-sm   font-text text-primary px-4 py-2 inline-block rounded-full border border-primary shadow ">
            عقارات مختارة بعناية
          </p>
          <h2 className="mt-5 md:mt-10 font-header text-4xl text-primary font-bold max-w-4xl "> اكتشف عقارك المثالي مع خبراء السوق العقاري </h2>
          <p className="mt-5 font-text text-primary text-lg">نساعدك على اكتشاف عقارات استثنائية و تحقيق أفضل عائد لاستثمارك بخدمة إدارة متكاملة.</p>
          <div className="flex mt-10 gap-2.5">
            <Button title="الخدمات" href="#service" />
            <Button title="احجز استشارة مجانية" variant="secondary" />
          </div>
        </motion.div>

        <div initial={{ opacity: 0, x: -36 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1.6, delay: 0.2 }} id="contact">
          <ContactCard />
        </div>
      </div>
    </MotionSection>
  );
};

export default Hero;
