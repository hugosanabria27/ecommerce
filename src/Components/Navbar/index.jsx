import { NavLink } from "react-router-dom";
import { NavItem } from "../NavItem";

const textDecoration = 'underline underline-offset-4'


let menu1 = [
    {
        to: '/',
        text: 'Shopi',
        className: 'font-semibold text-lg'
    },
    {
        to: '/all',
        text: 'All',
        className: ''
    },
    {
        to: '/clothes',
        text: 'clothes',
        className: ''
    },
    {
        to: '/electronics',
        text: 'electronics',
        className: ''
    },
    {
        to: '/furnitures',
        text: 'furnitures',
        className: ''
    },
    {
        to: '/toys',
        text: 'toys',
        className: ''
    },
    {
        to: '/others',
        text: 'others',
        className: ''
    },
]

let menu2 = [
    {
        to: '/email',
        text: 'hugos949@gmail.com',
        className: 'text-black/60'
    },
    {
        to: '/my-orders',
        text: 'My Orders',
        className: ''
    },
    {
        to: '/my-account',
        text: 'My Account',
        className: ''
    },
    {
        to: '/sign-in',
        text: 'Sign In',
        className: ''
    },
    {
        to: '/shopp-car',
        text: '🛒',
        className: ''
    },
]


export const Navbar = () => {
    // const activeStyle = "underline underline-offset-4";
  return (
    <nav className="flex justify-between items-center fixed z-10 top-0 w-full py-5 px-8 text-sm font-light">

        <ul className="flex items-center gap-3">
            {menu1.map( link => (
                <li
                    key={link.text}
                    className={link.className}
                >
                    <NavLink
                        to={link.to}
                        className={ ({isActive}) => isActive ? textDecoration : undefined }
                    >
                        {link.text}
                    </NavLink>
                </li>
            ))
            }
        </ul>
        <ul className="flex items-center gap-3">
        {menu2.map( link => (
                <li
                    key={link.text}
                    className={link.className}
                >
                    <NavLink
                        to={link.to}
                        className={ ({isActive}) => isActive ? textDecoration : undefined }
                    >
                        {link.text}
                    </NavLink>
                </li>
            ))
            }
        </ul>
    </nav>
  );
}
