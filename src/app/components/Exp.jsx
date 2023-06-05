"use client";
import React from "react";
import { Progress } from "@material-tailwind/react";

const Exp = () => {
  return (
    <section className="  py-[5rem] bg-[#FDF8F7] ">

      <div className=" container mx-auto p-4">
        {/* exp headings */}
        <div className="exp__header text-center leading-tight">
          <h3 className="  text-[1.5rem]   text-primary">Why Choose Me</h3>
          <h1 className=" text-[2rem] text-secend font-bold">
            My Expericence Area
          </h1>
        </div>

        {/* exp prograses bar */}
        <div className="exp__prog grid grid-cols-1  gap-[4rem] md:grid-cols-2 my-[2rem]">

          <div className=" space-y-6">
            {/* itmes__1 */}
            <div>
              <div className=" flex justify-between items-center">
                <p className=" text-secend font-bold mb-2">
                  Facebook Marketing
                </p>
                <span className=" text-secend font-bold  block">95%</span>
              </div>

              <Progress value={95} color="orange"   className="bg-[#CDCDCD]"/>
            </div>
            {/* itmes__2 */}
            <div>
              <div className=" flex justify-between items-center">
                <p className=" text-secend font-bold mb-2">
                  Search Engine Optimization
                </p>
                <span className=" text-secend font-bold  block">90%</span>
              </div>

              <Progress value={90} color="orange"   className="bg-[#CDCDCD]"/>
            </div>
            {/* itmes__2 */}
            <div>
              <div className=" flex justify-between items-center">
                <p className=" text-secend font-bold mb-2">
                  Search Engine Optimization
                </p>
                <span className=" text-secend font-bold  block">90%</span>
              </div>

              <Progress value={90} color="orange"   className="bg-[#CDCDCD]"/>
            </div>
            {/* itmes__2 */}
            <div>
              <div className=" flex justify-between items-center">
                <p className=" text-secend font-bold mb-2">
                  Search Engine Optimization
                </p>
                <span className=" text-secend font-bold  block">90%</span>
              </div>

              <Progress value={90} color="orange"   className="bg-[#CDCDCD]"/>
            </div>
          </div>
          <div className=" space-y-6">
            {/* itmes__1 */}
            <div>
              <div className=" flex justify-between items-center">
                <p className=" text-secend font-bold mb-2">
                  Facebook Marketing
                </p>
                <span className=" text-secend font-bold  block">95%</span>
              </div>

              <Progress value={95} color="orange"   className="bg-[#CDCDCD]"/>
            </div>
            {/* itmes__2 */}
            <div>
              <div className=" flex justify-between items-center">
                <p className=" text-secend font-bold mb-2">
                  Search Engine Optimization
                </p>
                <span className=" text-secend font-bold  block">90%</span>
              </div>

              <Progress value={90} color="orange"   className="bg-[#CDCDCD]"/>
            </div>
            {/* itmes__2 */}
            <div>
              <div className=" flex justify-between items-center">
                <p className=" text-secend font-bold mb-2">
                  Search Engine Optimization
                </p>
                <span className=" text-secend font-bold  block">90%</span>
              </div>

              <Progress value={90} color="orange"   className="bg-[#CDCDCD]"/>
            </div>
            {/* itmes__2 */}
            <div>
              <div className=" flex justify-between items-center">
                <p className=" text-secend font-bold mb-2">
                  Search Engine Optimization
                </p>
                <span className=" text-secend font-bold  block">90%</span>
              </div>

              <Progress value={90} color="orange"   className="bg-[#CDCDCD]"/>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Exp;
