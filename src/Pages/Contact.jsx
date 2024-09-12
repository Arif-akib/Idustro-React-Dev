import Hero from '/src/components/Shared/Hero'
import ContactAddress from '/src/components/Contact/Address'
import ContactMap from '/src/components/Contact/Map'
import ContactForm from '/src/components/Contact/Form'

export default function Contact() {
    const HeroLable ='Contact Us'
    return (
        <>
            <Hero HeroLable={HeroLable} />  
            <ContactAddress />
            <ContactMap/>
            <ContactForm/>
        </>
    )
}