import DomUtil  from "./domUtil.js";
class Loading {
    element;
    static remove(parentElement) {
       parentElement.innerHTML = null;
    }
    static render(parentElement) {
        this.element = document.createElement('div', { class:'errScr'});
        const heading = DomUtil.createElement('h1');
        heading.innerHTML = 'Loading data...';
        this.element.appendChild(heading);
        parentElement.appendChild(this.element);
    }
}
export default Loading;