import DomUtil from './domUtil.js';
import API from './api.js';
import WeatherApp from './weatherApp.js';
import constants from './constants.js';
import Loading from './loading.js';
class Search {
    element;
    static handleSearchInput(event) {
        if(event.key === 'Enter') {
            const inputValue = event.target.value.trim();
            if(inputValue) {
                    API.getWeatherData(inputValue).then( data => {
                    this.element.value='';
                    Loading.render(this.parentElement);
                    WeatherApp.render(data, constants.DEFAULT_UNIT);   
                });
            }
            else {
                this.element.style.background = 'red';;
                console.log('Please enter city name.')
            }
        }
        else {
            this.element.style.background = '#FFFFFF'; //this.style.background = ''
        }
    }

    static render(parentElement) {
        this.parentElement = parentElement;
        this.element = DomUtil.createElement('input', { class:'searchInput', placeholder: 'Search a city.. '}
        );
        this.element.addEventListener('keypress', this.handleSearchInput.bind(this))//if we are not binding this.handleSearchInput
        parentElement.appendChild(this.element);
    }  
}
export default Search;