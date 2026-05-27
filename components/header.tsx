import Link from "next/link";
import { CartButton } from "./cart-button";

const navItems = [
  { href: "/menu", label: "Le menu" },
  { href: "/notre-histoire", label: "Notre histoire" },
  { href: "/livraison", label: "Livraison" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-cocoa/5 bg-cream/85 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="flex items-center gap-2 font-display text-2xl font-semibold tracking-tight text-cocoa"
        >
          <span
            className="grid h-9 w-9 place-items-center rounded-full text-lg"
            style={{
              background:
                "radial-gradient(circle at 30% 30%, #ffd1dc 0%, #f088a8 50%, #d63b6b 100%)",
            }}
            aria-hidden
          >
            🍦
          </span>
          <span>
            Glacé<span className="text-berry">IA</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-full px-4 py-2 text-sm font-medium text-cocoa/80 transition hover:bg-cocoa/5 hover:text-cocoa"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <CartButton />
        </div>
      </div>
    </header>
  );
}
