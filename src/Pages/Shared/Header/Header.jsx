import React, { useState } from "react";
import Container from "../../../components/Shared/Container/Container";
import MenuItem from "./MenuItem/MenuItem";
import SearchForm from "./SearchForm/SearchForm";
import { Link } from "react-router-dom";
import { FaAlignJustify } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import logo from "../../../assets/logo.png"

const Header = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <div className="relative z-10">
      <Container>
        <nav className="flex items-center justify-between py-5">
          <div className="flex items-center gap-10 2xl:gap-16">
            <Link to="/">
              <img src={logo} alt="" />
            </Link>
            <div>
              <ul className="hidden  xl:flex items-center space-x-4 2xl:space-x-6">
                <MenuItem name={"Home"} path={"/"} />
                <MenuItem name={"Browse Jobs"} path={"/"} />
                <MenuItem name={"Top Jobs"} path={"/"} />
                <MenuItem name={"Blog"} path={"/"} />
                <MenuItem name={"Contact"} path={"/"} />
              </ul>
            </div>
          </div>
          <div className="hidden xl:flex items-center gap-10">
            <SearchForm />
            <div>
              <ul className="flex items-center space-x-6">
                <MenuItem name={"Login"} path={"/login"} />
                <span className="bg-[#5BBB7B] text-gray-100 px-8 py-3 rounded-md hover:bg-[#4ca068] transition cursor-pointer">
                  <Link to={"/register"} className="font-medium">
                    Sign Up
                  </Link>
                </span>
              </ul>
            </div>
          </div>

          {/* toggle button */}
          <button className="xl:hidden" onClick={() => setToggle(!toggle)}>
            {toggle ? (
              <AiOutlineClose className="text-2xl" />
            ) : (
              <FaAlignJustify className="text-2xl" />
            )}
          </button>
        </nav>
      </Container>

      {toggle && (
        <div className={`absolute flex flex-col items-center ${toggle && "transition-all ease-in-out duration-200" } bg-[#80faa9] w-full py-5 animate-fadeIn`}>
          <div className="flex justify-center items-center gap-16 xl:hidden">
            <div className="mb-10">
              <ul className="flex flex-col text-2xl gap-3 items-center xl:hidden">
                <MenuItem name={"Home"} path={"/"} />
                <MenuItem name={"Browse Jobs"} path={"/"} />
                <MenuItem name={"Top Jobs"} path={"/"} />
                <MenuItem name={"Blog"} path={"/"} />
                <MenuItem name={"Contact"} path={"/"} />
              </ul>
            </div>
          </div>
          <div className="flex xl:hidden flex-col items-center gap-10">
            <SearchForm />
            <div>
              <ul className="flex items-center space-x-6">
                <MenuItem name={"Login"} path={"/login"} />
                <span className="bg-[#5BBB7B] text-gray-100 px-8 py-3 rounded-md hover:bg-[#4ca068] transition cursor-pointer">
                  <Link to={"/register"} className="font-medium">
                    Sign Up
                  </Link>
                </span>
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
