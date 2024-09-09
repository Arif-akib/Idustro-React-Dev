export default function SheredStar({content}) {
  
    return (
      <>
         <div className="flex">
                            {[...Array(Math.floor(content.star))].map((star, index) => (
                              <div key={index}>
                                <img src="/src/assets/images/icon/starfull.png" alt="" className="size-[15px]" />
                              </div>
                            ))}
                            <p>{ 5-content.star ==0 ? '' : <img src="/src/assets/images/icon/starhalf.png" alt="" className="size-[15px]"/> }</p>
                            {[...Array(5-Math.ceil(content.star))].map((star, index) => (
                              <div key={index}>
                              <img src="/src/assets/images/icon/star.png" alt="" className="size-[15px]"/>
                              </div>
                            ))}
                          </div>
      </>
    );
  }
  