"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Calendar, Phone } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export function Hero() {
    return (
        <section className="relative pt-24 pb-12 lg:pt-48 lg:pb-32 overflow-hidden bg-gradient-to-br from-blue-50 to-white min-h-screen flex items-center">
            <div className="container-custom grid lg:grid-cols-2 gap-12 items-center">

                {/* Content */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-primary text-sm font-semibold mb-6">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                        </span>
                        Accepting New Patients
                    </div>

                    <h1 className="text-4xl lg:text-6xl font-serif font-bold text-secondary leading-tight mb-6">
                        <motion.span
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="block"
                        >
                            World-Class Care. <span className="text-primary">Zero Anxiety</span>.
                        </motion.span>
                        <motion.span
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                            className="block"
                        >
                            Your Best Smile Awaits.
                        </motion.span>
                    </h1>

                    <p className="text-lg text-body mb-8 max-w-lg">
                        Join over 5,000+ happy patients who trust us for pain-free checkups, advanced implants, and cosmetic makeovers.
                        Modern technology meets compassionate care in a relaxed, spa-like setting.

                    </p>

                    <div className="flex flex-col sm:flex-row gap-4">
                        <Button
                            size="lg"
                            className="w-full sm:w-auto gap-2 shadow-lg shadow-blue-500/20"
                            onClick={(e) => {
                                e.preventDefault();
                                document.getElementById("book")?.scrollIntoView({ behavior: "smooth" });
                            }}
                        >
                            <Calendar size={18} />
                            Book Appointment
                        </Button>
                        <a href="tel:5551234567" className="w-full sm:w-auto">
                            <Button size="lg" variant="outline" className="w-full sm:w-auto gap-2">
                                <Phone size={18} />
                                Call Now
                            </Button>
                        </a>
                    </div>

                    <div className="mt-12 flex items-center gap-4 text-sm text-gray-500">
                        <div className="flex -space-x-4">
                            {[1, 2, 3, 4].map((i) => (
                                <div key={i} className="relative w-12 h-12 rounded-full border-2 border-white overflow-hidden bg-gray-200">
                                    <Image
                                        src={`/images/patient_${i}.png`}
                                        alt={`Patient ${i}`}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                            ))}
                        </div>
                        <p className="font-medium text-gray-600">Trusted by <span className="text-primary font-bold">5,000+</span> patients <span className="mx-2 text-gray-300">|</span> <span className="text-yellow-500">★ 4.9</span> on Google</p>
                    </div>
                </motion.div>

                {/* Image */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="relative hidden lg:block lg:h-[600px]"
                >
                    {/* Placeholder for Dental Image - utilizing a gradient/shape if no image available, 
               but using Image component for correctness if we had one. 
               For now, I'll create a nice abstract shape composition or use a placeholder URL if allowed,
               but user said "Use dummy data and placeholder images".
               I'll use a colored div styling for now to represent the image area effectively or a nice SVG.
           */}
                    <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl h-full min-h-[400px]">
                        <Image
                            src="/images/dental-clinic-4.jpg"
                            alt="Modern Dental Clinic"
                            fill
                            className="object-cover object-top"
                        />
                    </div>

                    {/* Decorative elements */}
                    <div className="absolute top-10 -right-10 w-32 h-32 bg-yellow-100 rounded-full blur-2xl opacity-60"></div>
                    <div className="absolute bottom-10 -left-10 w-40 h-40 bg-blue-200 rounded-full blur-3xl opacity-60"></div>
                </motion.div>
            </div>
        </section>
    );
}
