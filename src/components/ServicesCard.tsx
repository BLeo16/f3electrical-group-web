import { services } from "../data/services";

export default function ServicesCard() {
  return (
    <section
      id="servicios"
      className="py-20 bg-[var(--brand-light)] text-center px-6"
    >
      <h2 className="text-3xl font-bold text-[var(--brand-primary)] mb-12">
        Servicios
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
        {services.map(({ title, desc, icon: Icon }) => (
          <div
            key={title}
            className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition"
          >
            <Icon className="w-10 h-10 text-[var(--brand-accent)] mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-[var(--brand-primary)] mb-2">
              {title}
            </h3>
            <p className="text-gray-600 text-sm">{desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
