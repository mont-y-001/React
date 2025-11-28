import { useQuery } from "@tanstack/react-query";

const fetchHolidays = async (countryCode) => {
  const year = new Date().getFullYear();
  const res = await fetch(
    `https://date.nager.at/api/v3/PublicHolidays/${year}/${countryCode}`
  );
  return res.json();
};

export default function HolidaysList({ country }) {
  const { data: holidays = [], isLoading } = useQuery({
    queryKey: ["holidays", country],
    queryFn: () => fetchHolidays(country),
    enabled: !!country,
  });

  if (isLoading) return <p>Loading holidays...</p>;
  if (!holidays.length) return <p>No holidays found.</p>;

  return (
    <ul className="space-y-4">
      {holidays.map((holiday) => (
        <li key={holiday.date} className="p-4 border rounded shadow-sm bg-white">
          <h2 className="text-xl font-semibold">{holiday.localName}</h2>
          <p className="text-gray-600">{holiday.date}</p>
        </li>
      ))}
    </ul>
  );
}
