import React from "react";
import cat from "../../img/portfolio/cat.jpg";
import Image from "next/image";

const Blog = () => {
  return (
    <section className=" py-10 bg-[#1F1D2B]">
      <div className=" container  mx-auto">
        <div className="blog__content text-center mb-11">
          <h3 className=" text-[1.3rem] text-primary">Form My Blog</h3>
          <h1 className=" font-bold text-[1.8rem] text-white">
            Our Recent Updates, Blog, Tips, Tricks & More
          </h1>
        </div>

        {/* carts */}

        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 xl:grid-cols-3">
          {/* cart_1 */}
          <div className="cart relative">
            <Image src={cat} alt="blog_img" />
            <div className=" cart__content">
              <h4 className=" text-sm text-primary py-2">Education</h4>
              <h2 className="text-[1.2rem] text-white font-bold">
                A Podpourri of Learning Options: Pods,
              </h2>
            </div>

            <div className="date right-0 top-0 p-2 bg-[#1F1D2B] text-white absolute">
              <p>April 15, 2023</p>
            </div>
          </div>
          <div className="cart relative">
            <Image src={cat} alt="blog_img" />
            <div className=" cart__content">
              <h4 className=" text-sm text-primary py-2">Education</h4>
              <h2 className="text-[1.2rem] text-white font-bold">
                A Podpourri of Learning Options: Pods,
              </h2>
            </div>

            <div className="date right-0 top-0 p-2 bg-[#1F1D2B] text-white absolute">
              <p>April 15, 2023</p>
            </div>
          </div>
          <div className="cart relative">
            <Image src={cat} alt="blog_img" />
            <div className=" cart__content">
              <h4 className=" text-sm text-primary py-2">Education</h4>
              <h2 className="text-[1.2rem] text-white font-bold">
                A Podpourri of Learning Options: Pods,
              </h2>
            </div>

            <div className="date right-0 top-0 p-2 bg-[#1F1D2B] text-white absolute">
              <p>April 15, 2023</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
