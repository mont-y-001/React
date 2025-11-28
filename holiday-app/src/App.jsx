import { useState } from "react";
import Dropdown from "./components/Dropdown.jsx";
import HolidaysList from "./components/HolidaysList.jsx";

export default function App() {
  const [selectedCountry, setSelectedCountry] = useState("NL"); // default Netherlands

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-8">Public Holidays This Year</h1>

      <Dropdown selected={selectedCountry} setSelected={setSelectedCountry} />

      <HolidaysList country={selectedCountry} />
    </div>
  );
}
