import HomeAbout from "../components/Home/About"
import Hero from "../components/Home/Hero"
import HomeService from "../components/Home/Service"
import HomePorfolio from '../components/Home/Portfolio'
import HomeProduct from '../components/Home/Product'
export default function Home() {
    return (
        <>
            <Hero />
            <HomeAbout />
            <HomeService />
            <HomePorfolio />
            <HomeProduct/>
        </>
    )
}