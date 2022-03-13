/*!
 * @author Mohamed Muntasir
 * @link https://github.com/devmotheg
 */

import React, { useContext } from "react";
import { FaTimes } from "react-icons/fa";

import { SidebarContext } from "../context/SidebarProvider";
import sublinks from "../data/sublinks";

const Sidebar = () => {
  const { isOpen, setIsOpen } = useContext(SidebarContext);

  let [bgStyling, styling] = ["opacity-1 visible", "scale-100"];
  if (!isOpen) [bgStyling, styling] = ["opacity-0 invisible", "scale-0"];

  return (
    <div
      className={`absolute top-0 left-0 z-20 flex items-center transition-all justify-center w-full h-full bg-black/50 ${bgStyling}`}>
      <div
        className={`relative grid gap-8 p-6 bg-white rounded transition-all ${styling}`}>
        <button
          className="absolute p-2 right-px top-px"
          onClick={() => {
            if (setIsOpen) setIsOpen(false);
          }}>
          <span className="sr-only">close sidebar</span>
          <FaTimes className="w-6 h-6 text-black transition hover:text-red-500" />
        </button>
        {sublinks.map(s => {
          return (
            <div key={JSON.stringify(s)}>
              <strong className="block mb-2 text-xl font-bold capitalize">
                {s.page}
              </strong>
              <ul className="grid items-center grid-cols-2 gap-4">
                {s.links.map(l => {
                  return (
                    <li
                      key={JSON.stringify(l)}
                      className="flex items-center gap-2 p-4">
                      {l.icon}{" "}
                      <a
                        href={l.url}
                        className="text-lg capitalize text-slate-600">
                        {l.label}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Sidebar;
