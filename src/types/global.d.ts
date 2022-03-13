/*!
 * @author Mohamed Muntasir
 * @link https://github.com/devmotheg
 */

interface SubmenuLink {
	label: string;
	icon: JSX.Element;
	url: string;
}

interface SubmenuContextVal {
	position: { x: number; y: number };
	setPosition?: (position: { x: number; y: number }) => void;
	links: SubmenuLink[];
	setLinks?: (links: SubmenuLink[]) => void;
}

interface SidebarContextVal {
	isOpen?: boolean;
	setIsOpen?: (isOpen: boolean) => void;
}

interface ProviderProps {
	children: JSX.Element | JSX.Element[];
}
