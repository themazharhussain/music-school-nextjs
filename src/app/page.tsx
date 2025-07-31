import FeaturedCourses from "@/components/FeaturedCourses";
import HeroSection from "@/components/HeroSection";
import { TestimonialCardS } from "@/components/TestimonialCards";
import { MeetOurInstructorSection } from "@/components/MeetOurInstructorSection";

import UpcommingWebinars from "@/components/UpcommingWebinars";
import WhyChooseUs from "@/components/WhyChooseUs";

export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
      <HeroSection />
      <FeaturedCourses />
      <WhyChooseUs />
      <TestimonialCardS />
      <UpcommingWebinars />
      <MeetOurInstructorSection />
    </main>
  );
}
