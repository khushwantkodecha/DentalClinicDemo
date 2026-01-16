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
        description: "Routine checkups, cleanings, and preventative care.",
        benefit: "Keep your natural smile healthy for life."
    },
    {
        icon: Smile,
        title: "Cosmetic Dentistry",
        description: "Veneers, bonding, and smile makeovers.",
        benefit: "Get the perfect smile you've always wanted."
    },
    {
        icon: Anchor,
        title: "Dental Implants",
        description: "Permanent, natural-looking solutions for missing teeth.",
        benefit: "Eat, speak, and smile with total confidence."
    },
    {
        icon: Settings,
        title: "Orthodontics",
        description: "Traditional braces and clear aligners for all ages.",
        benefit: "Straighten your teeth comfortably & discreetly."
    },
    {
        icon: Zap,
        title: "Teeth Whitening",
        description: "Professional whitening treatments for a brighter smile.",
        benefit: "Brighten your smile up to 8 shades in one hour."
    },
    {
        icon: Activity,
        title: "Root Canal",
        description: "Pain-free treatments to save infected natural teeth.",
        benefit: "Relieve pain instantly and save your tooth."
    }
];

export function Services() {
    return (
        <section id="services" className="py-24 bg-white">
            <div className="container-custom">
                <div className="text-center max-w-2xl mx-auto mb-20">
                    <h2 className="text-4xl md:text-5xl font-serif font-bold text-secondary mb-6">
                        Comprehensive Dental Services
                    </h2>
                    <p className="text-body text-lg leading-relaxed">
                        We use the latest technology to provide effective, painless, and high-quality treatments tailored to your unique needs.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            className="p-8 rounded-2xl bg-white hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] transition-all duration-300 border border-gray-100 group relative overflow-hidden"
                        >
                            <div className="absolute top-0 left-0 w-2 h-full bg-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                            <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center text-primary mb-6 group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all duration-300 shadow-sm">
                                <service.icon size={32} strokeWidth={1.5} />
                            </div>

                            <h3 className="text-2xl font-bold text-gray-900 mb-2">{service.title}</h3>
                            <p className="text-primary font-medium text-sm mb-4 uppercase tracking-wide opacity-80">{service.benefit}</p>
                            <p className="text-gray-600 leading-relaxed border-t border-gray-100 pt-4">
                                {service.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
