import React from "react";
import OrderForm from "./_components/OrderForm/form";
import OrderSummary from "./_components/OrderSummary/order-summary";

const Page = () => {
  return (
    <main>
      <section className="w-full flex flex-col gap-10 items-center justify-center py-12 px-4 min-[400px]:px-6 sm:px-8">
        <OrderSummary />
        <OrderForm />
      </section>
    </main>
  );
};

export default Page;
