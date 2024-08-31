import Home from '../Pages/Home'
import Navbar from '/src/components/Shared/Navbar'
export default function Layout() {
    return (
        <>
            <div className='w-[100vw-8px] overflow-hidden'>
                <Navbar />
                <Home/>
            </div>
           
        </>
    )
}