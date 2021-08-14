import DomUtil from './domUtil.js';
class WeatherWrapper {
    static render(parentElement, data, systemUsed) {
        const el = DomUtil.createElement('div', {class:'weatherWrapper'});
        const header = DomUtil.createElement('h1', {class:'locationTitle'});
        header.innerHTML = 'Something here!';
        el.appendChild(header);
        const weatherDiscription =  DomUtil.createElement('p', {class:'weatherDescription'});
        weatherDiscription.innerHTML = 'Some text here';
        el.appendChild(weatherDiscription);
        parentElement.appendChild(el);  
    }
}
export default WeatherWrapper;