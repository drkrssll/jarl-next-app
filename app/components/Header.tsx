import Dropdown from "./Dropdown";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 bg-white shadow-md z-50 p-4 flex justify-between items-center">
      <div className="text-black text-2xl font-bold">Jarl Portfolio</div>
      <Dropdown />
    </header>
  );
};

export default Header;
