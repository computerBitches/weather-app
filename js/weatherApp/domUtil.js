class DomUtil {
    static createElement = (nodeName, attrs) => {
        const  el = document.createElement(nodeName);
          for (let key in attrs) {
            el.setAttribute(key, attrs[key])
          }
        return el;
      }
}

export default DomUtil;