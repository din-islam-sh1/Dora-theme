import React from "react";
import Image from "next/image";
import BannerMan from "../../img/hero-person-img.png";

const Hero = () => {
  return (
    <section>
      <div className="bg-[#FDF8F7]">
        <div className="container mx-auto">
          <div
            className=" grid grid-cols-1 md:grid-cols-2 pt-[155px]    items-center 
          
           justify-items-center
          "
          >
            {/* hero content */}
            <div className="pt-10 pb-[45px] p-4 md:p-0">
              <span className="text-2xl text-[#FD6E0A] font-bold">Hi I m</span>
              <h1 className="text-[70px] text-[#15295F] font-bold leading-[1.3]">
                Mary Hardy
              </h1>
              <h3 className="  leading-tight mt-4  text-[#15295F] font-semibold">
                Digital Marketing Expert
              </h3>
              <p className="my-5 text-left pr-5  text-[#8F93A8]">
                Shot what able cold new the see hold. Friendly as an betrayed
                formerly he. Morning because as to society behaved moments
              </p>

              <div className=" cta__buttons space-x-2 mt-8">
                <button
                  className=" 
                  
                  hover:bg-transparent
                  hover:border-[#FD6E0A]
                  hover:text-[#FD6E0A]

                   transition-all
                     duration-300
                  border-2
                   border-transparent
                  
                  px-8 py-3 rounded-full bg-[#FD6E0A] text-white "
                >
                  Downlod Cv
                </button>
                <button
                  className=" px-8 py-3 
                  
                
                  rounded-full  border-2 border-[#FD6E0A] text-[#FD6E0A] "
                >
                  Contact
                </button>
              </div>
            </div>

            {/* hero imge */}
            <div className="   order-first md:order-last">
              <Image src={BannerMan} alt="man" height={600} width={600} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
