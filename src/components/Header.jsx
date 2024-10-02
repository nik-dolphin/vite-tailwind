import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { NavbarHeaderList } from "../../utility/utils";
import PropTypes from "prop-types";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoCloseSharp } from "react-icons/io5";

const LinkComponenet = ({ setOpen }) => {
  const navbarHeaderList = NavbarHeaderList();
  return (
    <>
      {navbarHeaderList?.map((item) => (
        <li key={item?.id} className="text-center">
          <Link
            to={item?.url}
            onClick={() => setOpen(false)}
            className="fixed pb-1 whitespace-nowrap after:absolute after:w-0 after:bottom-0 after:bg-gray-600 after:h-[2px] after:left-1/2 after:transition-all after:duration-200 after:ease-linear"
          >
            <span>{item?.label}</span>
          </Link>
        </li>
      ))}
    </>
  );
};

LinkComponenet.propTypes = {
  setOpen: PropTypes.func.isRequired,
};

const Header = () => {
  const [open, setOpen] = useState(false);
  const navRef = useRef(null);
  const handleClickOutside = (event) => {
    if (navRef.current && !navRef.current.contains(event.srcElement)) {
      setOpen(false);
      document.body.style.overflowY = "";
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, []);

  useEffect(() => {
    if (open) {
      document.body.style.overflowY = "hidden";
    }
  }, [open]);

  return (
    <>
      <header>
        <nav className="w-full z-20 top-0 left-0 dark:border-gray-600 py-4 px-3 font-paregraph-p3-semibold font-[number:var(--paregraph-p3-semibold-font-weight)] text-grayscale-700 text-[length:var(--paregraph-p3-semibold-font-size)] tracking-[var(--paregraph-p3-semibold-letter-spacing)] leading-[var(--paregraph-p3-semibold-line-height)] [font-style:var(--paregraph-p3-semibold-font-style)]">
          <div className="flex flex-wrap justify-between items-center relative">
            <Link className="logo" to="/">
              {/* <img
                src={LogoImage}
                alt="logo"
                width={130}
                height={100}
                rel="preload"
              /> */}
              LOGO
            </Link>
            <ul className="menu hidden w-[60%] xl:pl-44 justify-center gap-x-6 lg:flex [&>li>a]:text-grayscale-700 [&>li>a]:text-center [&>li>a]:relative [&>li>a]:transition [&>li>a]:duration-200 [&>li>a]:ease-in-out [&>li>a]:text-lg">
              <LinkComponenet setOpen={setOpen} />
              {/* <div className="flex flex-row gap-x-6 w-1/5 sm:w-[60%] lg:w-[20%]"> */}
              <button
                aria-label="shopping cart button"
                className="sm:block hidden"
              >
                adasd
              </button>
              <button
                aria-label="user button"
                className="sm:block hidden"
              ></button>
            </ul>
            <button
              aria-label="hamburger button"
              onClick={() => setOpen(true)}
              className="block lg:hidden"
            >
              <RxHamburgerMenu />
            </button>
          </div>
        </nav>
      </header>
      <div
        className={`fixed ${
          open ? "w-full lg:w-0" : "w-0"
        } h-full top-0 lg:w-0 overflow-hidden backdrop-filter backdrop-blur-[1px] transition-width duration-500 ease-in-out float-right right-0 bottom-0 z-[998] cursor-pointer bg-opacity-15`}
      >
        <div
          className={`h-screen overflow-hidden float-right transition-width duration-500 ease-in-out bg-theme-color relative shadow-custom ${
            !open ? "w-0" : "w-[90%] sm:w-3/4 md:w-1/2 lg:w-[768px]"
          }`}
          ref={navRef}
        >
          <div className={`w-full flex justify-end p-5 bg-theme-color`}>
            <button onClick={() => setOpen(false)} aria-label="close button">
              <IoCloseSharp />
            </button>
          </div>
          <div className="h-full flex items-center justify-center bg-theme-color font-paregraph-p3-semibold font-[number:var(--paregraph-p3-semibold-font-weight)] text-grayscale-700 text-[length:var(--paregraph-p3-semibold-font-size)] tracking-[var(--paregraph-p3-semibold-letter-spacing)] leading-[var(--paregraph-p3-semibold-line-height)] [font-style:var(--paregraph-p3-semibold-font-style)]">
            <ul className="gap-y-6 flex flex-col [&>li>a]:text-grayscale-700 [&>li>a]:text-center [&>li>a]:relative [&>li>a]:transition [&>li>a]:duration-200 [&>li>a]:ease-in-out [&>li>a]:text-lg">
              <LinkComponenet setOpen={setOpen} />
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
