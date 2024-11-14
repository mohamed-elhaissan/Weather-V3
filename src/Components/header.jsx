import { useContext, useState } from "react";
import { Input } from "../Context/InputContext.jsx";
import { MdDarkMode } from "react-icons/md";
import { motion } from "framer-motion";
export default function Header() {
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

  return (
    <div className="flex justify-between items-center px-4 py-2 ">
     
      <h1 className="text-2xl font-bold tracking-tighter">Aurora</h1>
      <motion.select
        className="w-[30%] rounded-lg shadow-custom-shadow px-3 outline-[#  r] py-2 cursor-pointer"
        onChange={(e) => {
          setInputValue(e.target.value);
        }}
      >
        <option value="null" disabled selected>
          Select a City
        </option>
        {popularCities.map((item,key)=>(
          <option key={key} value={item}>{item}</option>
        ))}
      </motion.select>
      <motion.div 
      whileTap={{scale:0.9}}
      >
        <MdDarkMode  className="text-2xl cursor-pointer scale-[1.5] relative before:content-[''] before:w-full before:posit"   />
      </motion.div>
    </div>
  );
}
