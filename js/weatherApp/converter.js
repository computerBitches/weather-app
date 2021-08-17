class Converter {
    static ctoF(c) { 
      return  (c * 9) / 5 + 32;
    }

    static mpsToMph(mps) {
       return (mps * 2.236936).toFixed(2);
    }
    
    static kmToM(km) {
      return  (km / 1.609).toFixed(1);
    }
    
    static timeToAMPM(time){
      let hours = time.split(":")[0];
      let minutes = time.split(":")[1];
      hours = hours % 12;
      hours = hours ? hours : 12;
      return hours + ":" + minutes;
    };
    
    static degToCompass(num) {
      var val = Math.floor(num / 22.5 + 0.5);
      var arr = [
        "N",
        "NNE",
        "NE",
        "ENE",
        "E",
        "ESE",
        "SE",
        "S/SE",
        "S",
        "SSW",
        "SW",
        "WSW",
        "W",
        "WNW",
        "NW",
        "NNW",
      ];
      return arr[val % 16];
    };
    
    static convertTime(unixSeconds, timezone) {
      const time = new Date((unixSeconds + timezone) * 1000)
        .toISOString()
        .match(/(\d{2}:\d{2})/);
    
      return time;
    };  
}
export default Converter;