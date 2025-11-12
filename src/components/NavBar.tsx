import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
    const [open, setOpen] = useState(false);

    const navLinks = [
        { label: "Inicio", href: "/" },
        { label: "Servicios", href: "/servicios" },
        { label: "Nosotros", href: "/nosotros" },
    ];

    return (
        <nav className="fixed top-0 left-0 w-full bg-black/5 backdrop-blur-sm z-50">
            <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
                <a
                    href="/"
                    className="flex items-center space-x-3 font-bold text-[var(--brand-primary)] drop-shadow-md"
                >
                    <img src="/images/logo-f3.png" alt="Logo" className="h-10 w-auto" />
                    <span>
                        F3 <span className="text-[var(--brand-accent)] drop-shadow-md">Electrical Group</span>
                    </span>
                </a>

                <ul className="hidden md:flex md:space-x-8 font-medium text-[var(--brand-accent)] drop-shadow-md">
                    {navLinks.map((link) => (
                        <li key={link.href}>
                            <a
                                href={link.href}
                                className="block px-6 py-3 md:p-0 hover:text-[var(--brand-primary)] transition-colors"
                            >
                                {link.label}
                            </a>
                        </li>
                    ))}
                </ul>

                {/* Mobile toggle */}
                <button
                    className="md:hidden text-[var(--brand-accent)]"
                    onClick={() => setOpen(!open)}
                >
                    {open ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile menu */}
            {open && (
                <ul className="md:hidden bg-black/5 backdrop-blur-sm text-[var(--brand-accent)] flex flex-col space-y-2 px-6 py-4">
                    {navLinks.map((link) => (
                        <li key={link.href}>
                            <a
                                href={link.href}
                                className="block py-2 hover:text-[var(--brand-primary)] transition-colors"
                                onClick={() => setOpen(false)} // cierra menú al hacer click
                            >
                                {link.label}
                            </a>
                        </li>
                    ))}
                </ul>
            )}
        </nav>
    );
}
