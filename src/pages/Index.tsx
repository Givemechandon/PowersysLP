import InfiniteScrollBanner from "@/components/InfiniteScrollBanner";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import VideoTestimonials from "@/components/VideoTestimonials";
import FAQSection from "@/components/FAQSection";
import ContactForm from "@/components/ContactForm";
import WhatsAppButton from "@/components/WhatsAppButton";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <InfiniteScrollBanner />
      <HeroSection />
      <ServicesSection />
      <VideoTestimonials />
      <FAQSection />
      <ContactForm />
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
