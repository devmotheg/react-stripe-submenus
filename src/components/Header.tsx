/*!
 * @author Mohamed Muntasir
 * @link https://github.com/devmotheg
 */

import React, { useContext, useEffect } from "react";
import { FaBars } from "react-icons/fa";

import { SubmenuContext } from "../context/SubmenuProvider";
import { SidebarContext } from "../context/SidebarProvider";
import sublinks from "../data/sublinks";

const Header = () => {
  const { setPosition, setLinks } = useContext(SubmenuContext);
  const { setIsOpen } = useContext(SidebarContext);

  const handleHover = (e: React.MouseEvent, links: SubmenuLink[]) => {
    const { left, bottom, right } = (
      e.target as HTMLButtonElement
    ).getBoundingClientRect();
    const mid = left + (right - left) / 2;

    if (setPosition) setPosition({ x: mid, y: bottom });
    if (setLinks) setLinks(links);
  };

  const handleLeave = (e: React.MouseEvent) => {
    if (!(e.target as HTMLElement).matches(".trigger-submenu") && setPosition)
      setPosition({ x: 0, y: 0 });
  };

  return (
    <header className="container w-5/6 py-4 mx-auto max-h-[100px]">
      <nav
        className="flex items-center justify-between"
        onMouseOver={handleLeave}>
        <img src={require("../img/logo.svg")} alt="stripe logo" />
        <div className="hidden lg:block">
          {sublinks.map(s => {
            return (
              <button
                key={JSON.stringify(s)}
                className="px-6 py-2 text-xl text-white capitalize drop-shadow-md trigger-submenu"
                onMouseOver={e => handleHover(e, s.links)}>
                {s.page}
              </button>
            );
          })}
        </div>
        <button className="hidden px-3 py-1 text-white capitalize transition bg-black border-2 border-black border-solid rounded lg:inline hover:text-black hover:bg-white">
          sign in
        </button>
        <button
          className="p-2 transition bg-black border-2 border-black border-solid rounded lg:hidden group hover:bg-white"
          onClick={() => {
            if (setIsOpen) setIsOpen(true);
          }}>
          <span className="sr-only">sidebar open</span>
          <FaBars className="w-5 h-5 text-white transition group-hover:text-black" />
        </button>
      </nav>
    </header>
  );
};

export default Header;
