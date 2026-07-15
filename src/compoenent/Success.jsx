import React from "react";
import { FiMenu, FiX } from "react-icons/fi";

const Success = ({ closeModal }) => {
  return (
    <div class="fixed left-0 top-0 flex h-screen px-3 md:px-0 w-full items-center justify-center bg-black/20 py-10">
      <div class="max-h-full w-full px-2 max-w-xl overflow-y-auto rounded-2xl bg-white">
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
