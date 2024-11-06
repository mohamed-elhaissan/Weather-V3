import { useState } from "react";
import { MdDarkMode } from "react-icons/md";
export default function Header() {
  const [inputValue,setInputValue] = useState()
  console.log(inputValue);
  
  return (
    <div className="flex justify-between items-center px-4 py-2 ">
      <h1 className="text-2xl font-bold tracking-tighter">Aurora</h1>
      <select className="w-[30%] rounded-lg shadow-custom-shadow px-3 outline-[#B8B8BF] py-2 cursor-pointer" onChange={(e)=>{setInputValue(e.target.value)}}>
        <option value="agadir">agadir</option>
        <option value="casse">casa</option>
        <option value="aca">az</option>
      </select>
      <div>
        <MdDarkMode className="text-2xl cursor-pointer" />
      </div>
    </div>
  );
}
