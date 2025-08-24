import Logo from "./Logo";

const Header = () => {
  return (
    <header className="flex items-center justify-center bg-white px-4 py-5">
      <Logo className="h-3.5 w-auto" />
    </header>
  );
};

export default Header;
