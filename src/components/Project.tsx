/*!
 * @author Mohamed Muntasir
 * @link https://github.com/devmotheg
 */

import React from "react";

import SidebarProvider from "../context/SidebarProvider";
import SubmenuProvider from "../context/SubmenuProvider";

import Header from "./Header";
import Sidebar from "./Sidebar";
import Submenu from "./Subemenu";
import Main from "./Main";

const Project = () => {
	return (
		<SubmenuProvider>
			<SidebarProvider>
				<Header />
				<Sidebar />
			</SidebarProvider>
			<Submenu />
			<Main />
		</SubmenuProvider>
	);
};

export default Project;
