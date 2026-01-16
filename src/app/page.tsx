import { Hero } from "@/components/sections/Hero";
import { Services } from "@/components/sections/Services";
import { BeforeAfter } from "@/components/sections/BeforeAfter";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { TargetAudience } from "@/components/sections/TargetAudience";
import { Process } from "@/components/sections/Process";
import { Dentists } from "@/components/sections/Dentists";
import { Testimonials } from "@/components/sections/Testimonials";
import { BookingForm } from "@/components/sections/BookingForm";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/layout/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Services />
      <BeforeAfter />
      <WhyChooseUs />
      {/* <TargetAudience /> */}
      <Dentists />
      <Testimonials />
      {/* <Process /> */}
      <BookingForm />
      <Contact />
      <Footer />
    </main>
  );
}
