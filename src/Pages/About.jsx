import Hero from '/src/components/Shared/Hero'
import AboutAchivement from '/src/components/About/Achivements'
import AboutCompany from '/src/components/About/Companyy'

export default function Service() {
    const HeroLable ='About Us'
    return (
        <>
            <Hero HeroLable={HeroLable} />
            <AboutAchivement />
            <AboutCompany/>
            
        </>
    )
}