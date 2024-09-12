import Hero from '/src/components/Shared/Hero'
import TeamGrid from '../components/Team/TeamGrid'

export default function Team() {
    const HeroLable ='Our Team'
    return (
        <>
            <Hero HeroLable={HeroLable} />  
            <TeamGrid/>
        </>
    )
}