import Link from "next/link";
import { Smile, Facebook, Twitter, Instagram, Linkedin, MessageCircle, Mail, MapPin, Phone } from "lucide-react";
import { createWhatsAppLink, WHATSAPP_CONFIG } from "@/lib/whatsapp";

export function Footer() {
    const whatsappUrl = createWhatsAppLink();

    return (
        <footer className="bg-slate-900 text-white pt-24 pb-12 border-t border-slate-800">
            <div className="container-custom">
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    {/* Brand */}
                    <div className="col-span-1">
                        <Link href="/" className="flex items-center gap-2 mb-6">
                            <div className="bg-primary text-white p-2 rounded-xl">
                                <Smile size={24} />
                            </div>
                            <span className="text-2xl font-bold font-serif tracking-tight">
                                Lumina<span className="text-primary">Dental</span>
                            </span>
                        </Link>
                        <p className="text-slate-400 mb-8 leading-relaxed">
                            Experience the future of dental care. Pain-free treatments, advanced technology, and a team that cares about your comfort.
                        </p>
                        <div className="flex gap-4">
                            <a href="#" className="p-2 bg-white/5 rounded-lg hover:bg-primary hover:text-white transition-all">
                                <Facebook size={20} />
                            </a>
                            <a href="#" className="p-2 bg-white/5 rounded-lg hover:bg-primary hover:text-white transition-all">
                                <Instagram size={20} />
                            </a>
                            <a href="#" className="p-2 bg-white/5 rounded-lg hover:bg-primary hover:text-white transition-all">
                                <Twitter size={20} />
                            </a>
                            <a href="#" className="p-2 bg-white/5 rounded-lg hover:bg-primary hover:text-white transition-all">
                                <Linkedin size={20} />
                            </a>
                        </div>
                    </div>

                    {/* Quick Link */}
                    <div>
                        <h4 className="font-bold text-lg mb-6 text-white">Quick Links</h4>
                        <ul className="space-y-4">
                            <li><Link href="/" className="text-slate-400 hover:text-primary transition-colors hover:translate-x-1 inline-block">Home</Link></li>
                            <li><Link href="#services" className="text-slate-400 hover:text-primary transition-colors hover:translate-x-1 inline-block">Services</Link></li>
                            <li><Link href="#why-us" className="text-slate-400 hover:text-primary transition-colors hover:translate-x-1 inline-block">Why Us</Link></li>
                            <li><Link href="#dentists" className="text-slate-400 hover:text-primary transition-colors hover:translate-x-1 inline-block">Our Team</Link></li>
                            <li><Link href="#testimonials" className="text-slate-400 hover:text-primary transition-colors hover:translate-x-1 inline-block">Testimonials</Link></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="font-bold text-lg mb-6 text-white">Contact Us</h4>
                        <ul className="space-y-5">
                            <li className="flex items-start gap-3 text-slate-400">
                                <MapPin size={20} className="text-primary shrink-0 mt-1" />
                                <span>123 Dental Avenue,<br />Medicity, NY 10001</span>
                            </li>
                            <li className="flex items-center gap-3 text-slate-400">
                                <Phone size={20} className="text-primary shrink-0" />
                                <a href="tel:15551234567" className="hover:text-white transition-colors">{WHATSAPP_CONFIG.phoneNumber}</a>
                            </li>
                            <li className="flex items-center gap-3 text-slate-400">
                                <Mail size={20} className="text-primary shrink-0" />
                                <a href="mailto:hello@luminadental.com" className="hover:text-white transition-colors">hello@luminadental.com</a>
                            </li>
                            <li className="flex items-center gap-3 text-slate-400">
                                <MessageCircle size={20} className="text-green-500 shrink-0" />
                                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="hover:text-green-400 transition-colors">Chat on WhatsApp</a>
                            </li>
                        </ul>
                    </div>

                    {/* Hours */}
                    <div>
                        <h4 className="font-bold text-lg mb-6 text-white">Opening Hours</h4>
                        <ul className="space-y-3 text-slate-400">
                            <li className="flex justify-between">
                                <span>Mon - Fri</span>
                                <span className="text-white">9:00 AM - 7:00 PM</span>
                            </li>
                            <li className="flex justify-between">
                                <span>Saturday</span>
                                <span className="text-white">10:00 AM - 4:00 PM</span>
                            </li>
                            <li className="flex justify-between">
                                <span>Sunday</span>
                                <span className="text-primary font-medium">Closed</span>
                            </li>
                        </ul>
                        <div className="mt-8">
                            <Link href="#booking-form" className="block text-center py-3 rounded-lg bg-primary text-white font-semibold hover:bg-blue-600 transition-colors">
                                Book Appointment
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-slate-500 text-sm">
                        © {new Date().getFullYear()} Lumina Dental. All rights reserved.
                    </p>
                    <div className="flex gap-8 text-sm text-slate-500">
                        <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
                        <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
