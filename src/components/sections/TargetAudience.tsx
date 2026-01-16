"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const audienceList = [
    "New dental clinics looking to attract high-value patients.",
    "Established practices wanting to upgrade their outdated website.",
    "Cosmetic specialists needing a premium portfolio showcase.",
    "Multi-location dental groups requiring a scalable solution."
];

export function TargetAudience() {
    return (
        <section className="py-24 bg-secondary text-white overflow-hidden">
            <div className="container-custom">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6 leading-tight">
                            Is This Platform Right For Your Clinic?
                        </h2>
                        <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                            Built specifically for dental professionals who demand excellence.
                            If you care about patient experience and premium design, we are the perfect match.
                        </p>
                    </motion.div>

                    <div className="grid gap-6">
                        {audienceList.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1, duration: 0.5 }}
                                className="flex items-center gap-4 bg-white/5 p-4 rounded-xl border border-white/10 hover:bg-white/10 transition-colors"
                            >
                                <div className="shrink-0 w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                                    <CheckCircle2 size={24} />
                                </div>
                                <span className="font-medium text-lg text-white">{item}</span>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
