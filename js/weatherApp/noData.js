import Search from './search.js';
class NoData {
    static render(parentElement) {
        const element = document.createElement('div');
        element.classList.add('errSrc');
        const innerDiv = document.createElement('div');
        const heading = document.createElement('h1');
        heading.setAttribute('style', 'margin-bottom:30px');
        heading.innerHTML = 'City not found, try again!';
        innerDiv.appendChild(heading);
        element.appendChild(innerDiv);
        parentElement.appendChild(element); 
        Search.render(innerDiv);
    }
}
export default NoData;