import React from "react";

const TitleCards = () => (
  <section className="bg-white border-b py-8">
    <div className="container mx-auto flex flex-wrap pt-4 pb-12">
      <h3 className="w-full my-2 text-3xl font-bold leading-tight text-center text-gray-800">
        Here's how Boomaro App keeps your business GST compliant
      </h3>
      <div className="w-full mb-4">
        <div className="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"></div>
      </div>

      <div className="w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink">
        <div className="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow">
            <div className="w-full font-bold text-xl text-gray-800 px-6">
              GST treatment for items and contacts
            </div>
            <p className="text-gray-800 text-base px-6 mb-5">
            Boomaro App lets you associate HSN/SAC codes with your assets and services and record the GSTINs for associations at the time of creation. The next time you generate a transaction, the corresponding information is auto-populated.
            </p>
        </div>
        <div className="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow p-6">
          <div className="flex items-center justify-start">
            {/* <button className="mx-auto lg:mx-0 hover:underline gradient text-white font-bold rounded-full my-6 py-4 px-8 shadow-lg">
              Action
            </button> */}
          </div>
        </div>
      </div>

      <div className="w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink">
        <div className="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow">
            <div className="w-full font-bold text-xl text-gray-800 px-6">
              GST in transactions
            </div>
            <p className="text-gray-800 text-base px-6 mb-5">
              Get a grip on your taxes with Boomaro App. From the place of supply to GST levied on assets and services, display all relevant details in your bills and invoices so your transactions meet the Government mandates.
            </p>
        </div>
        <div className="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow p-6">
          <div className="flex items-center justify-center">
            {/* <button className="mx-auto lg:mx-0 hover:underline gradient text-white font-bold rounded-full my-6 py-4 px-8 shadow-lg">
              Action
            </button> */}
          </div>
        </div>
      </div>

      <div className="w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink">
        <div className="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow">
            <div className="w-full font-bold text-xl text-gray-800 px-6">
              Customise invoices
            </div>
            <p className="text-gray-800 text-base px-6 mb-5">
              Send payment reminders every time you send an invoice to ensure you get paid on time. Your consumers will get nudged several days before an invoice is due, and several days after it’s overdue until they pay. It’s the most effective way for freelancers and small businesses to manage their cash flow.
            </p>
        </div>
        <div className="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow p-6">
          <div className="flex items-center justify-end">
            {/* <button className="mx-auto lg:mx-0 hover:underline gradient text-white font-bold rounded-full my-6 py-4 px-8 shadow-lg">
              Action
            </button> */}
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default TitleCards;
