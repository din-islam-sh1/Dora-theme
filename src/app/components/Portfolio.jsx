import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";

import Image from "next/image";
import portofolio_1 from "../../img/portfolio/banner.png";
import portofolio_2 from "../../img/portfolio/banner2.png";
import portofolio_3 from "../../img/portfolio/6.png";

export default function Portfolio() {
  const data = [
    {
      label: "All",
      value: "all",
      desc: (
        <>
          <div className=" grid grid-cols-3 gap-x-4">
            <div>
              <div className=" flex flex-col space-y-4">
                <Image src={portofolio_1} alt="banner"></Image>
                <Image src={portofolio_3} alt="banner"></Image>
              </div>
            </div>
            <div className=" col-span-2">
               <div className=" flex flex-col">
                   <div className=" flex space-x-4 mb-4">
                   <Image src={portofolio_2} alt="banner"></Image>
                   <Image src={portofolio_2} alt="banner"></Image>
                   </div>
                   <div className=" flex space-x-4">
                   <Image src={portofolio_1} alt="banner"></Image>
                   <Image src={portofolio_1} alt="banner"></Image>
                   </div>
               </div>
            </div>
          </div>
        </>
      ),
    },
    {
      label: "youtube",
      value: "youtube",
      desc: `Because it's about motivating the doers. Because I'm here
        to follow my dreams and inspire other people to follow their dreams, too.`,
    },
    {
      label: "details",
      value: "details",
      desc: `We're not always in the position that we want to be at.
        We're constantly growing. We're constantly making mistakes. We're
        constantly trying to express ourselves and actualize our dreams.`,
    },
    {
      label: "Angular",
      value: "angular",
      desc: `Because it's about motivating the doers. Because I'm here
        to follow my dreams and inspire other people to follow their dreams, too.`,
    },
    {
      label: "Svelte",
      value: "svelte",
      desc: `We're not always in the position that we want to be at.
        We're constantly growing. We're constantly making mistakes. We're
        constantly trying to express ourselves and actualize our dreams.`,
    },
  ];

  return (
    <section className=" py-10">
      <div className=" container mx-auto px-4 ">
        <div className="content mb-4 text-center leading-tight">
          <h3 className=" text-primary  text-[1.5rem]">Protfolio</h3>
          <h1 className=" text-secend font-bold text-[2rem]">
            My Amazing Works
          </h1>
        </div>

        <Tabs value="all" className=" ">
          <TabsHeader
            className="bg-transparent  px-[20rem]"
            indicatorProps={{
              className: "bg-blue-500/10 shadow-none text-blue-500",
            }}
          >
            {data.map(({ label, value }) => (
              <Tab key={value} value={value}>
                {label}
              </Tab>
            ))}
          </TabsHeader>
          <TabsBody>
            {data.map(({ value, desc }) => (
              <TabPanel key={value} value={value}>
                {desc}
              </TabPanel>
            ))}
          </TabsBody>
        </Tabs>
      </div>
    </section>
  );
}
