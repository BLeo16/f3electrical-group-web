import { Mail, Phone, MapPin } from "lucide-react";
import { branding } from "../data/branding";

export default function Footer() {
    return (
        <footer className="bg-[var(--brand-primary)] text-white py-6">
            <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-10">
                <div>
                    <h2 className="text-2xl font-bold mb-3">
                        F3 <span className="text-[var(--brand-accent)]">Electrical Group</span>
                    </h2>
                    <p className="text-sm text-gray-200 leading-relaxed">
                        Empresa especializada en proyectos eléctricos domiciliarios e industriales.
                        Puntualidad, eficiencia y garantía para usted.
                    </p>
                </div>

                <div>
                    <h3 className="text-lg font-semibold mb-3 text-[var(--brand-accent)]">
                        Enlaces
                    </h3>
                    <ul className="space-y-2 text-sm">
                        {[
                            ["Inicio", "/"],
                            ["Servicios", "/servicios"],
                            ["Nosotros", "/nosotros"],
                        ].map(([label, href]) => (
                            <li key={label}>
                                <a
                                    href={href}
                                    className="hover:text-[var(--brand-accent)] transition"
                                >
                                    {label}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

                <div>
                    <h3 className="text-lg font-semibold mb-3 text-[var(--brand-accent)]">
                        Contáctanos
                    </h3>
                    <ul className="space-y-2 text-sm">
                        <li className="flex items-center gap-2">
                            <Phone className="w-4 h-4 text-[var(--brand-accent)]" />
                            <a
                                href={`https://wa.me/593${branding.contact.phone}?text=Hola%20te%20escribo%20desde%20el%20sitio%20web`}
                                target="_blank"
                                rel="noreferrer"
                            >
                                <span>+593 {branding.contact.phone}</span>
                            </a>


                        </li>
                        <li className="flex items-center gap-2">
                            <Mail className="w-4 h-4 text-[var(--brand-accent)]" />
                            <a
                                href={`mailto:${branding.contact.email}`}
                                className="hover:text-[var(--brand-accent)] transition"
                            >
                                {branding.contact.email}
                            </a>
                        </li>
                        <li className="flex items-center gap-2">
                            <MapPin className="w-4 h-4 text-[var(--brand-accent)]" />
                            <span>{branding.location}</span>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="mt-5 border-t border-gray-400 pt-6 text-center text-xs text-gray-300">
                © {new Date().getFullYear()} F3 Electrical Group
            </div>
        </footer>
    );
}
