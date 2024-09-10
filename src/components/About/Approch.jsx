import bg1 from '/src/assets/images/service/post-5-150x150.jpg'
import bg2 from '/src/assets/images/service/service-12-450x500.jpg'
import bg3 from '/src/assets/images/service/service-2-450x500.jpg'

export default function AboutApproch() {
    const contents = [
        {
            img: bg1,
            headline: 'Our Vision',
            text:'Petrochemical have played a crucial role in society for over 50 years and throughout that time the industry has constantly evolved.'
        },
        {
            img: bg2,
            headline: 'Muchen Railway station',
            text:'You can store your bags with one of our luggage storage location just around the conrer and explore Munich hassle-free'
        },
        {
            img: bg3,
            headline: 'Crop Identity',
            text:'As well as developing in your role or assignment, we offer our employee the opportunity to continious education.'
        },
    ]
  return (
    <>
      <div className="pt-32 bg-gray-100 px-[10%]">
        <div>
          <p className="text-lg font-bold primary-color text-center pb-3">
            Our Approch
          </p>
          <h2 className="text-5xl font-bold text-center pb-5">
            Capitalise On Hanging
          </h2>
          <p className="text-gray-600 w-1/2 mx-auto text-center">
            We are one of Europe’s largest technology and IT consulting
            companies with over 33,000 employees in over 30 countries and
            collaborations with Europe’s.
          </p>
        </div>
              <div className="pt-10 grid grid-cols-3 gap-8">
                  {
                      contents.map((content, index) => (
                        <div className="p-5 rounded-md shadow-md bg-white group flex flex-col gap-4">
                        <div className="w-full h-[200px] overflow-hidden rounded-md">
                          <img
                            src={content.img}
                            alt=""
                            className="size-full aspect-auto object-cover scale-110 group-hover:scale-100 origin-top duration-500"
                          />
                        </div>
                              <h2 className="text-3xl font-bold">{ content.headline}</h2>
                        <p className="text-gray-600">
                          {content.text}
                        </p>
                        <p className="font-bold group-hover:primary-color duration-500">
                          Explore More +
                        </p>
                      </div>
                      ))
                  }
        </div>
      </div>
    </>
  );
}
