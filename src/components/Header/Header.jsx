import { useState } from "react";
import { Container, Logo, LogoutBtn } from "../index";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import headerLogoImage from "../../assets/bgLekhan.png";

function Header() {
  const authStatus = useSelector((state) => state.auth.status);
  const navigate = useNavigate();

  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const navItems = [
    {
      name: "Home",
      slug: "/",
      active: true,
    },
    {
      name: "Login",
      slug: "/login",
      active: !authStatus,
    },
    {
      name: "Signup",
      slug: "/signup",
      active: !authStatus,
    },
    {
      name: "All Posts",
      slug: "/all-posts",
      active: authStatus,
    },
    {
      name: "Add Post",
      slug: "/add-post",
      active: authStatus,
    },
  ];
  // const authStatus = true; // Replace with your actual authentication status

  return (
    <header className="py-3 shadow bg-gray-500">
      <Container>
        <nav className="flex justify-between">
          <div className="mr-4">
            <Link to="/">
              <Logo src={headerLogoImage} width="70px" />
            </Link>
          </div>

          {/* Navigation Links */}
          <div className="hidden lg:flex md:flex sm:hidden">
            {navItems.map((item) =>
              item.active ? (
                <div key={item.name}>
                  <button
                    onClick={() => navigate(item.slug)}
                    className="lg:inline-block px-6 py-2 duration-200 hover:bg-blue-100 rounded-full"
                  >
                    {item.name}
                  </button>
                </div>
              ) : null
            )}
            {authStatus && (
              <div>
                <LogoutBtn />
              </div>
            )}
          </div>
          {/* Burger Menu Icon */}
          <div
            className="lg:hidden md:hidden cursor-pointer"
            onClick={toggleMenu}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </div>
        </nav>
      </Container>
      {/* Navigation Links for Mobile */}
      <div
        className={`lg:hidden md:hidden flex flex-row mt-2 bg-[#191919] ${
          isMenuOpen ? "block" : "hidden"
        }`}
        onClick={closeMenu}
      >
        {navItems.map((item) =>
          item.active ? (
            <div key={item.name} className="text-sm text-white">
              <button
                onClick={() => navigate(item.slug)}
                className="lg:inline-block px-6 py-2 duration-200 hover:bg-blue-100 rounded-full"
              >
                {item.name}
              </button>
            </div>
          ) : null
        )}
        {authStatus && (
          <div className="text-sm text-white">
            <LogoutBtn />
          </div>
        )}
      </div>
    </header>
  );
}

export default Header;
