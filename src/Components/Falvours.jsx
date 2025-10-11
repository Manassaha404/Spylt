
import flavorlists from '../constant/FlavourData'

const Falvours = () => {
  return (
    <div className='flavour-containers w-full md:w-fit md:overflow-hidden md:h-full h-fit pl-5 pr-5 md:pl-0 md:pr-[100vw]  flex flex-col md:flex-row md:justify-start md:items-center md:ml-[0vw] flex-nowrap mt-15 md:mt-0 shrink-0'>
      {flavorlists.map((val, index) => {
        return (
          <div key={index} className={`flavour w-full md:w-[55vw]  md:h-[35vw] relative ${val.rotation} mt-[25vw] md:mt-0 md:ml-[10vw] shrink-0`}>
            <img className='object-cover w-full  md:h-[35vw]' src={`/images/${val.color}-bg.svg`} alt="" />
            <img className='absolute  h-[80vw] md:h-[42vw] -top-[33%] md:-top-[20%]  left-[20%] z-5' src={`/images/${val.color}-drink.webp`} alt="" />
            <img className='absolute w-[98%] md:w-[80%] left-[1%] md:left-[6%] -top-[5%] md:-top-[15%]' src={`/images/${val.color}-elements.webp`} alt="" />
          </div>
        );
      })}
    </div>
  )
}
export default Falvours