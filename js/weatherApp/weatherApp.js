import API from './api.js';
import NoData from './noData.js';
import Loading from './loading.js';
class WeatherApp {
    rootElement;
    static render(data, systemUsed) {
        if(!data) {
            NoData.render(this.rootElement);
        }
        else {
            console.log({data});
        }
    }
    static init(selector) {
       try {
            this.rootElement = document.querySelector(selector);
            if(!this.rootElement) throw `Could not find the element with ${selector}`;
            const defaultCity = 'Sydney';
            const systemUsed = 'metric';
            Loading.render(this.rootElement);
            API.getWeatherData(defaultCity)
                .then( data => {
                   this.render(null, systemUsed);
                   Loading.remove(this.rootElement);
                });
       }
       catch(error) {
            console.log(error);
       }
    }
}
export default WeatherApp;

//4160a23bd613750a0ba0f583f81a7d6f