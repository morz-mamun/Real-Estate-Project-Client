import { Link, NavLink } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import RoofingIcon from "@mui/icons-material/Roofing";
import Swal from "sweetalert2";
import useUserRole from "../../Hooks/useUserRole";

const Navbar = () => {
  const { user, logOut } = useAuth();
  const [allUser] = useUserRole()

  // sweetAlert
  const Toast = Swal.mixin({
    toast: true,
    position: "top",
    iconColor: "#5afc03",
    customClass: {
      popup: "colored-toast",
    },
    showConfirmButton: false,
    timer: 1500,
    timerProgressBar: true,
  });
  const navLinks = (
    <>
      <li>
        <NavLink to={"/"}>Home</NavLink>
      </li>
      <li>
        <NavLink to={"/allProperty"}>All Properties</NavLink>
      </li>
      { allUser?.role === 'admin' || allUser?.role === 'agent' ? <li>
        <NavLink to={"/addProperty"}>Add Property</NavLink>
      </li> : '' }
      <li>
        <NavLink to={"/dashboard"}>Dashboard</NavLink>
      </li>
    </>
  );

  const handleLogout = () => {
    logOut()
    .then(() => {
      Toast.fire({
        icon: "success",
        title: "User Logout Successfully.",
      });
    })
    .catch((err) => {
      Toast.fire({
        icon: "error",
        title: err.message,
      });
    })
  };
  return (
    <div className="navbar  right-0.5 left-0.5  max-w-7xl fixed mx-auto text-white font-bold">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="lg:hidden cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content z-[1] p-2 shadow bg-black text-white rounded-box w-32"
          >
            {navLinks}
            
          </ul>
        </div>
      <p className="btn btn-ghost md:text-xl uppercase"><span className="text-red-600">Mor</span>ZE</p>
        <RoofingIcon style={{ color: 'red', fontSize: 30,}}></RoofingIcon>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navLinks}</ul>
      </div>
      <div className="navbar-end">
     <div className="mr-2">
     {user ? (
          <>
            <button
              onClick={handleLogout}
              className="btn btn-outline btn-sm text-red-600 hover:bg-red-600 border-white font-bold"
            >
              LogOut
            </button>
          </>
        ) : (
          <>
            <Link to={"/login"}>
              <button className="btn btn-outline btn-sm text-red-600 hover:bg-red-600 border-red-600 font-bold">
                Login
              </button>
            </Link>
          </>
        )}

     </div>
        { user &&
          <div className="dropdown dropdown-end">
          <label tabIndex={0} className="avatar">
            <div className="w-10 rounded-full cursor-pointer">
              <img alt="" src={user?.photoURL} />
            </div>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1]  shadow bg-black text-white rounded-box w-32"
          >
            <li>
              <p className="justify-between">
                {user?.displayName}
              </p>
            </li>
            <li>
              <a>Profile</a>
            </li>
            <li>
            <button
              onClick={handleLogout}
              className=" text-red-600 border-white font-bold"
            >
              LogOut
            </button>
            </li>
           
          </ul>
        </div>
        }

        
      </div>
    </div>
  );
};

export default Navbar;
