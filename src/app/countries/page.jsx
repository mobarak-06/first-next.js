"use client";
import { GET_COUNTRIES } from "@/apiClient/query/Countries";
import { useQuery } from "@apollo/client";

export default function CountriesPage() {
  const { data, loading, error } = useQuery(GET_COUNTRIES);

  if (loading) return <p>⏳ Loading...</p>;
  if (error) return <p>❌ Error: {error.message}</p>;

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold mb-4">🌍 Countries List</h1>
      <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {data.countries.map((country) => (
          <li
            key={country.code}
            className="p-4 border rounded shadow hover:shadow-lg transition"
          >
            <h2 className="text-lg font-semibold">{country.name}</h2>
            <p className="text-gray-600">Capital: {country.capital}</p>
            <p className="text-gray-500 text-sm">Code: {country.code}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
