import React from 'react';
import "../src/App.css"
import  search  from '../src/assests/search button.png'
import  cloudy  from '../src/assests/clouds.png'

import  maxT  from '../src/assests/Thermometer Up.png'
import  minT  from '../src/assests/Thermometer Down.png'
import  Humidity  from '../src/assests/humidity.png'
import  Wind  from '../src/assests/wind.png'
import  Pressure  from '../src/assests/Atmospheric Pressure.png'
import {SubWeather} from "./view/SubWeather/SubWeather";

function App() {
  return (
   <>
   <div id="main" className="flex-none md:flex">

       <div id="section1" className="
       w-full h-4/6 flex-col justify-between
       md:h-full md:w-3/5
       ">
           <div className="pt-14">
         <div className="
         flex w-64 h-10 mx-20 rounded-2xl bg-white opacity-80
         md:w-48 md:ml-[110%]
         lg:w-80">
             <input placeholder="Search City..."
                    className="bg-transparent outline-none w-52 pl-3"></input>
             <img className="md:-ml-10
             lg:ml-20" src={search}/>
         </div>

               <div className="
               text-center pt-5
               lg:text-left lg:pl-72">
               <h1 className="text-white text-3xl font-bold">January, 2024</h1>
               <h1 className="text-white text-5xl font-bold lg:text-4xl">Monday</h1>
               </div>

               <div className="mx-32
               md:mt-14
               lg:ml-0 lg:-mt-36">
                   <img className="
                   h-40
                   md:h-56 md:w-72
                   lg:h-40 lg:w-40 lg:ml-16" src={cloudy}/>
                   <h1 className="
                   text-4xl text-orange-600 font-bold text-center -mt-5
                   lg:text-left lg:ml-20">CLOUDY</h1>
               </div>

               <div className="
               md:mt-8
               lg:ml-20 lg:mt-72">
                   <div className="
                   pt-14 text-center text-8xl font-bold
                   lg:text-left lg:text-9xl">
                       <h1 className="text-orange-600">23
                           <span className="text-white">℃</span>
                       </h1>
                   </div>
                   <h1 className="text-center text-white text-3xl font-bold
                   lg:text-left lg:w-40 lg:text-4xl">Matara, Sri Lanka</h1>
               </div>
           </div>
       </div>


       <div id="section2" className="
       w-full h-2/6
       md:h-full md:w-2/5 md:pl-8">

           <div className="
           flex flex-wrap justify-between mx-3 pt-7
           md:mt-36
           lg:flex-col lg:ml-20 lg:p-5">
               <SubWeather/>
              <SubWeather/>
               <SubWeather/>
               <SubWeather/>
               <div className="hidden md:block">
               <SubWeather/>
               </div>
           </div>

       </div>

   </div>
   </>
  );
}

export default App;
