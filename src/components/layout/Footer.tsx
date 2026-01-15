import Link from "next/link";
import { Smile, Facebook, Twitter, Instagram, Linkedin, MessageCircle } from "lucide-react";

export function Footer() {
    return (
        <footer className="bg-gray-900 text-white pt-20 pb-10">
            <div className="container-custom">
                <div className="grid md:grid-cols-4 gap-12 mb-16">
                    {/* Brand */}
                    <div className="col-span-1 md:col-span-2">
                        <Link href="/" className="flex items-center gap-2 mb-6">
                            <div className="bg-primary text-white p-2 rounded-xl">
                                <Smile size={24} />
                            </div>
                            <span className="text-xl font-bold font-serif tracking-tight">
                                Lumina<span className="text-primary">Dental</span>
                            </span>
                        </Link>
                        <p className="text-gray-400 max-w-sm mb-6">
                            Reimagining dental care with a focus on patient comfort,
                            advanced technology, and lasting results.
                        </p>
                        <div className="flex gap-4">
                            <a href="#" className="p-2 bg-white/10 rounded-full hover:bg-primary transition-colors">
                                <Facebook size={20} />
                            </a>
                            <a href="#" className="p-2 bg-white/10 rounded-full hover:bg-primary transition-colors">
                                <Instagram size={20} />
                            </a>
                            <a href="#" className="p-2 bg-white/10 rounded-full hover:bg-primary transition-colors">
                                <Twitter size={20} />
                            </a>
                            <a href="#" className="p-2 bg-white/10 rounded-full hover:bg-primary transition-colors">
                                <Linkedin size={20} />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="font-bold text-lg mb-6">Quick Links</h4>
                        <ul className="space-y-4">
                            <li><Link href="#" className="text-gray-400 hover:text-primary transition-colors">Home</Link></li>
                            <li><Link href="#services" className="text-gray-400 hover:text-primary transition-colors">Services</Link></li>
                            <li><Link href="#why-us" className="text-gray-400 hover:text-primary transition-colors">Why Us</Link></li>
                            <li><Link href="#dentists" className="text-gray-400 hover:text-primary transition-colors">Our Team</Link></li>
                            <li><Link href="#book" className="text-gray-400 hover:text-primary transition-colors">Book Appointment</Link></li>
                            <li><a href="https://wa.me/15551234567" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-green-400 transition-colors flex items-center gap-2"><MessageCircle size={16} /> Chat on WhatsApp</a></li>
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h4 className="font-bold text-lg mb-6">Services</h4>
                        <ul className="space-y-4">
                            <li><Link href="#" className="text-gray-400 hover:text-primary transition-colors">Cosmetic Dentistry</Link></li>
                            <li><Link href="#" className="text-gray-400 hover:text-primary transition-colors">Orthodontics</Link></li>
                            <li><Link href="#" className="text-gray-400 hover:text-primary transition-colors">Dental Implants</Link></li>
                            <li><Link href="#" className="text-gray-400 hover:text-primary transition-colors">Teeth Whitening</Link></li>
                            <li><Link href="#" className="text-gray-400 hover:text-primary transition-colors">Pediatric Dental</Link></li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-gray-500 text-sm">
                        © {new Date().getFullYear()} Lumina Dental. All rights reserved.
                    </p>
                    <div className="flex gap-8 text-sm text-gray-500">
                        <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
                        <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
