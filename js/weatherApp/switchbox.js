import DomUtil from './domUtil.js';
import WeatherApp from './weatherApp.js';
class Switchbox {
    data;
    static switchUnit(event) {
        const selectedElementValue = event.target.innerText;
        let systemUsed;
        switch (selectedElementValue) {
            case 'Metric System':
                systemUsed = 'metric';
                break;
            case 'Imperical System':
                systemUsed = 'imperical';
                break;
            default:
        }
        if(systemUsed) {
        console.log(this.data);
         WeatherApp.render(this.data, systemUsed);
        }
    }
    static render(parentElement, data, systemUsed) {
        //console.log(data);
        this.data = data;
        const element = DomUtil.createElement('div', {class:'switchBox'});
        parentElement.appendChild(element);

        const metricElement = DomUtil.createElement('p', {class:'switch'});
        metricElement.addEventListener('click', this.switchUnit.bind(this));
        metricElement.innerText = 'Metric System';

        const impericalElement = DomUtil.createElement('p', {class:'switch'});
        impericalElement.addEventListener('click', this.switchUnit.bind(this));
        impericalElement.innerText = 'Imperical System';

        if(systemUsed === 'metric') {
            metricElement.setAttribute('style','color:green');
        } 
        if(systemUsed === 'imperical') {
            impericalElement.setAttribute('style','color:green');
        }
        element.appendChild(metricElement);
        element.appendChild(impericalElement);
       
    }
}
export default Switchbox