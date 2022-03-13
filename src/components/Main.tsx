/*!
 * @author Mohamed Muntasir
 * @link https://github.com/devmotheg
 */

import React, { useContext } from "react";

import { SubmenuContext } from "../context/SubmenuProvider";

const Main = () => {
  const { setPosition } = useContext(SubmenuContext);

  const handleLeave = () => {
    if (setPosition) setPosition({ x: 0, y: 0 });
  };

  return (
    <main
      className="flex flex-col justify-center min-h-[calc(100vh-100px)]"
      onMouseOver={() => handleLeave()}>
      <img
        className="absolute top-0 left-0 object-cover w-full h-full -z-10"
        src={require("../img/hero.svg")}
        alt="hero background"
      />
      <section className="container flex items-center w-5/6 gap-4 mx-auto">
        <div className="text-center lg:text-left">
          <h1 className="mb-6 text-6xl font-bold">
            Payments
            <br />
            infrastructure
            <br />
            for the internet
          </h1>
          <p className="mb-4 text-xl text-slate-600">
            Millions of companies of all sizes—from startups to Fortune 500s—use
            Stripe’s software and APIs to accept payments, send payouts, and
            manage their businesses online.
          </p>
          <button className="px-3 py-1 text-white capitalize transition bg-black border-2 border-black border-solid rounded hover:text-black hover:bg-white">
            start now
          </button>
        </div>
        <img
          className="hidden lg:block"
          src={require("../img/phone.svg")}
          alt="phone image"
        />
      </section>
      <a
        className="block mx-auto mt-6 text-sm font-bold w-fit"
        href="https://github.com/devmotheg">
        Coded by Mohamed Muntasir
      </a>
    </main>
  );
};

export default Main;
