import { Target, Eye, ShieldCheck } from "lucide-react";

export default function About() {
    return (
        <section className="py-20 bg-white" id="nosotros">
            {/* Encabezado */}
            <div className="max-w-4xl mx-auto text-center px-6">
                <h2 className="text-3xl font-bold text-[var(--brand-primary)] mb-6">
                    Sobre Nosotros
                </h2>

                <img
                    src="/images/logo.jpg"
                    alt="F3 - logo"
                    className="h-28 w-auto mx-auto mb-10"
                />

                <p className="mb-10 text-gray-700 leading-relaxed text-lg">
                    <strong className="text-[var(--brand-primary)]">F3 Electrical Group</strong> es una
                    organización especializada en instalaciones y proyectos eléctricos tanto domiciliarios como industriales.
                    Contamos con un equipo técnico altamente calificado, comprometido con la
                    seguridad, la eficiencia y la satisfacción de nuestros clientes.
                </p>
            </div>

            {/* Tarjetas */}
            <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 px-6 text-center">
                {/* Misión */}
                <div className="bg-[var(--brand-secondary)]/10 p-8 rounded-2xl shadow-md hover:shadow-lg transition">
                    <Target className="w-10 h-10 text-[var(--brand-accent)] mx-auto mb-4" />
                    <h3 className="text-xl font-semibold text-[var(--brand-primary)] mb-2">
                        Misión
                    </h3>
                    <p className="text-gray-700 text-sm">
                        Ofrecer soluciones eléctricas confiables, seguras y eficientes que
                        impulsen el desarrollo y la tranquilidad de nuestros clientes.
                    </p>
                </div>

                {/* Visión */}
                <div className="bg-[var(--brand-secondary)]/10 p-8 rounded-2xl shadow-md hover:shadow-lg transition">
                    <Eye className="w-10 h-10 text-[var(--brand-accent)] mx-auto mb-4" />
                    <h3 className="text-xl font-semibold text-[var(--brand-primary)] mb-2">
                        Visión
                    </h3>
                    <p className="text-gray-700 text-sm">
                        Ser reconocidos a nivel zonal por nuestra calidad, innovación y compromiso en proyectos eléctricos.
                    </p>
                </div>

                {/* Valores */}
                <div className="bg-[var(--brand-secondary)]/10 p-8 rounded-2xl shadow-md hover:shadow-lg transition">
                    <ShieldCheck className="w-10 h-10 text-[var(--brand-accent)] mx-auto mb-4" />
                    <h3 className="text-xl font-semibold text-[var(--brand-primary)] mb-2">
                        Valores
                    </h3>
                    <p className="text-gray-700 text-sm">
                        Compromiso, seguridad, responsabilidad y excelencia en cada servicio prestado.
                    </p>
                </div>
            </div>
        </section>
    );
}
