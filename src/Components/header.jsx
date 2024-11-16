import { useContext, useEffect, useState } from "react";
import { Input } from "../Context/InputContext.jsx";
import { MdDarkMode } from "react-icons/md";
import { motion } from "framer-motion";
import circleImg from "../../public/circle.svg";
import { darkModeContext } from "../Context/darkmodeContext.jsx";
export default function Header() {
  const { isDarkMode, setIsDarkMode } = useContext(darkModeContext);
  const { setInputValue } = useContext(Input);
  const popularCities = [
    "Marrakech",
    "Casablanca",
    "Fez",
    "Rabat",
    "Tangier",
    "Agadir",
    "Meknes",
    "Essaouira",
    "Ouarzazate",
    "Chefchaouen",
    "M'diq",
    "Ifrane",
    "Merzouga",

    // Popular cities worldwide
    "New York",
    "London",
    "Paris",
    "Tokyo",
    "Dubai",
    "Sydney",
    "Los Angeles",
    "Chicago",
    "Toronto",
    "Hong Kong",
    "Singapore",
    "Seoul",
    "Mumbai",
    "Delhi",
    "Shanghai",
    "Beijing",
    "Rome",
    "Madrid",
    "Berlin",
    "Istanbul",
    "Moscow",
    "Cairo",
    "Sao Paulo",
    "Buenos Aires",
    "Mexico City",
  ];
  useEffect(() => {
    document.body.classList.toggle('dark',isDarkMode)
  }, [isDarkMode]);

  return (
    <div className="flex justify-between items-center px-4 py-2 ">
      <h1 className="text-2xl font-bold tracking-tighter dark:text-white text-black">
        Aurora
      </h1>
      <motion.select
        className="w-[30%] rounded-lg shadow-custom-shadow px-3 outline-none dark:bg-[#161616] dark:text-white py-2 cursor-pointer"
        onChange={(e) => {
          setInputValue(e.target.value);
        }}
      >
        <option value="null" disabled selected>
          Select a City
        </option>
        {popularCities.map((item, key) => (
          <option key={key} value={item}>
            {item}
          </option>
        ))}
      </motion.select>
      <motion.div
        whileTap={{ scale: 0.9 }}
        onClick={() => {
          setIsDarkMode(!isDarkMode);
        }}
      >
        <MdDarkMode className="text-2xl dark:text-white text-black cursor-pointer scale-[1.5]  " />
        <motion.img
          initial={{
            scale: 0,
          }}
          animate={isDarkMode ? { scale: 100 } : { scale: 0 }}
          transition={{
            type: 'spring',
            stiffness: 100,
            damping: 10,
            delay: 0.3,
          }}
          src={circleImg}
          alt=""
          className="fixed right-0 top-0 -z-20"
        />
      </motion.div>
    </div>
  );
}
