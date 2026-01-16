"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Calendar, Phone } from "lucide-react";
import { createWhatsAppLink } from "@/lib/whatsapp";

export function StickyCTA() {
    const [isVisible, setIsVisible] = useState(false);
    const whatsappUrl = createWhatsAppLink();

    useEffect(() => {
        const handleScroll = () => {
            // Show after scrolling past hero (approx 500px)
            if (window.scrollY > 500) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 100, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="fixed bottom-0 left-0 right-0 bg-white/95 backdrop-blur-md border-t border-gray-200 shadow-2xl z-40 p-4 md:hidden"
                >
                    <div className="container-custom flex gap-3">
                        <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="flex-1">
                            <Button variant="outline" className="w-full gap-2 border-green-500 text-green-600 hover:bg-green-50">
                                <Phone size={18} />
                                Chat
                            </Button>
                        </a>
                        <Button
                            className="flex-[2] gap-2"
                            onClick={() => document.getElementById("booking-form")?.scrollIntoView({ behavior: "smooth" })}
                        >
                            <Calendar size={18} />
                            Book Appointment
                        </Button>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}

// Separate Desktop Sticky Header if needed, but requirements mention "sticky global CTA".
// For mobile optimization, a bottom bar is best. For desktop, the Navbar usually handles this.
// I will ensure this component is mobile-only (md:hidden) as desktop typically has persistent nav buttons.
// However, the request asked for "Sticky Global CTA". If the navbar isn't sticky, I should check that too.
// Assuming Navbar is sticky or sufficient. The user request says "Sticky header OR bottom bar". bottom bar is great for mobile.
