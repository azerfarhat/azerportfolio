import MapleLeafBackground from '@/components/MapleLeafBackground';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import ServicesSection from '@/components/ServicesSection';
import QuotesSection from '@/components/QuotesSection';
import VideoSection from '@/components/VideoSection';
import AboutSection from '@/components/AboutSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import AppointmentSection from '@/components/AppointmentSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import Chatbot from '@/components/Chatbot';

const Index = () => {
  return (
    <div className="relative min-h-screen bg-background overflow-x-hidden">
      <MapleLeafBackground />
      <Navbar />
      <main className="relative z-10">
        <HeroSection />
        <ServicesSection />
        <QuotesSection />
        <VideoSection />
        <AboutSection />
        <TestimonialsSection />
        <AppointmentSection />
        <ContactSection />
      </main>
      <Footer />
      <Chatbot />
    </div>
  );
};

export default Index;
