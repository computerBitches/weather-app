import API from './api.js';
import NoData from './noData.js';
import Loading from './loading.js';
import WeatherComponent from './weatherComponent.js';
import constants from './constants.js';

class WeatherApp {
    rootElement;
    static render(data, systemUsed) {
        this.rootElement.innerHTML = null;
        if(!data || (data.cod === '404')) {
            NoData.render(this.rootElement);
        }
        else {
            WeatherComponent.render(this.rootElement, data, systemUsed);
           
        }
    }
    static init(selector) {
       try {
            this.rootElement = document.querySelector(selector);
            if(!this.rootElement) throw `Could not find the element with ${selector}`;
            if( localStorage.getItem("weather_data")) {
                const data = JSON.parse(localStorage.getItem("weather_data"));
                this.render(data, constants.DEFAULT_UNIT);
            } else {
            Loading.render(this.rootElement);
            API.getWeatherData(constants.DEFAULT_CITY)
                .then( data => {
                    localStorage.setItem("weather_data", JSON.stringify(data));
                    Loading.remove(this.rootElement);
                   this.render(data, constants.DEFAULT_UNIT);   
                });
       }}
       catch(error) {
            console.log(error);
       }
    }
}
export default WeatherApp;

//4160a23bd613750a0ba0f583f81a7d6f