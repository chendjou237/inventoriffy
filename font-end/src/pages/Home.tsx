import React, { useState } from "react";
import { FeaturesCard, StatsComponent } from "../components";

const Home = () => {
  const [navbar, setNavbar] = useState(false);
  return (
    <>
      <nav className="w-full bg-base-300 shadow lg:py-5 ">
        <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
          <div>
            <div className="flex items-center justify-between py-3 md:py-5 md:block">
              <a href="/">
                <h2 className="text-2xl font-bold text-white">INVENTORYFY</h2>
              </a>
              <div className="md:hidden">
                <button
                  className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                  onClick={() => setNavbar(!navbar)}
                >
                  {navbar ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6 text-white"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    </svg>
                  )}
                </button>
              </div>
            </div>
          </div>
          <div>
            <div
              className={`flex-1 justify-self-center pb-3 mt-8 md:hidden md:pb-0 md:mt-0 ${
                navbar ? "block" : "hidden"
              }`}
            >
              <div className="mt-3 space-y-2 lg:hidden md:inline-block">
                <a
                  href="/login"
                  className="inline-block w-full px-4 py-2 text-center text-white bg-gray-600 rounded-md shadow hover:bg-gray-800 "
                >
                  Sign in
                </a>
                <a
                  href=""
                  className="inline-block w-full px-4 py-2 text-center text-gray-800 bg-white rounded-md shadow hover:bg-gray-100"
                >
                  Register inventory
                </a>
              </div>
            </div>
          </div>
          <div className="hidden space-x-2 md:inline-block">
            <a
              href="/login"
              className="px-4 py-2 text-white btn btn-outline rounded-md shadow hover:bg-gray-800 mr-5"
            >
              Sign in
            </a>
            <a
              href="/register"
              className="px-4 py-2 text-gray-800 btn bg-white rounded-md shadow hover:bg-gray-100"
            >
              Register inventory
            </a>
          </div>
        </div>
      </nav>
      <div className="container lg:max-w-screen-lg mx-auto px-5">
        <div className="flex flex-col-reverse lg:flex-row justify-between items-center py-10">
          <div className="lg:w-1/2">
            <div className="flex flex-col">
              <h1 className="text-xl lg:text-5xl md:text-2xl font-bold text-white">
                Top-notch IT inventory management for informed business
                decisions
              </h1>
              <p className="text-gray-300 md:text-lg mt-5 ">
                Inventory all your IT and non-IT assets, including your software
                licenses, with the native IT asset management capabilities of
                ServiceDesk Plus. Maximize the visibility of your hardware and
                software assets with multiple discovery modes like Windows
                domain scan, script scan, agent-based scan, and barcode
                scanning. Effectively inventory all your hardware and software
                assets by defining custom product types, products, and product
                groups. Also, keep track of the key asset financials including
                their depreciation information. Generate custom reports on your
                IT asset inventory for effective planning and budgeting.
              </p>
            </div>
          </div>
          <div className="lg:w-1/2 mb-10 lg:mb-0">
            <img
              src="https://www.stelleninfotech.com/images/inventory-management-system.png"
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="w-full py-0 bg-gray-500">
        <div className="flex flex-col  justify-center items-center py-10">
          <h2 className=" text-lg lg:text-4xl text-center font-bold  text-black px-10">
            With Inventoryfy, transform the way your ticketing system works to
            enhance your ticket resolution experience.
          </h2>
          <div className="pt-10 grid grid-cols-3 divide-x">
            <StatsComponent title="2+ Years" textbody="of experience" />
            <StatsComponent title="10+" textbody="Service desks" />
            <StatsComponent title="10" textbody="regions of Cameroon" />
          </div>
        </div>
      </div>
      <div className="mt-10 container lg:max-w-screen-lg mx-auto px-5 text-center">
        <h1 className="text-xl md:text-2xl lg:text-5xl font-bold mb-10">
          {" "}
          Features of the application
        </h1>
        <div className="flex flex-col lg:flex-row space-x-6  ">
          <FeaturesCard
            imageUrl="https://us.123rf.com/450wm/skypicsstudio/skypicsstudio1904/skypicsstudio190400064/skypicsstudio190400064.jpg?ver=6"
            title="Wharehouse management"
            desc="A warehouse management system (WMS) provides real-time visibility on a business’ inventory and operations"
          />
          <FeaturesCard
            imageUrl="https://thumbs.dreamstime.com/b/work-performance-schedule-staff-discipline-time-attendance-tracking-system-office-time-tracking-employee-time-management-155073624.jpg"
            title="Stock Tracking"
            desc="A tracking stock is a special equity offering issued by a parent company that tracks the financial performance of a particular segment or divisio"
          />
          <FeaturesCard
            imageUrl="https://www.pngitem.com/pimgs/m/333-3331732_intelligent-clipart-human-brain-business-intelligence-brain-hd.png"
            title="Intelligent reporting and analytics"
            desc="? Business Intelligence reporting is broadly defined as the process of using a BI tool to prepare and analyze data to find and share actionable insights"
          />
        </div>
        <div className="flex flex-col lg:flex-row mt-10 space-x-6 mb-10">
          <FeaturesCard
            imageUrl="https://icon2.cleanpng.com/20180326/coq/kisspng-cartoon-graphic-design-office-5ab938d0114a77.2107562315220881440708.jpg"
            title="Busibess to business"
            desc="
B2B e-commerce, short for business-to-business electronic commerce, is the sale of goods or services between businesses via an online sales portal. "
          />
          <FeaturesCard
            imageUrl="https://corporate.payu.com/wp-content/uploads/2022/02/payment-gateway-generic_990x640.png"
            title="Payment Gateway"
            desc="A payment gateway is a merchant service provided by an e-commerce application service provider that authorizes credit card or direct payments processing for e-businesses, online retailers, bricks and clicks, or traditional brick and mortar. "
          />
          <FeaturesCard
            imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTXLedG0u3xD-jpk95kJLZFSnXHSgvujiUTPa64_oe&s"
            title="Purchase and Sales Order"
            desc="Purchase orders are used by buyers to initiate the purchasing process with a supplier. "
          />
        </div>
      </div>
    </>
  );
};

export default Home;
