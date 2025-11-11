import { branding, images } from "../data/branding";
import CarouselBase from "./Carousel";

export default function Hero() {
    return (
        <section id="inicio">
            <CarouselBase images={images} overlay interval={6000}>
                <h1 className="text-4xl md:text-6xl font-bold text-white drop-shadow-lg mb-4">
                    {branding.name}
                </h1>
                <p className="text-lg md:text-xl max-w-2xl text-gray-200 drop-shadow">
                    {branding.tagline ||
                        "Soluciones eléctricas confiables y seguras para su hogar e industria."}
                </p>
            </CarouselBase>
        </section>
    );
}