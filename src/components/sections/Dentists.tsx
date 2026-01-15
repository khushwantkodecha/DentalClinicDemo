"use client";

import { motion } from "framer-motion";
import { Linkedin, Twitter, Instagram } from "lucide-react";
import Image from "next/image";

const dentists = [
    {
        name: "Dr. Sarah Mitchell",
        role: "Cosmetic Specialist",
        bio: "Expert in smile makeovers with 10+ years of experience in veneers and aesthetic dentistry.",
        color: "bg-blue-100 text-blue-600"
    },
    {
        name: "Dr. James Carter",
        role: "Orthodontist",
        bio: "Specializing in Invisalign and traditional braces for children and adults.",
        color: "bg-cyan-100 text-cyan-600"
    },
    {
        name: "Dr. Emily Wong",
        role: "Pediatric Dentist",
        bio: "Creating a fun and safe environment for our youngest patients to build healthy habits.",
        color: "bg-indigo-100 text-indigo-600"
    },
    {
        name: "Dr. Michael Ross",
        role: "Implant Surgeon",
        bio: "Board-certified surgeon restoring smiles with precision implantology.",
        color: "bg-sky-100 text-sky-600"
    }
];

export function Dentists() {
    return (
        <section id="dentists" className="py-20 bg-gray-50">
            <div className="container-custom">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <span className="text-primary font-semibold tracking-wider uppercase text-sm">
                        Our Team
                    </span>
                    <h2 className="text-3xl md:text-4xl font-serif font-bold text-secondary mt-2 mb-4">
                        Meet Your Dental Experts
                    </h2>
                    <p className="text-body text-lg">
                        Highly qualified professionals dedicated to your dental health and comfort.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {dentists.map((doctor, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300"
                        >
                            {/* Avatar Placeholder */}
                            <div className="w-full aspect-square rounded-2xl mb-6 flex items-center justify-center relative overflow-hidden bg-gray-100">
                                <Image
                                    src={`/images/doctor_${index + 1}.png`}
                                    alt={doctor.name}
                                    fill
                                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                            </div>

                            <h3 className="text-xl font-bold text-gray-900">{doctor.name}</h3>
                            <p className="text-primary font-medium text-sm mb-3">{doctor.role}</p>
                            <p className="text-gray-500 text-sm mb-6 leading-relaxed">
                                {doctor.bio}
                            </p>

                            <div className="flex gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <button className="text-gray-400 hover:text-primary transition-colors"><Linkedin size={18} /></button>
                                <button className="text-gray-400 hover:text-primary transition-colors"><Twitter size={18} /></button>
                                <button className="text-gray-400 hover:text-primary transition-colors"><Instagram size={18} /></button>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
