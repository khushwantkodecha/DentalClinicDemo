"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Calendar, MessageCircle, Star, Phone } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { createWhatsAppLink } from "@/lib/whatsapp";

export function Hero() {
    const whatsappUrl = createWhatsAppLink();

    return (
        <section className="relative pt-24 pb-12 lg:pt-48 lg:pb-32 overflow-hidden bg-gradient-to-br from-blue-50 to-white min-h-screen flex items-center">
            <div className="container-custom grid lg:grid-cols-2 gap-12 items-center">

                {/* Content */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 text-primary text-sm font-semibold mb-6 shadow-sm">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                        </span>
                        Accepting New Patients
                    </div>

                    <h1 className="text-4xl lg:text-5xl xl:text-6xl font-serif font-bold text-secondary leading-[1.15] mb-6">
                        <motion.span
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="block"
                        >
                            Experience Pain-Free,
                        </motion.span>
                        <motion.span
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                            className="block text-primary"
                        >
                            Modern Dental Care.
                        </motion.span>
                    </h1>

                    <p className="text-lg text-body mb-8 max-w-lg leading-relaxed">
                        Join over <span className="font-bold text-gray-900">5,000+ happy patients</span> who trust us for comfortable checkups, advanced implants, and cosmetic makeovers.
                        Award-winning care in a relaxed, spa-like setting.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 mb-10">
                        <Button
                            size="lg"
                            className="w-full sm:w-auto gap-2 shadow-lg shadow-blue-500/20 text-base py-6 px-8"
                            onClick={(e) => {
                                e.preventDefault();
                                document.getElementById("booking-form")?.scrollIntoView({ behavior: "smooth" });
                            }}
                        >
                            <Calendar size={20} />
                            Book Appointment
                        </Button>
                        <a
                            href={whatsappUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full sm:w-auto"
                        >
                            <Button size="lg" variant="outline" className="w-full sm:w-auto gap-2 text-base py-6 px-8 border-2 hover:bg-green-50 hover:border-green-500 hover:text-green-600 transition-all">
                                <MessageCircle size={20} />
                                Chat on WhatsApp
                            </Button>
                        </a>
                    </div>

                    {/* Trust Indicators */}
                    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 pt-6 border-t border-gray-100">
                        <div className="flex -space-x-3">
                            {[1, 2, 3, 4].map((i) => (
                                <div key={i} className="relative w-10 h-10 rounded-full border-2 border-white overflow-hidden bg-gray-200">
                                    <Image
                                        src={`/images/patient_${i}.png`}
                                        alt={`Patient ${i}`}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                            ))}
                        </div>
                        <div className="flex flex-col gap-1">
                            <div className="flex items-center gap-1">
                                <span className="font-bold text-gray-900 text-lg">4.9</span>
                                <div className="flex text-yellow-400">
                                    {[1, 2, 3, 4, 5].map(s => <Star key={s} size={16} fill="currentColor" />)}
                                </div>
                            </div>
                            <p className="text-sm text-gray-500 font-medium">
                                Trusted by <span className="text-gray-900 font-semibold">1,000+ Patients</span>
                            </p>
                        </div>
                        <div className="hidden sm:block w-px h-10 bg-gray-200 mx-2"></div>
                        <div className="flex flex-col gap-1">
                            <span className="font-bold text-gray-900 text-lg">Certified</span>
                            <p className="text-sm text-gray-500 font-medium">Dental Professionals</p>
                        </div>
                    </div>
                </motion.div>

                {/* Image */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="relative hidden lg:block lg:h-[650px] w-full"
                >
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-blue-100/50 rounded-full blur-3xl -z-10"></div>

                    <div className="relative z-10 rounded-[2.5rem] overflow-hidden shadow-2xl h-full border-8 border-white/50">
                        <Image
                            src="/images/dental-clinic-4.jpg"
                            alt="Modern Dental Clinic"
                            fill
                            className="object-cover object-center"
                            priority
                        />

                        {/* Floating Badge */}
                        <motion.div
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 1, duration: 0.5 }}
                            className="absolute bottom-8 left-8 bg-white/90 backdrop-blur-md p-4 rounded-2xl shadow-lg border border-white/50 max-w-[200px]"
                        >
                            <p className="font-serif font-bold text-gray-900 text-lg mb-1">Pain-Free</p>
                            <p className="text-sm text-gray-600 leading-snug">Advanced numbing & gentle techniques guaranteed.</p>
                        </motion.div>
                    </div>

                    {/* Decorative elements */}
                    <div className="absolute -top-12 -right-12 w-48 h-48 bg-yellow-100 rounded-full blur-3xl opacity-60"></div>
                    <div className="absolute -bottom-12 -left-12 w-56 h-56 bg-blue-200 rounded-full blur-3xl opacity-60"></div>
                </motion.div>
            </div>
        </section>
    );
}
