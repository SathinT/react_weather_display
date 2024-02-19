import React, {Component} from "react";
import Wind from "../../assests/wind.png";

export class SubWeather extends Component {
    render() {
        return (
            <>
                <div className="flex p-5">
                    <img className="h-14 lg:h-16" src={Wind}/>
                    <div className="pl-3">
                        <h1 className="text-orange-600 text-2xl font-bold
                       lg:text-4xl">45<span className="text-lg lg:text-xl"> kmp/h</span></h1>
                        <h1 className="text-white text-xl
                       lg:text-2xl">Wind</h1>
                    </div>
                </div>
            </>
        );
    }
}
