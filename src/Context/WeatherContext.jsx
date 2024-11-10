import { createContext } from "react";

export const Weather = createContext();
async function getData(long,alt){
    const response = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${alt}&longitude=${long}&current=temperature_2m,is_day,rain,cloud_cover,wind_speed_10m&daily=temperature_2m_max,temperature_2m_min,rain_sum&timezone=auto`)
    const data = await response.json()
    return data
  }

export default function WeatherProvider({ children }) {
  return <Weather.Provider value={{getData}}>{children}</Weather.Provider>;
}
