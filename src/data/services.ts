import { Wrench, Shield, Zap, Home } from 'lucide-react'

export const services = [
    {
        title: "Porteros Automáticos",
        desc: "Instalación y mantenimiento de sistemas de comunicación interna y seguridad.",
        icon: Home,
        images: ["/images/services/portero1.jpg",
            "/images/services/portero2.jpg",
            "/images/services/portero3.webp",
        ]
    },
    {
        title: "Cercas Eléctricas",
        desc: "Diseño e instalación de cercas de alta seguridad para residencias y empresas.",
        icon: Shield,
        images: ["/images/services/cerca1.jpg",
            "/images/services/cerca2.jpg",
        ]
    },
    {
        title: "Tableros de Control",
        desc: "Montaje y mantenimiento de tableros eléctricos industriales.",
        icon: Zap,
        images: ["/images/services/tablero1.jpg",
            "/images/services/tablero2.jpg",
        ]
    },
    {
        title: "Proyectos Domiciliarios",
        desc: "Soluciones eléctricas completas para todo tipo de entorno.",
        icon: Wrench,
        images: ["/images/services/domicilio1.jpg",
            "/images/services/domicilio2.jpg",
            "/images/services/domicilio3.jpg",
            "/images/services/domicilio4.jpg",
        ]
    },
];
