import Hero from "/src/components/Shared/Hero";
import AboutAchivement from "/src/components/About/Achivements";
import AboutCompany from "/src/components/About/Company";
import AboutApproch from "/src/components/About/Approch";
import AboutTestimonial from "/src/components/Shared/Tetimonoal";
import AboutClient from "/src/components/About/Clients";

export default function About() {
  const HeroLable = "About Us";
  return (
    <>
      <Hero HeroLable={HeroLable} />
      <AboutAchivement />
      <AboutCompany />
      <AboutApproch />
      <div className="bg-[url('/src/assets/images/background/bg-testi-2.png')] bg-no-repeat bg-cover">
        <AboutTestimonial />
        <AboutClient />
      </div>
    </>
  );
}
