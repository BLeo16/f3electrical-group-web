import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

type CarouselBaseProps = {
    images: string[];
    interval?: number; // tiempo entre slides
    overlay?: boolean;
    children?: React.ReactNode;
    showArrows?: boolean;
    height?: string; // clases como h-48, h-[90vh]
    className?: string;
};

export default function CarouselBase({
    images,
    interval = 5000,
    overlay = false,
    children,
    showArrows = true,
    height = "h-[90vh]",
    className = "",
}: CarouselBaseProps) {
    const [index, setIndex] = useState(0);

    const next = () => setIndex((i) => (i + 1) % images.length);
    const prev = () => setIndex((i) => (i === 0 ? images.length - 1 : i - 1));

    // autoplay
    useEffect(() => {
        const timer = setInterval(next, interval);
        return () => clearInterval(timer);
    }, [interval,images]);

    return (
        <div className={`relative w-full overflow-hidden ${height} ${className}`}>
            {/* Imagen actual */}
            {images.map((src, i) => (
                <img
                    key={i}
                    src={src}
                    alt={`Slide ${i + 1}`}
                    className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${i === index ? "opacity-100" : "opacity-0"
                        }`}
                />
            ))}

            {/* Overlay */}
            {overlay && <div className="absolute inset-0 bg-black/40" />}

            {/* Contenido superpuesto */}
            {children && (
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white z-10 px-6">
                    {children}
                </div>
            )}

            {/* Botones */}
            {showArrows && (
                <>
                    <button
                        onClick={prev}
                        className="absolute left-4 top-1/2 -translate-y-1/2 bg-[var(--brand-primary)]/70 hover:bg-[var(--brand-primary)] text-white rounded-full p-2 z-20"
                        aria-label="Anterior"
                    >
                        <ChevronLeft className="w-6 h-6" />
                    </button>
                    <button
                        onClick={next}
                        className="absolute right-4 top-1/2 -translate-y-1/2 bg-[var(--brand-primary)]/70 hover:bg-[var(--brand-primary)] text-white rounded-full p-2 z-20"
                        aria-label="Siguiente"
                    >
                        <ChevronRight className="w-6 h-6" />
                    </button>
                </>
            )}

            {/* Indicadores */}
            <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 z-20">
                {images.map((_, i) => (
                    <span
                        key={i}
                        className={`w-3 h-3 rounded-full transition-all duration-300 ${i === index
                                ? "bg-[var(--brand-accent)]"
                                : "bg-white/50 hover:bg-white/80"
                            }`}
                    ></span>
                ))}
            </div>
        </div>
    );
}
