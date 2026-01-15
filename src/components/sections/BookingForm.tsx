"use client";
import { useState } from "react";
import { submitBooking } from "@/app/actions";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export function BookingForm() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [success, setSuccess] = useState(false);

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setIsSubmitting(true);

        const formData = new FormData(e.currentTarget);
        const result = await submitBooking(formData);

        if (result.success) {
            setSuccess(true);
        }
        setIsSubmitting(false);
    }

    return (
        <section id="book" className="py-20 bg-blue-50">
            <div className="container-custom">
                <div className="bg-white rounded-3xl overflow-hidden shadow-2xl grid lg:grid-cols-2">
                    {/* Form Side */}
                    <div className="p-8 lg:p-12">
                        <h2 className="text-3xl font-serif font-bold text-secondary mb-2">
                            Book Your Visit
                        </h2>
                        <p className="text-gray-500 mb-8">
                            Fill out the form below and we'll get back to you within 24 hours to confirm your appointment.
                        </p>

                        {success ? (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="bg-green-50 border border-green-200 rounded-xl p-8 text-center"
                            >
                                <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <span className="text-2xl">✓</span>
                                </div>
                                <h3 className="text-xl font-bold text-green-800 mb-2">Request Received!</h3>
                                <p className="text-green-700">
                                    Thank you for choosing Lumina Dental. Our team will contact you shortly to confirm your appointment time.
                                </p>
                                <Button
                                    className="mt-6 bg-green-600 hover:bg-green-700"
                                    onClick={() => setSuccess(false)}
                                >
                                    Book Another Appointment
                                </Button>
                            </motion.div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid sm:grid-cols-2 gap-4">
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-gray-700">Full Name</label>
                                        <Input name="name" placeholder="John Doe" required />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-gray-700">Phone</label>
                                        <Input name="phone" placeholder="(555) 000-0000" required />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-gray-700">Email Address</label>
                                    <Input name="email" type="email" placeholder="john@example.com" required />
                                </div>

                                <div className="grid sm:grid-cols-2 gap-4">
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-gray-700">Service</label>
                                        <select name="service" className="flex h-10 w-full rounded-md border border-gray-200 bg-background px-3 py-2 text-sm focus:border-primary focus:ring-primary/20 outline-none">
                                            <option>General Checkup</option>
                                            <option>Teeth Whitening</option>
                                            <option>Dental Implants</option>
                                            <option>Orthodontics</option>
                                            <option>Other</option>
                                        </select>
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-gray-700">Preferred Date</label>
                                        <Input name="date" type="date" required />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-gray-700">Message (Optional)</label>
                                    <Textarea name="message" placeholder="Tell us about your dental history or specific concerns..." />
                                </div>

                                <Button disabled={isSubmitting} type="submit" className="w-full text-lg h-12">
                                    {isSubmitting ? (
                                        <span className="flex items-center gap-2">
                                            <span className="w-4 h-4 border-2 border-white/50 border-t-white rounded-full animate-spin"></span>
                                            Sending Request...
                                        </span>
                                    ) : (
                                        "Request Appointment"
                                    )}
                                </Button>
                            </form>
                        )}
                    </div>

                    {/* Image/Info Side */}
                    <div className="bg-secondary p-8 lg:p-12 text-white relative flex flex-col justify-center overflow-hidden">
                        {/* Abstract Circles */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full transform translate-x-1/2 -translate-y-1/2"></div>
                        <div className="absolute bottom-0 left-0 w-48 h-48 bg-white opacity-5 rounded-full transform -translate-x-1/2 translate-y-1/2"></div>

                        <div className="relative z-10">
                            <h3 className="text-2xl font-serif font-bold mb-6">Clinic Hours</h3>
                            <div className="space-y-4 mb-12">
                                <div className="flex justify-between border-b border-white/10 pb-2">
                                    <span>Mon - Fri</span>
                                    <span>8:00 AM - 6:00 PM</span>
                                </div>
                                <div className="flex justify-between border-b border-white/10 pb-2">
                                    <span>Saturday</span>
                                    <span>9:00 AM - 4:00 PM</span>
                                </div>
                                <div className="flex justify-between border-b border-white/10 pb-2">
                                    <span>Sunday</span>
                                    <span>Closed</span>
                                </div>
                            </div>

                            <h3 className="text-2xl font-serif font-bold mb-4">Emergency Care</h3>
                            <p className="text-blue-100">
                                Dental emergencies can't wait. We offer same-day appointments for urgent cases. Call us immediately.
                            </p>
                            <div className="mt-6 text-3xl font-bold text-sky-300">
                                (555) 123-4567
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
