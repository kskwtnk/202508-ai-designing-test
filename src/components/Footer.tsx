import Logo from "./Logo";

const footerLinks = [
  { text: "運営社情報", href: "#" },
  { text: "利用規約", href: "#" },
  { text: "プライバシーポリシー", href: "#" },
  { text: "次元超越ポリシー", href: "#" },
  { text: "お問い合わせ", href: "#" },
];

function Footer() {
  return (
    <footer className="flex flex-col items-start gap-6 bg-slate-900 px-4 py-6">
      <Logo className="h-4 w-auto fill-white" />
      <nav className="flex flex-col gap-3">
        {footerLinks.map((link, index) => (
          <a
            key={index}
            href={link.href}
            className="text-sm text-white underline transition-colors hover:text-gray-300"
          >
            {link.text}
          </a>
        ))}
      </nav>
      <div className="text-xs text-white">© 20XX Neuroware Inc.</div>
    </footer>
  );
}

export default Footer;
