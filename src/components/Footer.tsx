import React from "react";
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
    <footer className="bg-slate-900 px-4 py-6 flex flex-col gap-6 items-start">
      <Logo className="fill-white h-4 w-auto" />
      <nav className="flex flex-col gap-3">
        {footerLinks.map((link, index) => (
          <a
            key={index}
            href={link.href}
            className="text-white text-sm underline hover:text-gray-300 transition-colors"
          >
            {link.text}
          </a>
        ))}
      </nav>
      <div className="text-white text-xs">© 20XX Neuroware Inc.</div>
    </footer>
  );
}

export default Footer;
