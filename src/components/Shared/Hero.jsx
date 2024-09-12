import { useLocation } from 'react-router-dom'

export default function Hero({HeroLable}) {
    const location = useLocation().pathname.split('_');
    console.log(location)
    return (
        <>
            <div className="h-[50vh] bg-[url('/src/assets/images/home/bg-pagetitle.jpg')] flex flex-col gap-5 justify-center text-white px-[10%]">
                <p className='text-2xl font-semibold flex gap-2'>Home{location.map((loc, index) => (<span className=''>{ loc}</span>))}</p>
                <h1 className='text-5xl font-bold'>{HeroLable}</h1>
            </div>
        </>
    )
}