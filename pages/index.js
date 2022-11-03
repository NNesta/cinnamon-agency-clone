import Head from "next/head"
import HeroSection from "../components/HeroSection";
import ProductDesignSection from "../components/ProductDesignSection";
import ServicesSection from "../components/ServicesSection";
import TeamSection from "../components/TeamSection";
import CommunicationSection from "../components/CommunicationSection";
import WhoAreWe from "../components/WhoAreWe";
import CollegeSection from "../components/CollegeSection";
import GrowingSection from "../components/GrowingSection";
import OfficeSection from "../components/OfficeSection";
import BlogSection from "../components/BlogSection";
import HomeContactUsSection from "../components/HomeContactUsSection";

export default function Home() {
  return (
    <>
    <Head>
   <title>CINNAMON | All software, zero bullshit</title>
  <meta name="description" content="NEAR dev 101 clone Created By Ngabonziza Nestor" />
        <link rel="icon" href="/assets/logo-1.png" />
    </Head>
    <div>
      <HeroSection />
      <ProductDesignSection/>
      <ServicesSection/>
      <TeamSection/>
      <CommunicationSection/>
      <WhoAreWe/>
      <CollegeSection/>
      <GrowingSection/>
      <OfficeSection/>
      <BlogSection/>
      <HomeContactUsSection/>
    </div>
    </>
  )
}