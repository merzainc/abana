import Link from "next/link";

const Header = () => {
  return (
    <header className="supports-backdrop-blur:bg-background/60 z-40 w-full bg-background/95 backdrop-blur">
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
              <Link
                className="hover:text-primary duration-300"
                href="/commodity-broking"
              >
                Commodity Broking
              </Link>
            </li>
            <li>
              <Link className="hover:text-primary duration-300" href="/about">
                About
              </Link>
            </li>
            <li>
              <Link className="hover:text-primary duration-300" href="/contact">
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
