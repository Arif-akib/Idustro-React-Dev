import Hero from '/src/components/Shared/Hero'
import Servicegrid from '../components/Service/ServiceGrid'
import ServiceContact from '../components/Service/Contact'
import ServiceWork from '../components/Service/Work'
import ServiceSkills from '/src/components/Service/Skills'
import ServiceClients from "/src/components/Service/Client"
export default function Service() {
    const HeroLable ='What We Do'
    return (
        <>
            <Hero HeroLable={HeroLable} />
            <Servicegrid />
            <div className="px-[10%] bg-[url('/src/assets/images/background/bg-bottom-portfolio-content.png')] bg-no-repeat bg-right">
                <ServiceContact />
                <ServiceWork/>
            </div>
            <ServiceSkills/>
            <ServiceClients/>
        </>
    )
}