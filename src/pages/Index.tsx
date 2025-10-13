import Ctafaixasection from "@/components/Ctafaixasection";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import VideoTestimonials from "@/components/VideoTestimonials";
import CtaSection from "@/components/CtaSection";
import Faixadectacommapa from "@/components/Faixadectacommapa";
import FAQSection from "@/components/FAQSection";
import ContactForm from "@/components/ContactForm";
import WhatsAppButton from "@/components/WhatsAppButton";
import Footer from "@/components/Footer";
import InfiniteScrollBanner from "@/components/InfiniteScrollBanner";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Ctafaixasection />
      <HeroSection />
      <InfiniteScrollBanner />
      <ServicesSection />
      <Faixadectacommapa />
      <VideoTestimonials />
      <CtaSection/>
      <FAQSection />
      <ContactForm />
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
