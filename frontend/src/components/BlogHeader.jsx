import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Navbar } from "flowbite-react";
import { useSelector, useDispatch } from "react-redux";
import { signOutSuccess } from "../redux/user/userSlice";
import { GiMountaintop } from "react-icons/gi";

export default function BlogHeader() {
  const path = useLocation().pathname;
  const { currentUser } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSignout = async () => {
    try {
      const res = await fetch("/backend/user/signout", {
        method: "POST",
      });
      const data = await res.json();
      if (!res.ok) {
        console.log(data.message);
        navigate("/");
      } else {
        dispatch(signOutSuccess());
        navigate("/");
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <Navbar fluid rounded>
      <Navbar.Brand>
        <span className="self-center whitespace-nowrap px-2 py-1 bg-gradient-to-r from-red-500 via-white-500 to bg-blue-500 rounded-xl text-white font-bold flex flex-row justify-around p-10">
          <GiMountaintop className="size-10" />
          mariposablog
        </span>
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <Navbar.Link active={path === "/"} as={"div"}>
          <Link to="/">Home</Link>
        </Navbar.Link>
        <Navbar.Link active={path === "/signin"} as={"div"}>
          <Link to="/signin">Signin</Link>
        </Navbar.Link>
        <Navbar.Link
          onClick={handleSignout}
          active={path === "/signout"}
          as={"div"}
        >
          <Link to="/signout">Signout</Link>
        </Navbar.Link>
        {currentUser && currentUser.isAdmin && (
          <Navbar.Link active={path === "/createpost"} as={"div"}>
            <Link to="/createpost">Create Post</Link>
          </Navbar.Link>
        )}
        {currentUser && currentUser.isAdmin && (
          <Navbar.Link active={path === "/postlist"} as={"div"}>
            <Link to="/postlist">Update Post</Link>
          </Navbar.Link>
        )}
      </Navbar.Collapse>
    </Navbar>
  );
}
