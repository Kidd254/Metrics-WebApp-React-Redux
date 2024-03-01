import { NavLink } from 'react-router-dom';
import { IoChevronBack } from 'react-icons/io5';
import { AiFillSetting, AiFillAudio } from 'react-icons/ai';

const Navbar = () => (
  <div
    className="bg-blue-500 text-white p-4 flex items-center justify-between"
    data-testid="navContainer"
  >
    <NavLink to="/" className="text-xl">
      <IoChevronBack />
    </NavLink>
    <div className="flex">
      <AiFillAudio className="text-2xl mx-2" />
      <AiFillSetting className="text-2xl mx-2" />
    </div>
  </div>
);

export default Navbar;
