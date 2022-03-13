/*!
 * @author Mohamed Muntasir
 * @link https://github.com/devmotheg
 */

import React, { useContext } from "react";

import { SubmenuContext } from "../context/SubmenuProvider";

const Submenu = () => {
  const {
    position: { x, y },
    links,
  } = useContext(SubmenuContext);

  return x && y ? (
    <ul
      className="flex gap-6 absolute top-0 -translate-x-2/4 z-10 before:absolute before:-top-4 before:left-1/2 before:-translate-x-1/2 before:border-solid before:border-[0.5rem] before:[border-color:transparent_transparent_white_transparent] left-0 p-4 transition-all bg-white rounded shadow-md"
      style={{
        left: x || 0,
        top: y || 0,
      }}>
      {links.map(l => {
        return (
          <li key={JSON.stringify(l)} className="flex items-center gap-2">
            {l.icon}{" "}
            <a href={l.url} className="text-lg capitalize text-slate-600">
              {l.label}
            </a>
          </li>
        );
      })}
    </ul>
  ) : null;
};

export default Submenu;
