"use client";

import { motion } from "framer-motion";
import { MessageSquare, PenTool, Code2, Rocket } from "lucide-react";

const steps = [
    {
        icon: MessageSquare,
        title: "Free Consultation",
        description: "We discuss your clinic's goals and target audience."
    },
    {
        icon: PenTool,
        title: "Design & Branding",
        description: "We create a custom look that matches your practice's vibe."
    },
    {
        icon: Code2,
        title: "Development",
        description: "We build your site with SEO and speed optimizations."
    },
    {
        icon: Rocket,
        title: "Launch & Support",
        description: "We go live and provide ongoing technical peace of mind."
    }
];

export function Process() {
    return (
        <section className="py-24 bg-gray-50">
            <div className="container-custom">
                <div className="text-center max-w-2xl mx-auto mb-20">
                    <span className="text-primary font-semibold tracking-wide uppercase text-sm">How It Works</span>
                    <h2 className="text-4xl md:text-5xl font-serif font-bold text-secondary mt-2 mb-6">
                        Simple 4-Step Process
                    </h2>
                    <p className="text-body text-lg">
                        From concept to launch, we handle everything so you can focus on your patients.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
                    {/* Connecting Line (Desktop) */}
                    <div className="hidden lg:block absolute top-12 left-0 right-0 h-0.5 bg-gray-200 -z-10 translate-y-4"></div>

                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.15 }}
                            className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 text-center group hover:-translate-y-2 transition-transform duration-300"
                        >
                            <div className="w-16 h-16 mx-auto bg-primary text-white rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-primary/30 group-hover:scale-110 transition-transform">
                                <step.icon size={32} />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                {step.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
