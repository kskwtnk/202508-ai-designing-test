import Logo from "./Logo";

const Header = () => {
  return (
    <header className="flex items-center justify-between gap-4 bg-white px-4 py-5">
      <Logo className="h-3.5 w-auto" />
      <p className="text-xs font-bold text-sky-600 sm:text-sm wrap-anywhere break-keep">
        2025年7月時点で<wbr />1,000万人以上のユーザー
      </p>
    </header>
  );
};

export default Header;
