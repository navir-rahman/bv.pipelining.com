import Link from "next/link";


interface NavLinkProps {
  href: string;
  name: string;
  isActive: boolean;
}


function NavLink({ href, name, isActive }: NavLinkProps){
  return (
    <Link key={name+href} href={href}
                    
                    aria-current={isActive ? 'page' : undefined}

                  className={`m-6 text-l font-medium transition-colors ${
                    isActive
                      ? 'text-green-600 font-semibold'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                   >{name}</Link>
  )
}

export default NavLink