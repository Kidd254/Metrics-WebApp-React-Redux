import { NavLink } from 'react-router-dom';
import { IoChevronBack } from 'react-icons/io5';
import { AiFillSetting, AiFillAudio } from 'react-icons/ai';
import NavbarCss from '../styles/Navbar.module.css';

const Navbar = () => (
  <div className={NavbarCss.navContainer} data-testid="navContainer">
    <NavLink to="/" className={NavbarCss.navLink}>
      <IoChevronBack />
    </NavLink>
    <div className={NavbarCss.navLinkIcons}>
      <AiFillAudio />
      <AiFillSetting />
    </div>
  </div>
);

export default Navbar;
