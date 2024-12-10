import Image from "next/image";
import Dropdown from "./Dropdown";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 bg-white shadow-lg border-b border-gray-100 z-50 p-4 flex justify-between items-center">
      <Image src="https://www.adaptivewfs.com/wp-content/uploads/2020/07/logo-placeholder-image.png" width={50} height={50} alt="Logo" />
      <Dropdown />
    </header>
  );
};

export default Header;
