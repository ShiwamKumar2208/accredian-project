import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Stats from "../components/Stats";
import Clients from "../components/Clients";
import Features from "../components/Features";
import WhyJoin from "../components/WhyJoin";
import Cat from "../components/Cat";
import HowItWorks from "../components/HowItWorks";
import FAQ from "../components/FAQ";
import Testimonials from "../components/Testimonials";
import CTA from "../components/CTA";
import Footer from "../components/Footer";
import EnquireModal from "@/components/EnquireModal";

export default function Home() {
  const [open, setOpen] = useState(false);
  
  return (
    <>
      <Navbar openModal={() => setOpen(true)} />
      <Hero openModal={() => setOpen(true)} />
      <Stats />
      <Clients />
      <Features />
      <WhyJoin />
      <Cat />
      <HowItWorks />
      <FAQ />
      <Testimonials />
      <CTA openModal={() => setOpen(true)} />
      <Footer openModal={() => setOpen(true)} />

      <EnquireModal open={open} onClose={() => setOpen(false)} />
    </>
  );
}