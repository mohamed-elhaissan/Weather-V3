import { MdDarkMode } from "react-icons/md";
export default function Header() {
  return (
    <div className="flex justify-between px-4 py-2 ">
      <h1>Aurora</h1>
      <select>
        <option value="">TEst</option>
      </select>
      <div>
        <MdDarkMode/>
      </div>
    </div>
  );
}
