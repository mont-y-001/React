import { useQuery } from "@tanstack/react-query";

const fetchCountries = async () => {
  const res = await fetch("https://date.nager.at/api/v3/AvailableCountries");
  return res.json(); // returns array: [{ countryCode, name }]
};

export default function Dropdown({ selected, setSelected }) {
  const { data: countries = [], isLoading } = useQuery({
    queryKey: ["countries"],
    queryFn: fetchCountries,
  });

  if (isLoading) return <p>Loading countries...</p>;
  if (!countries.length) return <p>No countries found</p>;

  return (
    <select
      value={selected}
      onChange={(e) => setSelected(e.target.value)}
      className="border p-2 rounded mb-8 w-full"
    >
      {countries.map((c) => (
        <option key={c.countryCode} value={c.countryCode}>
          {c.name}
        </option>
      ))}
    </select>
  );
}
