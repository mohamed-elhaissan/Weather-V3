import { createContext } from "react";

export const Weather = createContext();
async function getData(long,alt){
    await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${alt}&longitude=${long}&current=temperature_2m,is_day,rain,cloud_cover,wind_speed_10m&daily=temperature_2m_max,temperature_2m_min,rain_sum&timezone=auto`)
}
async function getLocation(city){
  let localAPi = '9ae43b239c3a5ea4c8d364a5e8f85e71'
    const response = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=5&appid=${localAPi}`)
    const res = await response.json();
    return res;
}
export default function WeatherProvider({ children }) {
  return <Weather.Provider value={{getData,getLocation}}>{children}</Weather.Provider>;
}
