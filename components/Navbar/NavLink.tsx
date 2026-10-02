import Link from 'next/link';

type NavLinkProps = {
  href: string;
  name: string;
  isActive: boolean;
};

function NavLink({
  href,
  name,
  isActive,
}: NavLinkProps) {
  return (
    <Link
      href={href}
      className={`nav-btn ${isActive ? 'active' : ''}`}
      data-active={isActive}
    >
      {name}
    </Link>
  );
}

export default NavLink;