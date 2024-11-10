import { useContext, useEffect, useState } from "react";
import { Input } from "../Context/InputContext.jsx";
import Introduction from "./Introduction.jsx";
import { motion } from "framer-motion";
import clouds from "../../public/clouds.svg";
import { Weather } from "../Context/WeatherContext.jsx";
export default function Home() {
  const { inputValue } = useContext(Input);
  const { getData } = useContext(Weather);
  const [ItemLocation, setItemLocation] = useState([]);
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
        console.log(res[0].lon);
        return [res[0].lon, res[0].lat];
      }
      getLocation().then((data) => {
        const [longitude, latitude] = data;
        getData(longitude,latitude);
        
      });
      
      
    }
  }, [inputValue]);
  return (
    <div className="h-[95vh]  flex justify-center items-center">
      {inputValue == "" ? (
        <Introduction />
      ) : (
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
            <h2 className="text-4xl">
              22 <sub>C</sub>
            </h2>
            <div className="bg-[#F7F6F7] py-4 w-[80%]   my-2 px-2 rounded-lg shadow-custom-shadow">
              <h3 className="text-3xl">Cloudy</h3>
              <p className="text-sm">Its Look a good weather To do Something</p>
            </div>
          </div>
          <div className="mt-10 bg-white flex text-center p-5 rounded-lg gap-5">
            <div className="bg-[#F7F6F7] py-4 px-3 shadow-custom-shadow my-2 rounded-lg">
              <h4>NOW</h4>
              <img src={clouds} alt="" />
              <h2>
                22 <sub>C</sub>
              </h2>
            </div>
            <div className="bg-[#F7F6F7] py-4 px-3 shadow-custom-shadow my-2 rounded-lg">
              <h4>NOW</h4>
              <img src={clouds} alt="" />
              <h2>
                22 <sub>C</sub>
              </h2>
            </div>
            <div className="bg-[#F7F6F7] py-4 px-3 shadow-custom-shadow my-2 rounded-lg">
              <h4>NOW</h4>
              <img src={clouds} alt="" />
              <h2>
                22 <sub>C</sub>
              </h2>
            </div>
            <div className="bg-[#F7F6F7] py-4 px-3 shadow-custom-shadow my-2 rounded-lg">
              <h4>NOW</h4>
              <img src={clouds} alt="" />
              <h2>
                22 <sub>C</sub>
              </h2>
            </div>
            <div className="bg-[#F7F6F7] py-4 px-3 shadow-custom-shadow my-2 rounded-lg">
              <h4>NOW</h4>
              <img src={clouds} alt="" />
              <h2>
                22 <sub>C</sub>
              </h2>
            </div>
            <div className="bg-[#F7F6F7] py-4 px-3 shadow-custom-shadow my-2 rounded-lg">
              <h4>NOW</h4>
              <img src={clouds} alt="" />
              <h2>
                22 <sub>C</sub>
              </h2>
            </div>
          </div>
        </motion.div>
      )}
      <div className="absolute bottom-0 left-0 w-[200px] h-[100px] bg-[#ffb703] blur-[100px] rounded-full scale-[2]"></div>
      <div className="absolute bottom-0 right-[10%] w-[200px] h-[100px] bg-[#3D1DFF] blur-[100px] rounded-full scale-[2]"></div>
    </div>
  );
}
