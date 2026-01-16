"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const cases = [
    {
        id: 1,
        title: "Smile Makeover",
        // Before: Missing tooth/gap
        before: "https://images.unsplash.com/photo-1595152772835-219674b2a8a6?q=80&w=800&auto=format&fit=crop",
        // After: Perfect symmetrical smile
        after: "https://images.unsplash.com/photo-1595152772835-219674b2a8a6?q=80&w=800&auto=format&fit=crop",
        description: "Complete porcelain veneer restoration."
    },
    {
        id: 2,
        title: "Teeth Whitening",
        // Before: Yellow/stained
        before: "https://images.unsplash.com/photo-1595152772835-219674b2a8a6?q=80&w=800&auto=format&fit=crop",
        // After: Bright white
        after: "https://images.unsplash.com/photo-1595152772835-219674b2a8a6?q=80&w=800&auto=format&fit=crop",
        description: "Professional in-office whitening (1 hour)."
    },
    {
        id: 3,
        title: "Invisalign",
        // Before: Crowded/Crooked
        before: "https://images.unsplash.com/photo-1595152772835-219674b2a8a6?q=80&w=800&auto=format&fit=crop",
        // After: Straight alignment
        after: "https://images.unsplash.com/photo-1595152772835-219674b2a8a6?q=80&w=800&auto=format&fit=crop",
        description: "12 months of clear aligner therapy."
    }
];

export function BeforeAfter() {
    return (
        <section className="py-24 bg-blue-50">
            <div className="container-custom">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <span className="text-primary font-semibold tracking-wide uppercase text-sm">Real Results</span>
                    <h2 className="text-4xl md:text-5xl font-serif font-bold text-secondary mt-2 mb-6">
                        See The Difference
                    </h2>
                    <p className="text-body text-lg">
                        Browse our gallery of patient transformations. From subtle tweaks to complete makeovers, we create smiles that look and feel natural.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {cases.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100 group"
                        >
                            <div className="grid grid-cols-2 relative h-64">
                                <div className="relative h-full border-r border-white/20">
                                    <div className="absolute inset-0 bg-gray-200 flex items-center justify-center text-gray-400 text-sm font-medium">
                                        {/* Placeholder fallback if image missing */}
                                        Before
                                    </div>
                                    <Image
                                        src={item.before}
                                        alt={`Before ${item.title}`}
                                        fill
                                        className="object-cover"
                                        onError={(e) => {
                                            // Fallback logic if needed, but styling above handles 'no image loaded' visual
                                        }}
                                    />
                                    <div className="absolute top-2 left-2 bg-black/60 text-white text-[10px] font-bold px-2 py-1 rounded">BEFORE</div>
                                </div>
                                <div className="relative h-full">
                                    <div className="absolute inset-0 bg-blue-100 flex items-center justify-center text-blue-300 text-sm font-medium">
                                        After
                                    </div>
                                    <Image
                                        src={item.after}
                                        alt={`After ${item.title}`}
                                        fill
                                        className="object-cover"
                                    />
                                    <div className="absolute top-2 right-2 bg-primary text-white text-[10px] font-bold px-2 py-1 rounded">AFTER</div>
                                </div>
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                                <p className="text-gray-500 text-sm">{item.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-12 text-center">
                    <p className="text-xs text-gray-400 italic bg-white inline-block px-4 py-2 rounded-full border border-gray-200">
                        *Results may vary based on individual oral health conditions. Images for demonstration purposes.
                    </p>
                </div>
            </div>
        </section>
    );
}
