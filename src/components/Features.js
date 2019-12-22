import React from "react";
import feature from "../../static/images/boomaro-dashboard.png";

const Features = () => (
  <section className="bg-white border-b py-8">
    <div className="container max-w-5xl mx-auto m-8">
      <h2 className="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800"></h2>
      <div className="w-full mb-4">
        <div className="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"></div>
      </div>

      <div className="flex flex-wrap">
        <div className="w-5/6 sm:w-1/2 p-6">
          <h3 className="text-3xl text-gray-800 font-bold leading-none mb-3">
            Online GST accounting software
          </h3>
          <p className="text-gray-600 mb-8">
            Keep the money coming in with Boomaro App. Send estimates, convert
            to invoices, and get paid online, on time. Create GST invoices in
            seconds Chase payments easily with payment reminders Give your
            customers online payment options and get paid faster
            <br />
            <br />
          </p>
        </div>
        <div className="w-full sm:w-1/2 p-6">
          <img src={feature} />
        </div>
      </div>

      <div className="flex flex-wrap flex-col-reverse sm:flex-row">
        <div className="w-full sm:w-1/2 p-6 mt-6">
          <img src={feature} />
        </div>
        <div className="w-full sm:w-1/2 p-6 mt-6">
          <div className="align-middle">
            <h3 className="text-3xl text-gray-800 font-bold leading-none mb-3">
              built for your business
            </h3>
            <p className="text-gray-600 mb-8">
              Capture the goods and services you offer and quickly add them to
              your transactions. Keep track of inventory levels at all times Set
              reorders point and replenish stock when it gets low Organize your
              inventory with vital information like SKU, cost, and stock on hand
              <br />
              <br />
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Features;
