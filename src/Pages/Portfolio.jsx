import PortfolioGrid from '../components/Portfolio/PortfolioGrid'
import Hero from '/src/components/Shared/Hero'

export default function Portfolio() {
    const HeroLable ='Portfolio'
    return (
        <>
            <Hero HeroLable={HeroLable} />  
            <PortfolioGrid/>
        </>
    )
}