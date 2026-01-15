"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
    {
        name: "Jennifer Law",
        role: "Patient since 2021",
        text: "I used to be terrified of the dentist, but the team at Lumina changed everything. Their gentle approach and calming atmosphere made my root canal completely stress-free!",
        stars: 5
    },
    {
        name: "Mark Thompson",
        role: "Patient since 2023",
        text: "Incredible results with my Invisalign treatment. My smile is straighter than I ever imagined possible. Highly recommend Dr. Carter!",
        stars: 5
    },
    {
        name: "Sarah Jenkins",
        role: "Patient since 2019",
        text: "The best dental experience I've ever had. From the reception to the chair, everyone is professional and kind. The facility is spotless.",
        stars: 5
    }
];

export function Testimonials() {
    return (
        <section id="testimonials" className="py-20 bg-white">
            <div className="container-custom">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-serif font-bold text-secondary mb-4">
                        Patient Stories
                    </h2>
                    <div className="flex items-center justify-center gap-2 text-yellow-500 mb-2">
                        {[1, 2, 3, 4, 5].map((s) => (
                            <Star key={s} fill="currentColor" size={20} />
                        ))}
                    </div>
                    <p className="text-gray-500">Rated 5.0/5.0 based on 500+ reviews</p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {testimonials.map((t, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.2 }}
                            className="bg-surface p-8 rounded-2xl border border-gray-100 relative"
                        >
                            <Quote className="absolute top-6 right-6 text-blue-100 transform rotate-12" size={48} />

                            <div className="flex gap-1 text-yellow-500 mb-4">
                                {[...Array(t.stars)].map((_, i) => (
                                    <Star key={i} size={16} fill="currentColor" />
                                ))}
                            </div>

                            <p className="text-gray-700 italic mb-6 relative z-10">
                                "{t.text}"
                            </p>

                            <div className="flex items-center gap-4">
                                <div className="w-10 h-10 rounded-full bg-blue-200 flex items-center justify-center font-bold text-blue-700 text-sm">
                                    {t.name.substring(0, 2)}
                                </div>
                                <div>
                                    <h4 className="font-bold text-gray-900 text-sm">{t.name}</h4>
                                    <p className="text-xs text-gray-500">{t.role}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
