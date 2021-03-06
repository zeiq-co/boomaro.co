import React from "react";

const PricingCards = () => (
  <section className="bg-gray-100 py-8">
    <div className="container mx-auto px-2 pt-4 pb-12 text-gray-800">
      <h1 className="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800">
        Pricing
      </h1>
      <div className="w-full mb-4">
        <div className="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"></div>
      </div>

      <div className="flex flex-col sm:flex-row justify-center pt-12 my-12 sm:my-4">
        <div className="flex flex-col w-5/6 lg:w-1/4 mx-auto lg:mx-0 rounded-none lg:rounded-l-lg bg-white mt-4">
          <div className="flex-1 bg-white text-gray-600 rounded-t rounded-b-none overflow-hidden shadow">
            <div className="p-8 text-3xl font-bold text-center border-b-4">
              Three Month
            </div>
            <ul className="w-full text-center text-sm">
              <li className="border-b py-4">Custom invoices</li>
              <li className="border-b py-4">E-invoicing</li>
              <li className="border-b py-4">Bulk data uploads</li>
            </ul>
          </div>
          <div className="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow p-6">
            <div className="w-full pt-6 text-3xl text-gray-600 font-bold text-center">
              ₹ 6,999 
              {/* <span className="text-base"> / for Three month</span> */}
            </div>
            <div className="flex items-center justify-center">
            <a
                href="https://rzp.io/l/trIlvds"
                target="_blank"
                rel="noopener noreferrer"
              >
              <button className="mx-auto lg:mx-0 hover:underline gradient text-white font-bold rounded-full my-6 py-4 px-8 shadow-lg">
                Buy now
              </button>
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-col w-5/6 lg:w-1/3 mx-auto lg:mx-0 rounded-lg bg-white mt-4 sm:-mt-6 shadow-lg z-10">
          <div className="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow">
            <div className="w-full p-8 text-3xl font-bold text-center">
              Six Month
            </div>
            <div className="h-1 w-full gradient my-0 py-0 rounded-t"></div>
            <ul className="w-full text-center text-base font-bold">
              <li className="border-b py-4">Save time</li>
              <li className="border-b py-4">Custom invoices</li>
              <li className="border-b py-4">E-invoicing</li>
              <li className="border-b py-4">Bulk data uploads</li>
            </ul>
          </div>
          <div className="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow p-6">
            <div className="w-full pt-6 text-4xl font-bold text-center">
              ₹ 9,999 
              {/* <span className="text-base">/ For Six month</span> */}
            </div>
            <div className="flex items-center justify-center">
            <a
                href="https://rzp.io/l/WTcW4by"
                target="_blank"
                rel="noopener noreferrer"
              >
              <button className="mx-auto lg:mx-0 hover:underline gradient text-white font-bold rounded-full my-6 py-4 px-8 shadow-lg">
                Buy now
              </button>
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-col w-5/6 lg:w-1/4 mx-auto lg:mx-0 rounded-none lg:rounded-l-lg bg-white mt-4">
          <div className="flex-1 bg-white text-gray-600 rounded-t rounded-b-none overflow-hidden shadow">
            <div className="p-8 text-3xl font-bold text-center border-b-4">
              One Year
            </div>
            <ul className="w-full text-center text-sm">
              <li className="border-b py-4">Custom invoices</li>
              <li className="border-b py-4">E-invoicing</li>
              <li className="border-b py-4">Bulk data uploads</li>
            </ul>
          </div>
          <div className="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow p-6">
            <div className="w-full pt-6 text-3xl text-gray-600 font-bold text-center">
              ₹ 14,999 
              {/* <span className="text-base">/ For year</span> */}
            </div>
            <div className="flex items-center justify-center">
            <a
                href="https://rzp.io/l/OUcDPh5"
                target="_blank"
                rel="noopener noreferrer"
              >
              <button className="mx-auto lg:mx-0 hover:underline gradient text-white font-bold rounded-full my-6 py-4 px-8 shadow-lg">
                Buy now
              </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default PricingCards;
