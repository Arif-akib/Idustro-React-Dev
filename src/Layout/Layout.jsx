import { Outlet } from 'react-router-dom'
import Footer from '../components/Shared/Footer/Footer'
import Navbar from '/src/components/Shared/Navbar/Navbar'

export default function Layout() {
    return (
        <>
            <div className='w-[100vw-8px] overflow-hidden'>
                <Navbar />
                <Outlet/>
                <Footer/>
            </div>
        </>
    )
}