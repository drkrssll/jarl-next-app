import Dropdown from "./Dropdown";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 bg-white shadow-lg border-b border-gray-100 z-50 p-4 flex justify-between items-center">
      <div className="text-gray-800 text-2xl font-bold tracking-tight">Jarl Portfolio</div>
      <Dropdown />
    </header>
  );
};

export default Header;
