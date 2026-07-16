import React from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { useEffect } from "react";
const Success = ({ closeModal }) => {
    useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  return (
    <div class="fixed inset-0 z-50 overflow-hidden bg-black/50 flex items-center justify-center">
      <div class="relative max-h-full w-full px-2 max-w-xl overflow-y-auto rounded-2xl bg-white">
        <FiX className="absolute mt-1.5 bg-primary text-white rounded-full  cursor-pointer" size={25} onClick={closeModal} />

        <div class="w-full">
          <div class="m-8 my-20 max-w-[400px] mx-auto">
            <div class="mb-8">
              <h1 class="mb-4 text-2xl font-extrabold text-center text-primary">وصلتنا رسالتك وبنتواصل معاك قريب !</h1>
            </div>
            <div class="space-y-4 mx-auto flex justify-center items-center">
              <a href="#hero" class="p-1 text-primary border-1 border-primary text-sm cursor-pointer rounded-full w-full text-center">
                الذهاب للصفحة الرئيسية
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Success;
