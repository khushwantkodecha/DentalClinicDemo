"use client";

import { MapPin, Phone, Mail, Clock } from "lucide-react";

export function Contact() {
    return (
        <section className="py-20 bg-white">
            <div className="container-custom">
                <div className="grid lg:grid-cols-2 gap-16">
                    {/* Info */}
                    <div>
                        <span className="text-primary font-bold tracking-wider uppercase text-sm">
                            Visit Us
                        </span>
                        <h2 className="text-3xl md:text-5xl font-serif font-bold text-secondary mt-2 mb-8">
                            Conveniently Located in Beverly Hills
                        </h2>
                        <p className="text-lg text-body mb-8">
                            Our state-of-the-art clinic is designed for your comfort and accessibility.
                            Free parking is available for all patients.
                        </p>

                        <div className="space-y-6">
                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-blue-50 rounded-lg text-primary">
                                    <MapPin size={24} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-gray-900 mb-1">Address</h4>
                                    <p className="text-gray-600">
                                        123 Dental Blvd, Suite 101<br />
                                        Beverly Hills, CA 90210
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-blue-50 rounded-lg text-primary">
                                    <Mail size={24} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-gray-900 mb-1">Email</h4>
                                    <p className="text-gray-600">hello@luminadental.com</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-blue-50 rounded-lg text-primary">
                                    <Phone size={24} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-gray-900 mb-1">Phone</h4>
                                    <p className="text-gray-600">(555) 123-4567</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Map Placeholder */}
                    <div className="bg-gray-100 rounded-3xl overflow-hidden h-[400px] relative shadow-inner">
                        <iframe
                            width="100%"
                            height="100%"
                            frameBorder="0"
                            scrolling="no"
                            marginHeight={0}
                            marginWidth={0}
                            src="https://maps.google.com/maps?q=Beverly%20Hills%2C%20CA&t=&z=13&ie=UTF8&iwloc=&output=embed"
                            className="grayscale hover:grayscale-0 transition-all duration-500"
                        ></iframe>
                        <div className="absolute top-4 right-4 bg-white p-3 rounded-xl shadow-lg">
                            <p className="font-bold text-sm">Lumina Dental</p>
                            <p className="text-xs text-green-600 font-medium">Open Now</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
