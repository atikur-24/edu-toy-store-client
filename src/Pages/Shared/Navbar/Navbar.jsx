import { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import logo from '/public/protoboard.png'
import logo2 from '/public/protoboard2.png'
import { AuthContext } from "../../../Providers/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLogout = () => {
    logOut().then(()=> {}).catch(e=>{console.error(e.message);})
  }

  const menuItems = (
    <>
      <li>
        <NavLink to="/" className={({ isActive }) => (isActive ? "active" : "default")} >Home</NavLink>
      </li>
      <li>
        <NavLink to="/allToy" className={({ isActive }) => (isActive ? "active" : "default")} >All Toy</NavLink>
      </li>
      { user && <>
          <li>
          <NavLink to="/myToys" className={({ isActive }) => (isActive ? "active" : "default")} >My Toys</NavLink>
        </li>
        <li>
          <NavLink to="/addToys" className={({ isActive }) => (isActive ? "active" : "default")} >Add A Toy</NavLink>
        </li>
      </> }
      <li>
        <NavLink to="/blogs" className={({ isActive }) => (isActive ? "active" : "default")} >Blog</NavLink>
      </li>
    </>
  );

  const avatar = (
  <>
    { user && <div className="avatar">
        <div className="w-14 rounded-full">
            <img title={user?.displayName} src={user?.photoURL} alt="profile" />
        </div>
    </div>}
    { user ? <Link onClick={handleLogout} className="my-btn">Logout</Link> :
    <Link to='/signIn' className="my-btn">Login</Link> }
  </>
);

  return (
    <>
      <div className="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
        <div className="relative flex items-center justify-between">
          <Link to="/">
                <img className="ml-0 md:ml-12" src={logo} alt="logo" />
                <span className="text-2xl font-bold">
                 <span className="text-[#473080]">Edu</span> Emporium
                </span>
          </Link>
          <ul className="hidden lg:flex items-center space-x-8">
            { menuItems }
          </ul>
          <div className="hidden lg:flex items-center space-x-8">
            { avatar }
          </div>
          {/* mobile navbar section */}
          <div className="lg:hidden">
            {/* Dropdown Open Button */}
            <button
              aria-label="Open Menu"
              title="Open Menu"
              onClick={() => setIsMenuOpen(true)}
            >
              <HiMenuAlt3 className="w-5 text-gray-600" />
            </button>
            {isMenuOpen && (
              <div className="absolute top-0 left-0 w-full z-10">
                <div className="p-5 bg-white border rounded shadow-sm">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <Link to="/" className="inline-flex items-center">
                      <img className="" src={logo2} alt="logo" />
                        <span className="text-2xl font-bold ml-4">
                            <span className="text-[#473080]">Edu</span> Emporium
                        </span>
                      </Link>
                    </div>
                    {/* Dropdown menu close button */}
                    <div>
                      <button
                        aria-label="Close Menu"
                        title="Close Menu"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <HiX className="w-5 text-gray-600" />
                      </button>
                    </div>
                  </div>
                  <nav>
                    <ul className="space-y-4">
                        {menuItems}
                    </ul>
                  </nav>
                  <hr />
                  <div className="inline-flex">
                    { avatar }
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
        <hr className="border mt-5"  />
      </div>
    </>
  );
};

export default Navbar;
