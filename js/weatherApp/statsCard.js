import DomUtil from './domUtil.js';
class StatsCard {
    static render(parentElement, title, iconSrc, metric, unit) {
        const element = DomUtil.createElement('div', {class:'statsCard'});
        parentElement.appendChild(element);

        const headerText = DomUtil.createElement('p');
        headerText.innerText = title;
        element.appendChild(headerText);

        const statsCardContent = DomUtil.createElement('div', {class:'statsCardContent'});
        element.appendChild(statsCardContent);

        const statsBoxIcon = DomUtil.createElement('img', {alt:'Humidity', src:`${iconSrc}`, width:'100', height:'100'});
        statsCardContent.appendChild(statsBoxIcon);

        const div =  DomUtil.createElement('div');
        element.appendChild(div);

        const h1 = DomUtil.createElement('h1');
        h1.innerText = metric; 
        div.appendChild(h1);

        const p = DomUtil.createElement('p')
        p.innerText = unit;
        div.appendChild(p);

    }
}
export default StatsCard;