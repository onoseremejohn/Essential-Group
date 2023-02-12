import styled from "styled-components";
import logo from "../assets/logo.png";
import { FaPhone } from "react-icons/fa";
import { VscMenu, VscClose } from "react-icons/vsc";
import { useGlobalContext } from "../AppContext";
import { useEffect, useRef } from "react";
const Navbar = () => {
  const { toggleNav, isNavOpen, closeNav, openNav } = useGlobalContext();
  const linksContainerRef = useRef(null);
  const linksRef = useRef(null);
  const navbarRef = useRef(null);
  const toggleRef = useRef(null);

  useEffect(() => {
    const linksHeight = linksRef.current.getBoundingClientRect().height;
    if (isNavOpen) {
      linksContainerRef.current.style.height = `${linksHeight}px`;
    } else {
      linksContainerRef.current.style.height = "0";
    }
  }, [isNavOpen]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        toggleRef.current.contains(event.target) ||
        toggleRef.current.childNodes[0].contains(event.target)
      ) {
        toggleNav();
        return;
      }
      if (isNavOpen && !navbarRef.current.contains(event.target)) {
        closeNav();
        return;
      }
    };
    const handleScroll = () => {
      if (isNavOpen) {
        closeNav();
      }
    };
    window.addEventListener("click", handleClickOutside);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("click", handleClickOutside);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isNavOpen]);
  return (
    <Wrapper isNavOpen={isNavOpen} ref={navbarRef}>
      <div className='container'>
        <div className='nav-header'>
          <img src={logo} alt='logo' />
          <button className='toggle' ref={toggleRef}>
            {isNavOpen ? <VscClose /> : <VscMenu />}
          </button>
        </div>
        <div className='links-container' ref={linksContainerRef}>
          <ul ref={linksRef}>
            <li>
              <a href='/home'>HOME</a>
            </li>
            <li>
              <a href='/about'>ABOUT</a>
            </li>
            <li>
              <a href='/services'>SERVICES</a>
            </li>
            <li>
              <a href='/blog'>BLOG</a>
            </li>
            <li>
              <a href='/vacancy' className='vacancy'>
                VACANCY
              </a>
            </li>
            <li>
              <a href='/contact'>CONTACT</a>
            </li>
            <div className='phone'>
              <a href='tel:+2348159556666'>
                <button>
                  <FaPhone />
                </button>
              </a>
              <a className='call' href='tel:+2348159556666'>
                <p>Call Now :</p>
                <p className='num'>+2348159556666</p>
              </a>
            </div>
          </ul>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.nav`
  min-height: 5rem;
  padding: 1rem 0;
  position: fixed;
  z-index: 200;
  width: 100%;
  background-color: white;
  border-bottom: 1px solid grey;
  box-shadow: var(--bs);

  .toggle {
    font-size: 1.5rem;
  }

  li {
    font-weight: bold;
    font-size: 1.1rem;
    a {
      &:hover {
        color: red;
      }
    }
  }
  .nav-header {
    display: flex;
    padding: 0 5%;
    justify-content: space-between;
    align-items: center;
    position: relative;
    z-index: 250;

    img {
      max-width: 170px;
      cursor: pointer;
    }
    button {
      background: none;
      border: none;
    }
  }
  .links-container {
    height: 0;
    overflow: hidden;
    transition: var(--mainTransition);
    background-color: white;
    padding: 0 5%;
  }

  .phone {
    display: flex;
    align-items: center;
    gap: 1em;
    .num {
      font-weight: bold;
      color: red;
    }
    button {
      border: none;
      background: none;
      font-size: 1rem;
    }
  }

  @media screen and (max-width: 799px) {
    ul {
      padding: 2% 0;
      display: flex;
      flex-direction: column;
      gap: 1em;
    }
    .phone {
      display: flex;
      flex-direction: column;
      align-items: start;
      gap: 0em;
    }
  }
  @media screen and (min-width: 800px) {
    .phone {
      padding: 0 1em;
      border-left: 1px solid grey;
      border-right: 1px solid grey;
    }
  }

  div > p {
    margin: 0;
  }
  .vacancy::after {
    content: "2";
    color: white;
    background-color: red;
    padding: 4px;
    margin-left: 3px;
    border-radius: 50%;
  }

  @media screen and (min-width: 800px) {
    display: flex;
    justify-content: center;
    .container {
      display: flex;
      gap: 1em;
      justify-content: space-between;
      width: 90%;
      max-width: var(--maxWidth);
    }

    .nav-header img {
      max-width: 180px;
    }
    .toggle {
      display: none;
    }
    .nav-header {
      padding: 0;
      grid-column: 2/3;
    }
    .links-container {
      height: auto !important;
      padding: 0;
      margin-top: 0;
      margin-bottom: 0;
      margin-left: auto;
      display: flex;
      align-items: center;
      grid-column: 3/4;
      ul {
        display: flex;
        align-items: center;
        gap: 1em;
      }
    }
  }
  @media screen and (min-width: 800px) {
    .call {
      display: none;
    }
  }
  @media screen and (min-width: 1020px) {
    .call {
      display: block;
    }

    li {
      font-size: 1.125rem;
    }
  }
  @media screen and (min-width: 800px) and (max-width: 870px) {
    .links-container {
      ul {
        gap: 0.5em;
      }
    }
    .container {
      gap: 0.5em;
    }
  }
  @media screen and (min-width: 1170px) {
    li,
    .phone button {
      font-size: 1.2rem;
    }
    .links-container {
      ul {
        gap: 1.5em;
      }
    }
  }
`;

export default Navbar;
