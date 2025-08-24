import Logo from "./Logo";

const Header = () => {
  return (
    <header className="flex items-center justify-between bg-white px-4 py-5">
      <Logo className="h-3.5 w-auto" />
      <p className="text-xs font-medium text-sky-600 sm:text-sm">
        2025年7月時点で1,000万人以上のユーザー
      </p>
    </header>
  );
};

export default Header;
