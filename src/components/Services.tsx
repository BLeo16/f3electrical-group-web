import { services } from "../data/services";
import CarouselBase from "./Carousel";

export default function Services() {
    return (
        <section
            id="servicios"
            className="py-20 bg-gray-50 text-center px-6 scroll-mt-20"
        >
            <h2 className="text-3xl font-bold text-[var(--brand-primary)] mb-12">
                Nuestros Servicios
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
                {services.map(({ title, desc, icon: Icon, images }) => (
                    <div
                        key={title}
                        className="bg-white rounded-2xl shadow-md hover:shadow-lg transition overflow-hidden flex flex-col"
                    >
                        <div className="relative">
                            <CarouselBase
                                images={images}
                                overlay
                                interval={5000}
                                height="h-48"
                                className="rounded-t-2xl"
                            />
                        </div>

                        <div className="p-6 flex flex-col flex-1 justify-between">
                            <div>
                                <Icon className="w-10 h-10 text-[var(--brand-accent)] mx-auto mb-3" />
                                <h3 className="text-xl font-semibold text-[var(--brand-primary)] mb-2">
                                    {title}
                                </h3>
                                <p className="text-gray-600 text-sm">{desc}</p>
                            </div>
                        </div>
                    </div>
                ))}

            </div>
        </section>
    );
}
