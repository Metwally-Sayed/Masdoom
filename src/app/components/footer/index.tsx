import React from "react";
import Image from "next/image";
import logo from "../../../../public/masdoomLogo.svg";

const index = () => {
  return (
    <div className="bg-black w-full pt-16 pb-12 flex flex-col items-center justify-between">
      <div>
        <Image src={logo} alt="logo" width={200} />
      </div>
      <div className="flex flex-col gap-10 text-white font-bold text-xl  md:flex-row items-center gap-5 py-5">
        <a href="#">الرئيسية</a>
        <a href="#">جميع السيارات</a>
        <a href="#">اتصل بنا</a>
      </div>
      <hr className="w-4/5" />
      <div className="text-white flex flex-col md:flex-row items-center pt-5">
        <div className="flex justify-between">
          <p>جميع الحقوق محفوظة لمنصة مصدوم 2023 ©</p>
          <span className="flex gap-2">
            <a href="#">سياسة الخصوصية</a>
            <a href="#">الشروط والأحكام</a>
          </span>
        </div>
      </div>
    </div>
  );
};

export default index;
