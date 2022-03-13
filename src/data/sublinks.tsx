/*!
 * @author Mohamed Muntasir
 * @link https://github.com/devmotheg
 */

import React from "react";
import { FaCreditCard, FaBook, FaBriefcase } from "react-icons/fa";

const sublinks = [
	{
		page: "products",
		links: [
			{
				label: "payment",
				icon: <FaCreditCard className="text-slate-600" />,
				url: "/products",
			},
			{
				label: "terminal",
				icon: <FaCreditCard className="text-slate-600" />,
				url: "/products",
			},
			{
				label: "connect",
				icon: <FaCreditCard className="text-slate-600" />,
				url: "/products",
			},
		],
	},
	{
		page: "developers",
		links: [
			{
				label: "plugins",
				icon: <FaBook className="text-slate-600" />,
				url: "/products",
			},
			{
				label: "libraries",
				icon: <FaBook className="text-slate-600" />,
				url: "/products",
			},
			{
				label: "help",
				icon: <FaBook className="text-slate-600" />,
				url: "/products",
			},
			{
				label: "billing",
				icon: <FaBook className="text-slate-600" />,
				url: "/products",
			},
		],
	},
	{
		page: "company",
		links: [
			{
				label: "about",
				icon: <FaBriefcase className="text-slate-600" />,
				url: "/products",
			},
			{
				label: "customers",
				icon: <FaBriefcase className="text-slate-600" />,
				url: "/products",
			},
		],
	},
];

export default sublinks;
