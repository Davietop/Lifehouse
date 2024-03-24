import React, { useEffect, useState } from "react";
import { Accordion, AccordionItem } from "@nextui-org/react";
import { fontSans, roboto, open_Sans, poppins } from "@/fonts";
import { cn } from "@/lib/utils";
import localFont from "next/font/local";
import Image from "next/image";

import faq from "../public/faq.png";
import { Button } from "@nextui-org/react";
import search from "../public/search.png";
import general from "../public/book.png";
import customer_service from "../public/customer_service.png";
import pricing from "../public/pricing.png";
import phone from "../public/phone.png";
import mail from "../public/mail.png";

const style2 = {
  background: "rgba(255, 255, 255,0.1)",
  backdropFilter: "blur(5.9px)",
};

const question = [
  {
    id: "general",
    question: "What services does Lifehouse Creatives provide?",
    answer:
      "We provide digital marketing and sales management services for small and mid-sized companies, and our close-knit team also works well with early stage entrepreneurs and solopreneurs.",
  },
  {
    id: "service",
    question:
      "What form of Digital Marketing and Sales Management services do you provide?",
    answer:
      "Our clients trust us to handle a wide-array of their needs including CRM Implementation and Management, Marketing Automations, Lead Generation and Conversion Rate Optimization, Web Design and Custom Web Development, Content Marketing and SEO, and Social Media Marketing. We believe our operating model best serves our clients interests.  The difference between the service we provide and the “other guys” is that we are business people that use digital marketing and sales management to grow your business. When we are implementing your digital strategy, we focus on how your digital infrastructures such as CRM, websites, and socials will generate revenue and then we take a conversion-oriented approach to design and make sure that your website is technically configured to rank for the keywords that your business operates within. Our projects are smooth, well laid out, professional, minimalistic, conversion-oriented, SEO-optimized, and designed to grow your business by generating leads and sales",
  },
  {
    id: "service",
    question: "What Industries do you serve?",
    answer:
      "Our ideal client usually come from B2B, B2C, and E-Commerce brands across different industries that include but not limited to Retail, Ecommerce, Information Technology, FInancial Services, Hospitality, Media & Entertainment, & Healthcare  ",
  },
  {
    id: "general",
    question: "Do I get a say in the design and implementation of my project?",
    answer:
      "Definitely! All of our projects start with a design phase that is based on a website questionnaire that takes into account your likes and tastes. The other great part? We design until we get it right, which means no revision limitations like most other companies place on their website designs.",
  },
  {
    id: "service",
    question:
      "What type of support do you provide my business on your products or services?",
    answer:
      "All of our products and services come with personalised support from our amazing team. The way we operate during the implementation phase of a project is that our team acts as your internal digital marketing and sales management team giving you all the benefits an internal team can give, providing a weekly report on project state amongst other things. On the other hand, during the project maintenance phase, we provide the best customer service possible by assigning a member of our team to your business who will be available 24/7 for your support.",
  },
  {
    id: "pricing",
    question: "How am I billed for your services and is there a contract?",
    answer:
      "Most of our services are offered on a contract basis that can range from as little as 1-month to 1-year.  However, flexible contracts can be agreed upon based on negotiations. Extended services are offered at discounted rates. Be aware that the period of a contract is based on the size of the project and we estimate projects to range between small, medium, and full-scale implementations. Small projects can be one-time engagement, and as such billed flexibly. But we do not offer month-to-month agreement on mid sized to full scale implementations because of the intense preparation and research it takes to get a digital strategy fully up and running and positioned for success.  We believe that anyone that is guaranteeing overnight results using their services might as well be selling snake oil. The internet is the most competitive business space in the world and you need the best of the best in your corner in order to succeed. Finally, we believe that each of our customers are unique and have different requirements, as such all customers will be presented with a custom proposal that is unique to their business industry and requirements. For more on pricing and billing, go to our pricing and billing page.",
  },
  {
    id: "general",
    question:
      "Why should I hire Lifehouse Creatives team to implement Digital Marketing and Sales Management services for my business?",
    answer:
      "Implementing a digital strategy is one of the most strategic things you can do for your business, and we want to help you create impactful digital experiences as much as you are looking to grow your business. If you're looking to implement a high level digital strategy for your business on a budget, then you’ll find that our team prioritises long-term business relationships above immediate financial remunerations. Working with Lifehouse Creatives Team is your opportunity to discover the force behind impactful digital experiences.",
  },
  {
    id: "general",
    question: "How do I get my business flying with Lifehouse Creatives?",
    answer:
      "To get started, you have a few different options. You can request a callback through our main website form or book a Free 30 minutes consultation through this calendar. Alternately, Call us at (234) 903-224-5613",
  },
];

const question2 = {
  id: "general",
  question3: [],
};

export default function Faq() {
  const [data2, setData] = useState(question2);

  const checked = question.filter((data) => {
    return data.id === data2.id;
  });

  return (
    <div className="mt-20">
      <div className={cn("text-center  text-bold  ", poppins.className)}>
        {/* <h1 className="text-2xl font-bold">Hi, We're here to help you</h1> */}
        <div className="border-0 shadow mt-6 sm:w-10/12 xs:w-10/12 md:w-8/12 lg:w-7/12 xl:w-6/12 mx-auto border p-2 rounded-lg flex items-center justify-center gap-6">
          <Image src={search.src} width={20} height={20} alt="search" />

          <input
            type="text"
            id="text"
            className="text-sm md:w-9/12 sm:w-11/12 xs:w-11/12 p-1 outline-none"
            placeholder="Keywords (General, Pricing, Service)"
          />
          <Button
            className="bg-[#AD5C16] text-white "
            onClick={() => {
              if (document.querySelector("#text").value === "") return;
              setData({
                id: document.querySelector("#text").value.toLowerCase(),
                question3: [],
              });
            }}
          >
            Search
          </Button>
        </div>
        <p className="mt-4 text-sm">
          Find answers to frequently asked questions
        </p>

        <div
          className="mt-10 flex flex-wrap items-center justify-center gap-6 "
          onClick={(e) => {
            const target = e.target.id.toLowerCase();
            if (!target) return;
            setData({
              id: target,
              question3: [],
            });
          }}
        >
          <div
            className="bg-[#434334] text-white cursor-pointer shadow w-2/12 sm:w-4/12 xs:w-4/12 md:w-3/12 lg:w-2/12 xl:w-1/12 p-4 flex items-center flex-col gap-6 rounded-xl"
            id="general"
          >
            <Image
              src={general.src}
              id="general"
              width={60}
              height={60}
              alt="general"
            />
            <p id="general" className="font-bold ">
              General
            </p>
          </div>
          <div
            className="bg-[#434334] text-white cursor-pointer shadow w-2/12 sm:w-4/12 xs:w-4/12 md:w-3/12 lg:w-2/12 xl:w-1/12 p-4 flex items-center flex-col gap-6 rounded-xl"
            id="service"
          >
            <Image
              src={customer_service.src}
              width={60}
              height={60}
              alt="customer_Service"
              id="service"
            />
            <p id="service" className="font-bold">
              Services
            </p>
          </div>
          <div
            className="bg-[#434334] text-white cursor-pointer shadow w-2/12 sm:w-4/12 xs:w-4/12 md:w-3/12 lg:w-2/12 xl:w-1/12 p-4 flex items-center flex-col gap-6 rounded-xl"
            id="pricing"
          >
            <Image
              id="pricing"
              src={pricing.src}
              width={60}
              height={60}
              alt="pricing"
            />
            <p id="pricing" className="font-bold">
              Pricing
            </p>
          </div>
        </div>
      </div>

      <h3
        className={cn("text-center text-xl font-bold mt-20", poppins.className)}
      >
        {checked[0].id.toLocaleUpperCase()}
      </h3>

      <div className="w-full flex flex-col items-center justify-center mt-10">
        {checked.map((data, index) => {
          if (!data) return;
          return (
            <div
              key={index}
              className={cn(
                "questions sm:w-10/12 xs:w-10/12 md:w-10/12 lg:w-10/12 xl:w-7/12",
                fontSans.className
              )}
            >
              <Accordion>
                <AccordionItem
                  key={index}
                  aria-label="Accordion 3"
                  title={data.question}
                >
                  {data.answer}
                </AccordionItem>
              </Accordion>
            </div>
          );
        })}
      </div>

      <div
        className={cn("text-center mt-10 w-10/12 mx-auto", poppins.className)}
      >
        <h1 className="text-xl font-bold mb-6">You still have a question?</h1>
        <p>
          If you can not find what you are looking for, click contact Lifehouse
          creatives support below
        </p>
        <div className="flex items-center flex-wrap mt-6 gap-10 justify-center">
          <div className="bg-[#434334] text-white shadow w-2/12 sm:w-fit xs:w-fit md:w-fit lg:w-fit p-4 flex items-center flex-col rounded-xl">
            <Image
              src={mail.src}
              width={64}
              height={64}
              alt="mail"
              objectFit="contain"
            />
            <h4 className="font-bold mt-6 mb-6">info@lifehouse.com</h4>
            <p className="text-sm">Best way to answer faster</p>
          </div>
          <div className="bg-[#434334] text-white shadow w-2/12 sm:w-fit xs:w-fit md:w-fit lg:w-fit p-4 flex items-center flex-col rounded-xl">
            <Image src={phone.src} width={64} height={64} alt="call" />
            <h4 className="font-bold  mt-6 mb-6">+(234) 903-224-5613</h4>
            <p className="text-sm">Always happy to help you</p>
          </div>
        </div>
      </div>
    </div>
  );
}
