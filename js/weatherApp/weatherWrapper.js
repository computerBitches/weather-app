import DomUtil from './domUtil.js';
import Utility from './utility.js';
class WeatherWrapper {
    static render(parentElement, data, systemUsed) {
        const el = DomUtil.createElement('div', {class:'weatherWrapper'});

        const header = DomUtil.createElement('h1', {class:'locationTitle'});
        header.innerHTML = `${data.name}, ${data.sys.country}`;
        el.appendChild(header);

        const weatherDiscription =  DomUtil.createElement('p', {class:'weatherDescription'});
        weatherDiscription.innerHTML = `${data.weather[0].description}`;
        el.appendChild(weatherDiscription);
     
        const weatherIcon = DomUtil.createElement('img', {src:`icons/${data.weather[0].icon}.svg`, width:'300', height:'300', alt:`${data.weather[0].description}`}); 
        el.appendChild(weatherIcon);

        const mainTemp = DomUtil.createElement('h1', {class:'mainTemp'});
        const temprateureValue = Utility.getTemperatureValue(data.main.temp, systemUsed);
        const mainTempValue = document.createTextNode(temprateureValue);
        mainTemp.appendChild(mainTempValue);
        el.appendChild(mainTemp);

        const feelsLikeParagraph = DomUtil.createElement('p');
        const feelsLikeTemperature = Utility.getTemperatureValue(data.main.feels_like, systemUsed);
        feelsLikeParagraph.innerText = `Feels like ${temprateureValue}`;
        el.appendChild(feelsLikeParagraph);

        parentElement.appendChild(el); 
    }
}
export default WeatherWrapper;