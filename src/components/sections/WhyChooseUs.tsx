"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Award, Clock, Heart } from "lucide-react";

export function WhyChooseUs() {
    const features = [
        {
            icon: Award,
            title: "Award Winning Care",
            description: "Recognized excellence in patient comfort and clinical outcomes."
        },
        {
            icon: Clock,
            title: "Flexible Scheduling",
            description: "Early morning, evening, and weekend appointments available."
        },
        {
            icon: Heart,
            title: "Patient-Centered",
            description: "We listen to your concerns and customize every treatment plan."
        },
        {
            icon: CheckCircle2,
            title: "Modern Technology",
            description: "Digital X-rays, 3D imaging, and laser dentistry for precision."
        }
    ];

    return (
        <section id="why-us" className="py-20 bg-blue-900 text-white relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500 rounded-full blur-[100px]"></div>
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-500 rounded-full blur-[100px]"></div>
            </div>

            <div className="container-custom relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6">
                            Why Patients Choose <span className="text-blue-300">Lumina</span>
                        </h2>
                        <p className="text-blue-100 text-lg leading-relaxed mb-8">
                            We redefine the dental experience by combining luxury hospitality with medical expertise.
                            Our clinic feels more like a spa than a doctor's office.
                        </p>
                        <div className="grid sm:grid-cols-2 gap-8">
                            <div className="text-center sm:text-left">
                                <span className="text-4xl font-bold block mb-2">15+</span>
                                <span className="text-blue-200">Years Experience</span>
                            </div>
                            <div className="text-center sm:text-left">
                                <span className="text-4xl font-bold block mb-2">5k+</span>
                                <span className="text-blue-200">Happy Smiles</span>
                            </div>
                        </div>
                    </motion.div>

                    <div className="grid sm:grid-cols-2 gap-6">
                        {features.map((feature, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.2 }}
                                className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/10 hover:bg-white/20 transition-colors"
                            >
                                <feature.icon className="w-10 h-10 text-blue-300 mb-4" />
                                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                                <p className="text-blue-100 text-sm">{feature.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
