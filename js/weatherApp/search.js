import DomUtil from './domUtil.js';
class Search {
    static render(parentElement) {
        const element = DomUtil.createElement('input', { class:'searchInput', key:'placeholder', vlaue:'Search a city'}
        );
        parentElement.appendChild(element);
    }  
}
export default Search;