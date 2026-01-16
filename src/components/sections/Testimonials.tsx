"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
    {
        name: "Jennifer Law",
        role: "New York, USA",
        text: "I used to be terrified of the dentist, but the team at Lumina changed everything. Their gentle approach and calming atmosphere made my root canal completely stress-free!",
        stars: 5,
        image: "/images/patient_1.png"
    },
    {
        name: "Mark Thompson",
        role: "London, UK",
        text: "Incredible results with my Invisalign treatment. My smile is straighter than I ever imagined possible. Highly recommend Dr. Carter!",
        stars: 5,
        image: "/images/patient_2.png"
    },
    {
        name: "Sarah Jenkins",
        role: "Sydney, AU",
        text: "The best dental experience I've ever had. From the reception to the chair, everyone is professional and kind. The facility is spotless.",
        stars: 5,
        image: "/images/patient_3.png"
    }
];

export function Testimonials() {
    return (
        <section id="testimonials" className="py-24 bg-white">
            <div className="container-custom">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-serif font-bold text-secondary mb-4">
                        Patient Stories
                    </h2>
                    <div className="flex items-center justify-center gap-2 text-yellow-500 mb-2">
                        {[1, 2, 3, 4, 5].map((s) => (
                            <Star key={s} fill="currentColor" size={24} />
                        ))}
                    </div>
                    <p className="text-gray-500 text-lg">Rated 5.0/5.0 based on <span className="font-bold text-gray-900">500+ reviews</span></p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {testimonials.map((t, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.2 }}
                            className="bg-surface p-8 rounded-2xl border border-gray-100 relative shadow-sm hover:shadow-xl transition-shadow duration-300"
                        >
                            <Quote className="absolute top-6 right-6 text-blue-100 transform rotate-12" size={48} />

                            <div className="flex gap-1 text-yellow-500 mb-6">
                                {[...Array(t.stars)].map((_, i) => (
                                    <Star key={i} size={18} fill="currentColor" />
                                ))}
                            </div>

                            <p className="text-gray-700 italic mb-8 relative z-10 leading-relaxed min-h-[80px]">
                                "{t.text}"
                            </p>

                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full bg-blue-100 overflow-hidden relative border-2 border-white shadow-md">
                                    {/* Using Next Image would be ideal here if real images exist, fallback to colored div with initials if not */}
                                    <img
                                        src={t.image}
                                        alt={t.name}
                                        className="object-cover w-full h-full"
                                        onError={(e) => {
                                            e.currentTarget.style.display = 'none';
                                            e.currentTarget.nextElementSibling?.classList.remove('hidden');
                                        }}
                                    />
                                    <div className="hidden absolute inset-0 flex items-center justify-center bg-blue-200 text-blue-700 font-bold">
                                        {t.name.substring(0, 2)}
                                    </div>
                                </div>
                                <div>
                                    <h4 className="font-bold text-gray-900 text-base">{t.name}</h4>
                                    <p className="text-xs text-gray-500 font-medium uppercase tracking-wide">{t.role}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
