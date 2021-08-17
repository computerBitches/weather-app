import DomUtil from './domUtil.js';
import TitleAndSearch from './titleAndSearch.js';
import Switchbox from './switchbox.js';
import StatBox from './statBox.js';
class StatsWrapper {
    static render(parentElement, data, systemUsed) {
        const el = DomUtil.createElement('div', { class:'statsWrapper'});
        parentElement.appendChild(el);
        TitleAndSearch.render(el, data, systemUsed);
        StatBox.render(el, data, systemUsed)
        Switchbox.render(el, data, systemUsed);
    }
}
export default StatsWrapper;