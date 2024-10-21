import { IoDiamond } from "react-icons/io5";
import Customer1png from '../assets/customer1.webp';
import Tiagowebp from '../assets/Tiago.webp';
import Blackjpeg from '../assets/Black.jpeg';



const Bodystyle = () => {
  return (
    <div>
    <h1 className="mt-16 text-3xl sm:text-4xl lg:text-5xl font-semibold font-serif">Select A Body Style</h1>
    <div className="mt-8 flex flex-wrap justify-start items-start mx-4 sm:mx-8 px-4 sm:px-8">
        <div className="flex flex-col items-center mr-4 sm:mr-10 mb-6 w-full sm:w-1/3 lg:w-auto">
            <img src={Blackjpeg} alt="" className="w-40 sm:w-60 h-auto"/>
            <p className="font-semibold text-xl sm:text-2xl mt-2 text-center text-black-700">Hatchback</p>
        </div>
        <div className="flex flex-col items-center mr-4 sm:mr-10 mb-6 w-full sm:w-1/3 lg:w-auto">
            <img src={Blackjpeg} alt="" className="w-40 sm:w-60 h-auto"/>
            <p className="font-semibold text-xl sm:text-2xl mt-2 text-center text-black-700">Sedan</p>
        </div>
        <div className="flex flex-col items-center mr-4 sm:mr-10 mb-6 w-full sm:w-1/3 lg:w-auto">
            <img src={Blackjpeg} alt="" className="w-40 sm:w-60 h-auto"/>
            <p className="font-semibold text-xl sm:text-2xl mt-2 text-center text-black-700">XUV</p>
        </div>
        <div className="flex flex-col items-center w-full sm:w-1/3 lg:w-auto">
            <img src={Blackjpeg} alt="" className="w-40 sm:w-60 h-auto"/>
            <p className="font-semibold text-xl sm:text-2xl mt-2 text-center text-black-700">MUV</p>
        </div>
</div>


<div className="w-full h-auto sm:h-[600px] flex flex-col sm:flex-row">
  <div className="w-full sm:w-[30%] h-full flex items-center justify-center text-3xl sm:text-5xl font-semibold text-center p-4">
    Lorem ipsum dolor sit amet
  </div>
  <div className="w-full sm:w-[70%] h-full flex flex-wrap">
    <div className="w-full sm:w-[50%] h-[auto] sm:h-[50%] flex items-center justify-center flex-col p-4">
      <IoDiamond className="w-12 h-12 text-black-500 mr-6" />
      <div className="text-center">
        <h3 className="text-lg font-semibold mb-4">Your Trust, Our Guarantee</h3>
        <p className="text-base sm:text-xl">We Handpick and purchase Every Car We Sell</p>
      </div>
    </div>
    <div className="w-full sm:w-[50%] h-[auto] sm:h-[50%] flex items-center justify-center flex-col p-4">
      <IoDiamond className="w-12 h-12 text-black-500 mr-6" />
      <div className="text-center">
        <h3 className="text-lg font-semibold mb-4">Your Trust, Our Guarantee</h3>
        <p className="text-base sm:text-xl mb-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur corrupti quibusdam voluptatum nobis minima impedit, quia nihil perferendis voluptate animi!</p>
      </div>
    </div>
    <div className="w-full sm:w-[50%] h-[auto] sm:h-[50%] flex items-center justify-center flex-col p-4">
      <IoDiamond className="w-12 h-12 text-black-500 mr-6" />
      <div className="text-center">
        <h3 className="text-lg font-semibold mb-4">Your Trust, Our Guarantee</h3>
        <p className="text-base sm:text-xl">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum accusantium ea animi provident aliquam placeat ipsam. Eaque omnis possimus magni.</p>
      </div>
    </div>
    <div className="w-full sm:w-[50%] h-[auto] sm:h-[50%] flex items-center justify-center flex-col p-4">
      <IoDiamond className="w-12 h-12 text-black-500 mr-6" />
      <div className="text-center">
        <h3 className="text-lg font-semibold mb-4">Your Trust, Our Guarantee</h3>
        <p className="text-base sm:text-xl mb-2">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam, suscipit?</p>
      </div>
    </div>
  </div>
</div>


  <div className="p-6">
      <div className="mb-12 text-start">
          <h1 className="text-3xl font-bold">Explore Our Car Inventory</h1>
      </div>

      <div className="flex flex-wrap justify-between">
    <div className="w-full sm:w-1/2 lg:w-1/4 p-4 rounded-lg shadow-md">
        <img src={Tiagowebp} alt="Car 1" className="w-full h-auto object-cover mb-4 rounded-t-lg" />
        <p className="text-sm mb-2">016 Tata Tiago XT PETROL . Manual</p>
        <p className="text-sm mb-2">79,367 km 2nd Owner Petrol DL-1C</p>
        <p className="text-lg font-semibold mb-2">₹2,74,300</p>
        <p className="text-sm">M3M Urbana, Golf Course Ext., Gurugram</p>
    </div>
    <div className="w-full sm:w-1/2 lg:w-1/4 p-4 rounded-lg shadow-md">
        <img src={Tiagowebp} alt="Car 2" className="w-full h-auto object-cover mb-4 rounded-t-lg" />
        <p className="text-sm mb-2">016 Tata Tiago XT PETROL . Manual</p>
        <p className="text-sm mb-2">79,367 km 2nd Owner Petrol DL-1C</p>
        <p className="text-lg font-semibold mb-2">₹2,74,300</p>
        <p className="text-sm">M3M Urbana, Golf Course Ext., Gurugram</p>
    </div>
    <div className="w-full sm:w-1/2 lg:w-1/4 p-4 rounded-lg shadow-md">
        <img src={Tiagowebp} alt="Car 3" className="w-full h-auto object-cover mb-4 rounded-t-lg" />
        <p className="text-sm mb-2">016 Tata Tiago XT PETROL . Manual</p>
        <p className="text-sm mb-2">79,367 km 2nd Owner Petrol DL-1C</p>
        <p className="text-lg font-semibold mb-2">₹2,74,300</p>
        <p className="text-sm">M3M Urbana, Golf Course Ext., Gurugram</p>
    </div>
    <div className="w-full sm:w-1/2 lg:w-1/4 p-4 rounded-lg shadow-md">
        <img src={Tiagowebp} alt="Car 4" className="w-full h-auto object-cover mb-4 rounded-t-lg" />
        <p className="text-sm mb-2">016 Tata Tiago XT PETROL . Manual</p>
        <p className="text-sm mb-2">79,367 km 2nd Owner Petrol DL-1C</p>
        <p className="text-lg font-semibold mb-2">₹2,74,300</p>
        <p className="text-sm">M3M Urbana, Golf Course Ext., Gurugram</p>
    </div>
</div>

    
      <div className="flex justify-start mt-8">
      <a href="#" className="inline-block px-2 py-2 bg-black text-white font-semibold rounded-lg shadow-md transition duration-300">
          View All Cars
      </a>

    </div>
</div>



<div className="p-6">
      <div className="mb-12 text-start">
          <h1 className="text-3xl font-semibold">Our Happy Customer</h1>
      </div>

     <div className="w-full mb-12">
    <div className="flex flex-wrap justify-between">
        <div className="w-full sm:w-1/2 lg:w-1/4 p-4 rounded-lg shadow-md">
            <img src={Customer1png} alt="Car 1" className="w-full h-[60%] object-cover mb-4 rounded-t-lg" />
            <p className="text-base mb-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, saepe.</p>
            <p className="font-bold">Sabu V T</p>
            <p className="font-bold text-amber-600">Hyundai Eon</p>
        </div>
        <div className="w-full sm:w-1/2 lg:w-1/4 p-4 rounded-lg shadow-md">
            <img src={Customer1png} alt="Car 2" className="w-full h-[60%] object-cover mb-4 rounded-t-lg" />
            <p className="text-base mb-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, assumenda!</p>
            <p className="font-bold">Sabu V T</p>
            <p className="font-bold text-amber-600">Hyundai Eon</p>
        </div>
        <div className="w-full sm:w-1/2 lg:w-1/4 p-4 rounded-lg shadow-md">
            <img src={Customer1png} alt="Car 3" className="w-full h-[60%] object-cover mb-4 rounded-t-lg" />
            <p className="text-base mb-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, laudantium.</p>
            <p className="font-bold">Sabu V T</p>
            <p className="font-bold text-amber-600">Hyundai Eon</p>
        </div>
        <div className="w-full sm:w-1/2 lg:w-1/4 p-4 rounded-lg shadow-md">
            <img src={Customer1png} alt="Car 4" className="w-full h-[60%] object-cover mb-4 rounded-t-lg" />
            <p className="text-base mb-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, doloremque.</p>
            <p className="font-bold">Sabu V T</p>
            <p className="font-bold text-amber-600">Hyundai Eon</p>
        </div>
    </div>
</div>

</div>
  
  </div> 
 )
}
export default Bodystyle
