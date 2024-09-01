import { useEffect, useState } from "react";

const URI = "https://api.spoonacular.com/recipes/complexSearch";
const api_Key = "aec748fe61ac4a44a7d7eda29d6ae8f9";

export default function Search({ foodData, setFoodData }) {
  const [query, setQuery] = useState("pizza");

  useEffect(() => {
    async function fetchfood() {
      try {
        const food = await fetch(`${URI}?query=${query}&apiKey=${api_Key}`);
        if (!food.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await food.json();
        if (Array.isArray(data.results)) {
          setFoodData(data.results);
        } else {
          console.error("Fetched data is not an array:", data);
          setFoodData([]);
        }
      } catch (error) {
        console.error("Fetch error:", error);
        setFoodData([]);
      }
    }

    fetchfood();
  }, [query]);

  return (
    <div className="my-[20px] mx-auto w-[300px] relative   shadow-lg shadow-slate-500 ">
      <input className="pl-[10px] m-2 outline-none font-serif text-gray-600 text-2xl"
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      ></input>
    </div>
  );
}
