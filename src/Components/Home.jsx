import { useContext, useEffect, useState } from "react";
import { Input } from "../Context/InputContext.jsx";
import Introduction from "./Introduction.jsx";
import { motion } from "framer-motion";
import clouds from "../../public/clouds.svg";
import cloudSnow from "../../public/clouds-snow.svg";
import suncloudsRain from "../../public/sun-clouds-rain.svg";
import sunClouds from "../../public/sun-clouds.svg";
import sun from "../../public/sun.svg";
import { Weather } from "../Context/WeatherContext.jsx";
import { loading } from "../Context/loadingContext.jsx";
import { delay } from "framer-motion";
export default function Home() {
  const { inputValue } = useContext(Input);
  const { getData } = useContext(Weather);
  const [weatherData, setWeatherData] = useState(null);
  const { isLoading, setIsLoading } = useContext(loading);

  // this function is to get the weather status if its cloud or clear sky .....
  function getWeatherStatus(temperature) {
    if (temperature < 0 && temperature < 10) {
      return "Freezing";
    } else if (temperature >= 10 && temperature < 20) {
      return "Cold";
    } else if (temperature >= 20 && temperature < 30) {
      return "Cool";
    } else if (temperature >= 30) {
      return "Hot";
    }
  }
  function getWeatherIcon(temperature) {
    const iconMap = {
      Freezing: {
        name: "Freezing",
        status: cloudSnow,
      },
      Cold: {
        name: "Cold",
        status: clouds,
      },
      Cool: {
        name: "Cool",
        status: sunClouds,
      },
      Pleasant: {
        name: "Pleasant",
        status: suncloudsRain,
      },
      Hot: {
        name: "Hot",
        status: sun,
      },
    };

    const weatherResultas = getWeatherStatus(temperature);
    let icon;
    iconMap.forEach((item) => {
      if (item.name == weatherResultas) {
        return (icon = item.status);
      }
    });
    return <img src={icon} alt="no alt here" />;
  }

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
  const variants = {
    hidden: {
      opacity: 0,
      y: "40px",
    },
    visible: {
      opacity: 1,
      y: "0px",
    },
  };

  return (
    !isLoading && (
      <div className="h-[95vh]  flex justify-center items-center ">
        {inputValue == "" ? (
          <Introduction />
        ) : !weatherData ? (
          <h2>Failed to fetch weather data Try Another city</h2>
        ) : (
          weatherData && (
            <motion.div className="">
              <motion.h1
                variants={variants}
                initial="hidden"
                animate="visible"
                transition={{ delay: 0.55 }}
                className="text-3xl text-center"
              >
                The Weather in {inputValue}
              </motion.h1>
              <motion.div
                variants={variants}
                initial="hidden"
                animate="visible"
                transition={{ delay: 0.6 }}
                className="bg-white rounded-xl px-5 items-center gap-9 shadow-custom-shadow flex mx-auto w-[50%]  mt-5"
              >
                <h2 className="text-4xl flex ">
                  {weatherData.daily.temperature_2m_max[0]}
                  <sub>°C</sub>
                </h2>
                <div className="bg-[#F7F6F7] py-4 w-[80%]   my-2 px-2 rounded-lg shadow-custom-shadow">
                  <h3 className="text-3xl">
                    {getWeatherStatus(weatherData.current.temperature_2m)}
                  </h3>
                  <p className="text-sm">
                    Its Look a good
                    <span>
                      {weatherData.current.is_day == 1 ? " day" : " night"}
                    </span>{" "}
                    To do Something
                  </p>
                </div>
              </motion.div>
              <motion.div
                variants={variants}
                initial="hidden"
                animate="visible"
                transition={{ delay: 0.7 }}
                className="mt-10 bg-white flex text-center p-5 rounded-lg gap-5"
              >
                {weatherData.daily.temperature_2m_max?.map((item, index) => (
                  <motion.div
                    variants={variants}
                    initial="hidden"
                    animate="visible"
                    transition={{ delay: 0.7 + index / 10 }}
                    key={index}
                    className="bg-[#F7F6F7] py-4 px-3 shadow-custom-shadow my-2 rounded-lg"
                  >
                    <h4>{weatherData.daily.time[index]}</h4>
                    {getWeatherIcon(
                      weatherData.daily.temperature_2m_min[index]
                    )}
                    <h2>
                      {item} <sub>C</sub>
                    </h2>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          )
        )}
        <div className="absolute bottom-0 left-0 w-[200px] h-[100px] bg-[#ffb703] blur-[100px] rounded-full scale-[2]"></div>
        <div className="absolute bottom-0 right-[10%] w-[200px] h-[100px] bg-[#3D1DFF] blur-[100px] rounded-full scale-[2]"></div>
      </div>
    )
  );
}
