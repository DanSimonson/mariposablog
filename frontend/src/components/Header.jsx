import { useState } from "react";
import { Navbar, TextInput, Button } from "flowbite-react";
import { Link, useLocation } from "react-router-dom";
import { AiOutlineSearch } from "react-icons/ai";
import { FaMoon, FaSun } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";

export default function Header() {
  const dispatch = useDispatch();
  const { currentUser } = useSelector((state) => state.user);
  const path = useLocation().pathname;
  const [searchTerm, setSearchTerm] = useState("");

  const SignInButton = (currentUser) => {
    let myButton;

    myButton = (
      <Button gradientDuoTone="purpleToBlue" outline>
        Admin LogIn
      </Button>
    );

    // } else if (currentUser == null) {
    //   let myButton = (
    //     <Button gradientDuoTone="purpleToBlue" outline>
    //       Sign In
    //     </Button>
    //   );
    // }
    return myButton;
  };

  const handleSubmit = (e) => {};
  return (
    <Navbar className="border-b-2">
      <Link
        to="/"
        className="self-center whitespace-nowrap text-sm sm:text-xl font-semibold dark:text-white"
      >
        <span className="px-2 py-1 bg-gradient-to-r from-red-500 via-white-500 to bg-blue-500 rounded-xl text-white">
          Mariposa Blog
        </span>
      </Link>
      <form onSubmit={handleSubmit}>
        <TextInput
          type="text"
          placeholder="Search..."
          rightIcon={AiOutlineSearch}
          className="hidden lg:inline"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </form>
      <Button className="w-12 h-10 lg:hidden" color="gray" pill>
        <AiOutlineSearch />
      </Button>
      <div className="flex gap-2 md:order-2">
        <Button className="w-12 h-10 hidden sm:inline" color="gray" pill>
          <FaMoon />
        </Button>
        <div>
          <Link to="/signin">
            <Button gradientDuoTone="purpleToBlue" outline>
              Admin Login
            </Button>
          </Link>
        </div>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Navbar.Link active={path === "/"} as={"div"}>
            <Link to="/">Home</Link>
          </Navbar.Link>
          <Navbar.Link active={path === "/about"} as={"div"}>
            <Link to="/about">About</Link>
          </Navbar.Link>
          <Navbar.Link active={path === "/projects"} as={"div"}>
            <Link to="/projects">Projects</Link>
          </Navbar.Link>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
}
