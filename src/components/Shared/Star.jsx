import starfull from "/src/assets/images/icon/starfull.png"
import starhalf from "/src/assets/images/icon/starhalf.png"
import starno from "/src/assets/images/icon/star.png"

export default function SheredStar({ content }) {
  
    return (
      <>
         <div className="flex ">
                            {[...Array(Math.floor(content.star))].map((star, index) => (
                              <div key={index}>
                                <img src={starfull} alt="" className="size-[15px]" />
                              </div>
                            ))}
                            <p>{ 5-content.star ==0 ? '' : <img src={starhalf} alt="" className="size-[15px]"/> }</p>
                            {[...Array(5-Math.ceil(content.star))].map((star, index) => (
                              <div key={index}>
                              <img src={starno} alt="" className="size-[15px]"/>
                              </div>
                            ))}
                          </div>
      </>
    );
  }
  