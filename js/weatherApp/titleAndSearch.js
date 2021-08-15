import DomUtil from './domUtil.js';
import Converter from './converter.js';
import Utility from './utility.js';
import Search from './search.js';
class TitleAndSearch {
    static render(parentElement, data, systemUsed) {
        const element = DomUtil.createElement('div', {class:'titleAndSearch'});
        parentElement.appendChild(element);

        const heading = DomUtil.createElement('h1', {style:'text-align:left'});
        const weekday = [
            "Sunday",
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
          ];
        const headingData = `${weekday[
              new Date(
                Converter.convertTime(data.dt, data.timezone).input
              ).getUTCDay()
            ]}, ${systemUsed == "metric"
            ? parseInt(
                Converter.convertTime(data.dt, data.timezone)[0].split(
                  ":"
                )[0]
              )
            : timeToAMPM(
                Converter.convertTime(data.dt, dat.timezone)[0]
              ).split(":")[0]}:00 ${systemUsed == "imperial"
            ? Utility.isPM(Converter.convertTime(data.dt, data.timezone)[0])
            : ""}`;
            console.log(headingData.replace());
    heading.innerText = headingData;
    element.appendChild(heading);
    Search.render(element);
    }
}
export default TitleAndSearch;