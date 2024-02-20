import React, {Component} from "react";
import Wind from "../../assests/wind.png";
import maxT from "../../assests/Thermometer Up.png";
import minT from "../../assests/Thermometer Down.png";
import humidity from "../../assests/humidity.png";
import pressure from "../../assests/Atmospheric Pressure.png";
import { WeatherData } from "../../App";


interface SubWeatherProps {
    WeatherData: WeatherData | null;
}

export class SubWeather extends Component<SubWeatherProps> {
    render() {
        const { WeatherData } = this.props;

        return (
            <>
                <div className="flex p-5">
                    <img className="h-14 lg:h-16" src={maxT}/>
                    <div className="pl-3">
                        <h1 className="text-orange-600 text-2xl font-bold
                       lg:text-4xl">{WeatherData?.main.temp_max}<span className="text-lg lg:text-xl"> ℃</span></h1>
                        <h1 className="text-white text-xl
                       lg:text-2xl">Max Temp</h1>
                    </div>
                </div>
                <div className="flex p-5">
                    <img className="h-14 lg:h-16" src={minT}/>
                    <div className="pl-3">
                        <h1 className="text-orange-600 text-2xl font-bold
                       lg:text-4xl">{WeatherData?.main.temp_min}<span className="text-lg lg:text-xl"> ℃</span></h1>
                        <h1 className="text-white text-xl
                       lg:text-2xl">Min Temp</h1>
                    </div>
                </div>
                <div className="flex md:flex-col lg:flex-col">
                <div className="flex p-5">
                    <img className="h-14 lg:h-16" src={humidity}/>
                    <div className="pl-3">
                        <h1 className="text-orange-600 text-2xl font-bold
                       lg:text-4xl">{WeatherData?.main.humidity}<span className="text-lg lg:text-xl">%</span></h1>
                        <h1 className="text-white text-xl
                       lg:text-2xl">Humidity</h1>
                    </div>
                </div>
                <div className="flex p-5">
                    <img className="h-14 lg:h-16" src={Wind}/>
                    <div className="pl-3">
                        <h1 className="text-orange-600 text-2xl font-bold
                       lg:text-4xl">{WeatherData?.wind.speed}<span className="text-lg lg:text-xl"> kmp/h</span></h1>
                        <h1 className="text-white text-xl
                       lg:text-2xl">Wind</h1>
                    </div>
                </div>
                </div>
                <div className="hidden md:block">
                    <div className="flex p-5">
                        <img className="h-14 lg:h-16" src={pressure}/>
                        <div className="pl-3">
                            <h1 className="text-orange-600 text-2xl font-bold
                       lg:text-4xl">{WeatherData?.main.pressure}</h1>
                            <h1 className="text-white text-xl
                       lg:text-2xl">Pressure</h1>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}
