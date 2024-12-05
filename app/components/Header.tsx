import Dropdown from "./Dropdown";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 bg-white shadow-lg border-b border-gray-100 z-50 p-4 flex justify-between items-center">
      <div
        className="w-[76px] h-[32px] bg-blue-500 rounded-lg text-center flex justify-center items-center font-sans"
      >Kabu</div>
      <Dropdown />
    </header>
  );
};

export default Header;
