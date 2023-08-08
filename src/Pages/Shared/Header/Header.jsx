import React from "react";
import { Link } from "react-router-dom";
import Container from "../../../components/Shared/Container/Container";
import MenuItem from "./MenuItem/MenuItem";
import SearchForm from "./SearchForm/SearchForm";

const Header = () => {
  return (
    <Container>
      <nav className="flex items-center justify-between py-5">
        <div className="flex items-center gap-16">
          <div>
            <h2 className="uppercase font-bold text-3xl text-[#5BBB7B]">
              Biomed.
            </h2>
          </div>
          <div>
            <ul className="flex items-center space-x-6">
              <MenuItem name={"Home"} path={"/"} />
              <MenuItem name={"Browse Jobs"} path={"/"} />
              <MenuItem name={"Top Jobs"} path={"/"} />
              <MenuItem name={"Blog"} path={"/"} />
              <MenuItem name={"Contact"} path={"/"} />
            </ul>
          </div>
        </div>
        <div className="flex items-center gap-10">
          <SearchForm />
          <div>
            <ul className="flex items-center space-x-6">
              <MenuItem name={"Login"} path={"/login"} />
              <span className="bg-[#5BBB7B] text-gray-100 px-8 py-3 rounded-md hover:bg-[#4ca068]">
                <Link to={"/register"} className="font-medium">Sign Up</Link>
              </span>
            </ul>
          </div>
        </div>
      </nav>
    </Container>
  );
};

export default Header;
