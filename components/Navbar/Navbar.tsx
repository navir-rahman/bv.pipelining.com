'use client';


import { usePathname } from "next/navigation";
import NavLink from "./NavLink";

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'Users', href: '/users' },
  { name: 'New user registration', href: '/registerContractor'}
 
];


function Navbar() {
    const pathname = usePathname();
  return (
    <header className="border-b bg-white">

    <nav>
        {
            navLinks.map((l)=>{
                const isActive = pathname === l.href;
                return (
                <NavLink key={l.name} href={l.href}
                  name={l.name}
                  isActive={isActive}
                  ></NavLink>
                )
            })
        }
        

    </nav>
    </header>
  )
}

export default Navbar