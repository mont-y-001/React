import { useQuery } from "@tanstack/react-query";

const fetchCountries = async () => {
  const res = await fetch(
    "https://openholidaysapi.org/Countries?accept=text/json"
  );
  const data = await res.json();
  return data.countries; // correct array
};

export default function CountrySelector({ selectedCountry, onChange }) {
  const { data: countries = [], isLoading } = useQuery({
    queryKey: ["countries"],
    queryFn: fetchCountries,
  });

  if (isLoading) return <p>Loading countries...</p>;
  if (!countries.length) return <p>No country data found.</p>;

  return (
    <select
      value={selectedCountry}
      onChange={(e) => onChange(e.target.value)}
      className="border p-2 rounded mb-8 w-full"
    >
      {countries.map((c) => (
        <option key={c.countryIsoCode} value={c.countryIsoCode}>
          {c.name}
        </option>
      ))}
    </select>
  );
}
