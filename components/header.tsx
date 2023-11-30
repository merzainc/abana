import Link from "next/link";

const Header = () => {
  return (
    <header className="supports-backdrop-blur:bg-background/60 sticky top-0 z-40 w-full bg-background/95 backdrop-blur">
      <div className="container flex h-14 items-center justify-between mx-auto ">
        <Link
          className="flex items-center gap-2 text-base font-medium"
          href="/"
        >
          <img
            alt="logo"
            loading="lazy"
            style={{ color: "transparent" }}
            src="/logo.svg"
            className="h-12 w-auto"
          />
        </Link>
        <nav>
          <ul className="flex items-center gap-x-4 text-sm">
            <li>
              <a className="hover:text-primary duration-300" href="/contact">
                About
              </a>
            </li>
            <li>
              <a className="hover:text-primary duration-300" href="/contact">
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
