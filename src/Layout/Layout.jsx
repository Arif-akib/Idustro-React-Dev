import Home from '../Pages/Home'
import Navbar from '/src/components/Shared/Navbar'
export default function Layout() {
    return (
        <>
            <div className=''>
                <Navbar />
                <Home/>
            </div>
           
        </>
    )
}