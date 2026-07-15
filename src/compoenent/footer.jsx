import React from "react";
import { services, navLinks } from "../assets/data";
import { FiFacebook, FiInstagram, FiLinkedin, FiSend } from "react-icons/fi";
import assets from "../assets/data";
import MotionSection from "./MotionSection";

const Footer = () => {
  return (
    <MotionSection className="py-16 text-primary">
      <div className="px-5 max-w-6xl mx-auto  grid grid-cols-1 md:grid-cols-4 items-center gap-12">
        <div>
          <a href="#home" aria-label="دار الأثر الرئيسية">
            <img src={assets.royaLogo} className="w-20" alt="" />
          </a>
          <p className="mt-5 text-md font-text  text-primary/60">عقارات استثنائية وادارة كاملة لطلبك</p>
          <div className="mt-6 flex gap-3">
            {[FiInstagram, FiFacebook, FiLinkedin].map((Icon, index) => (
              <a
                key={index}
                href="#home"
                className="grid h-10 w-10 place-items-center rounded-full border border-white bg-primary text-white transition hover:bg-accent hover:text-primary"
              >
                <Icon aria-hidden="true" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h2 className="font-header text-xl  text-primary">روابط التنقل</h2>
          <div className="mt-5 flex flex-col gap-3">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className="text-md text-primary/60 transition hover:text-primary">
                {link.label}
              </a>
            ))}
          </div>
        </div>

        <div>
          <h2 className="font-header text-xl  text-primary">الخدمات</h2>
          <div className="mt-5 flex flex-col gap-3">
            {services.map((service) => (
              <a key={service.title} href="#services" className="text-md text-primary/60 transition hover:text-primary">
                {service.title}
              </a>
            ))}
          </div>
        </div>

        <div>
          <h2 className="font-header text-xl  text-primary">اشتراك </h2>
          <p className="mt-5 text-md text-primary/60 transition hover:text-primary"></p>
          <form className="mt-5 flex overflow-hidden rounded-full border border-primary bg-warm-white/8">
            <input
              type="email"
              placeholder="بريدك الإلكتروني"
              className="min-w-0 flex-1 bg-transparent px-5 py-4 text-sm text-warm-white outline-none placeholder:text-primary"
            />
            <button type="submit" className="grid w-14 place-items-center bg-warm-white text-ink transition hover:bg-beige">
              <FiSend className="text-primary" />
            </button>
          </form>
        </div>
      </div>
      <div className=" mt-12 border-t border-primary/50 pt-7 text-center text-sm text-primary/65">© 2026 رؤية العقار جميع الحقوق محفوظة.</div>
    </MotionSection>
  );
};

export default Footer;
