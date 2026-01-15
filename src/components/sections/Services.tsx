"use client";

import { motion } from "framer-motion";
import {
    Sparkles,
    Smile,
    Anchor,
    Settings,
    Zap,
    Activity
} from "lucide-react";

const services = [
    {
        icon: Sparkles,
        title: "General Dentistry",
        description: "Routine checkups, cleanings, and preventative care for a healthy smile."
    },
    {
        icon: Smile,
        title: "Cosmetic Dentistry",
        description: "Veneers, bonding, and smile makeovers to boost your confidence."
    },
    {
        icon: Anchor,
        title: "Dental Implants",
        description: "Permanent, natural-looking solutions for missing teeth."
    },
    {
        icon: Settings,
        title: "Orthodontics",
        description: "Traditional braces and clear aligners for all ages."
    },
    {
        icon: Zap,
        title: "Teeth Whitening",
        description: "Professional whitening treatments for a brighter smile."
    },
    {
        icon: Activity,
        title: "Root Canal",
        description: "Pain-free treatments to save infected natural teeth."
    }
];

export function Services() {
    return (
        <section id="services" className="py-20 bg-white">
            <div className="container-custom">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-4xl font-serif font-bold text-secondary mb-4">
                        Comprehensive Dental Services
                    </h2>
                    <p className="text-body text-lg">
                        We use the latest technology to provide effective, painless, and high-quality treatments.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="p-8 rounded-2xl bg-surface hover:shadow-xl transition-shadow border border-blue-50 group"
                        >
                            <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center text-primary shadow-sm mb-6 group-hover:scale-110 transition-transform duration-300">
                                <service.icon size={28} />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                            <p className="text-gray-600 leading-relaxed">
                                {service.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
