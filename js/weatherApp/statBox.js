import DomUtil from './domUtil.js';
import StatsCard from './statsCard.js';
import Utility from './utility.js';
import Converter from './converter.js';
class StatBox {
    static render(parentElement, data, systemUsed) {
        const element = DomUtil.createElement('div', {class:'statsBox'});

        StatsCard.render(element, "Humidity", "/icons/025-humidity.png", data.main.humidity, "%" );
        StatsCard.render(element, "Wind Speed", "/icons/017-wind.png", Utility.getWindSpeed(systemUsed, data.wind.speed), systemUsed == "metric" ? "m/s" : "m/h");
        StatsCard.render(element, "Wind direction", "/icons/014-compass.png", Converter.degToCompass(data.wind.deg), "");
        StatsCard.render(element, "Visibility", "/icons/binocular.png", Utility.getVisibility(systemUsed, data.visibility), systemUsed == "metric" ? "km" : "miles");
        StatsCard.render(element, "Sunrise", "/icons/040-sunrise.png", Utility.getTime(systemUsed, data.sys.sunrise, data.timezone), Utility.getAMPM(systemUsed, data.sys.sunrise, data.timezone));
        StatsCard.render(element, "Sunset", "/icons/041-sunset.png", Utility.getTime(systemUsed, data.sys.sunset, data.timezone), Utility.getAMPM(systemUsed, data.sys.sunset, data.timezone ));

        parentElement.appendChild(element);
    }
}
export default StatBox;