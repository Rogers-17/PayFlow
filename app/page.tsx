import CallToActions from "@/sections/CallToActions";
import Features from "@/sections/Features";
import Footer from "@/sections/Footer";
import Hero from "@/sections/Hero";
import SocialProof from "@/sections/SocialProof";

export default function Home(){
  return (
    <>
      <Hero />
      <SocialProof />
      <Features />
      <CallToActions />
      <Footer />
    </>
  )
}