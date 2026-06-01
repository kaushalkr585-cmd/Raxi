import logo from "../../raxi-logo.png";
import { navItems } from "../data/siteData";

export default function Footer() {
  return (
    <footer className="border-t border-white/8 py-10">
      <div className="section-shell flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
        <div>
          <img src={logo} alt="Raxi Game logo" className="w-32" loading="lazy" decoding="async" width="128" height="45" />
          <p className="mt-3 max-w-md text-sm leading-6 text-zinc-500">
            © Raxi.Game . All Right Reserve
          </p>
        </div>
        <nav className="flex flex-wrap gap-3 text-sm text-zinc-500" aria-label="Footer navigation">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="transition hover:text-white">
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </footer>
  );
}
