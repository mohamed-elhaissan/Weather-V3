import { useContext, useEffect, useState } from "react";
import { Input } from "../Context/InputContext.jsx";
import Introduction from "./Introduction.jsx";
import { motion } from "framer-motion";
import clouds from "../../public/clouds.svg";
import { Weather } from "../Context/WeatherContext.jsx";
import { loading } from "../Context/loadingContext.jsx";
export default function Home() {
  const { inputValue } = useContext(Input);
  const { getData } = useContext(Weather);
  const [weatherData, setWeatherData] = useState(null);
  const { isLoading, setIsLoading } = useContext(loading);
  useEffect(() => {
    if (inputValue !== "") {
      // fetch longitude and latitude openweather APi :)
      async function getLocation() {
        const response = await fetch(
          `http://api.openweathermap.org/geo/1.0/direct?q=${inputValue}&limit=5&appid=${
            import.meta.env.VITE_API_KEY
          }`
        );
        const res = await response.json();
        return [res[0].lon, res[0].lat];
      }
      async function getWetherData() {
        setIsLoading(true);
        const [longitude, latitude] = await getLocation();
        const weatherResponse = await getData(longitude, latitude);
        setWeatherData(weatherResponse);
        console.log(weatherData);
        setIsLoading(false);
      }
      getWetherData();
      console.log(weatherData);
    }
  }, [inputValue]);
  return (
    !isLoading && (
      <div className="h-[95vh]  flex justify-center items-center">
        {inputValue == "" ? (
          <Introduction />
        ) : !weatherData ? (
          <h2>Failed to fetch weather data Try Another city</h2>
        ) : (
          weatherData && (
            <motion.div>
              <motion.h1
                initial={{ y: "40px", opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="text-3xl text-center"
              >
                The Weather in {inputValue}
              </motion.h1>
              <div className="bg-white rounded-xl px-5 items-center gap-9 shadow-custom-shadow flex  mt-5">
                <h2 className="text-4xl flex ">
                  {weatherData.daily.temperature_2m_max[0]}
                  <sub>°C</sub>
                </h2>
                <div className="bg-[#F7F6F7] py-4 w-[80%]   my-2 px-2 rounded-lg shadow-custom-shadow">
                  <h3 className="text-3xl"></h3>
                  <p className="text-sm">
                    Its Look a good{" "}
                    <span>
                      {weatherData.current.is_day == 1 ? "day" : "night"}
                    </span>{" "}
                    To do Something
                  </p>
                </div>
              </div>
              <div className="mt-10 bg-white flex text-center p-5 rounded-lg gap-5">
                {weatherData.daily.temperature_2m_max?.map((item, index) => (
                  <div
                    key={index}
                    className="bg-[#F7F6F7] py-4 px-3 shadow-custom-shadow my-2 rounded-lg"
                  >
                    <h4>{weatherData.daily.time[index]}</h4>
                    <img src={clouds} alt="" />
                    <h2>
                      {item} <sub>C</sub>
                    </h2>
                  </div>
                ))}
              </div>
            </motion.div>
          )
        )}
        <div className="absolute bottom-0 left-0 w-[200px] h-[100px] bg-[#ffb703] blur-[100px] rounded-full scale-[2]"></div>
        <div className="absolute bottom-0 right-[10%] w-[200px] h-[100px] bg-[#3D1DFF] blur-[100px] rounded-full scale-[2]"></div>
      </div>
    )
  );
}
