import { NavLink } from 'react-router-dom';
import '../Styles/hamburger.css';
import { FaHome, FaUser } from 'react-icons/fa';
import { IoMdPersonAdd } from 'react-icons/io';
import '../Styles/spinner.css';
import {
  Link,
  Button,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
} from 'react-scroll';

const Navbar = () => {
  return (
    <div className="z-50 sticky top-0 backdrop-blur">
      <div className="navbar ">
        <div className="navbar-start">
          <div className="drawer">
            <input
              id="my-drawer"
              type="checkbox"
              className="drawer-toggle inpi"
            />
            <div className="drawer-content">
              <label htmlFor="my-drawer" className=" drawer-button">
                <div>
                  <label htmlFor="my-drawer" class="hamburger drawer-button">
                    <input type="checkbox" className="inpi" />
                    <svg className="sveg" viewBox="0 0 32 32">
                      <path
                        class="line line-top-bottom"
                        d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22"
                      ></path>
                      <path class="line" d="M7 16 27 16"></path>
                    </svg>
                  </label>
                </div>
              </label>
            </div>
            <div className="drawer-side">
              <label
                htmlFor="my-drawer"
                aria-label="close sidebar"
                className="drawer-overlay backdrop-blur"
              ></label>

              <ul className="menu p-4 w-80 min-h-full backdrop-blur bg-black opacity-80 button text-base-content">
                <div>
                  <div class="loader mt-10">
                    <div class="dot-one"></div>
                    <div class="dot-two">- -</div>
                    <div class="dot-three"></div>
                  </div>
                </div>
                <NavLink to="/">
                  <li>
                    <a>
                      {' '}
                      <FaHome></FaHome> Homepage
                    </a>
                  </li>
                </NavLink>
                <Link to="existingUser" spy={true} smooth={true} offset={70}>
                  <li>
                    <a>
                      {' '}
                      <FaUser></FaUser> Existing Users
                    </a>
                  </li>
                </Link>
                <Link to="existingUser" spy={true} smooth={true} offset={70}>
                  <li>
                    <a>
                      {' '}
                      <IoMdPersonAdd /> Add New Users
                    </a>
                  </li>
                </Link>
              </ul>
            </div>
          </div>
        </div>
        <div className="navbar-center">
          <a className="btn btn-ghost text-xl">UsiFY</a>
        </div>
        <div className="navbar-end">
          <button className="btn btn-ghost btn-circle">
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
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </button>
          <button className="btn btn-ghost btn-circle">
            <div className="indicator">
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
                  d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                />
              </svg>
              <span className="badge badge-xs badge-primary indicator-item"></span>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
