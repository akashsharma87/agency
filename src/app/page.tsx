import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Services from "@/components/Services";
import Process from "@/components/Process";
import CaseStudies from "@/components/CaseStudies";
import TechStack from "@/components/TechStack";
import Testimonials from "@/components/Testimonials";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import ContactForm from "@/components/ContactForm";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground selection:bg-accent/30 selection:text-white">
      <Navbar />
      <Hero />
      <TechStack />
      <Services />
      <Process />
      <CaseStudies />
      <Testimonials />
      <Pricing />
      <FAQ />
      <ContactForm />

      {/* Footer */}
      {/* Footer */}
      <footer className="py-24 px-4 bg-black border-t border-white/5 relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex flex-col items-center text-center space-y-12">
            {/* Professional Logo Mark */}
            <div className="flex flex-col items-center group">
              <div className="w-12 h-12 border-2 border-accent rounded-xl rotate-45 flex items-center justify-center mb-4 group-hover:rotate-90 transition-all duration-700">
                <div className="w-6 h-6 bg-accent rounded-sm -rotate-45" />
              </div>
              <h3 className="text-3xl font-bold tracking-tighter text-white">we<span className="text-accent underline underline-offset-8 decoration-white/10">Work</span></h3>
            </div>

            {/* Central Message */}
            <div className="max-w-2xl text-center">
              <h4 className="text-white/80 text-xl md:text-2xl font-medium leading-relaxed italic">
                "We don't just build software. We engineer the next era of <span className="text-white">intelligent autonomy</span> for the boldest founders in India."
              </h4>
            </div>

            {/* Clean Info Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 w-full pt-12 border-t border-white/5">
              <div className="flex flex-col items-center md:items-start gap-2">
                <span className="text-[10px] uppercase tracking-[0.3em] font-black text-white/30">Email</span>
                <a href="mailto:iakashsharma68@gmail.com" className="text-white/60 hover:text-accent transition-colors">iakashsharma68@gmail.com</a>
              </div>
              <div className="flex flex-col items-center gap-2">
                <span className="text-[10px] uppercase tracking-[0.3em] font-black text-white/30">Connect</span>
                <a href="tel:+917817993152" className="text-white/60 hover:text-accent transition-colors">+91 78179 93152</a>
              </div>
              <div className="flex flex-col items-center md:items-end gap-2">
                <span className="text-[10px] uppercase tracking-[0.3em] font-black text-white/30">Headquarters</span>
                <span className="text-white/60 text-center md:text-right">New Delhi, India</span>
              </div>
            </div>

            {/* Copyright Small Print */}
            <div className="flex flex-col md:flex-row justify-between w-full pt-12 border-t border-white/5 gap-6 text-[10px] uppercase tracking-[0.2em] font-bold text-white/20">
              <p>© 2026 weWork AI Agency. Built with pride in New Delhi.</p>
              <div className="flex gap-8">
                <a href="#" className="hover:text-white transition-colors">Privacy</a>
                <a href="#" className="hover:text-white transition-colors">Terms</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
