import { useEffect, useState } from "react";
import ItemList from "./ItemList";

export default function FoodDetails({ foodId }) {
  const [food, setFood] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const URI = `https://api.spoonacular.com/recipes/${foodId}/information`;
  const api_Key = "aec748fe61ac4a44a7d7eda29d6ae8f9";
  useEffect(() => {
    async function fetchfood() {
      const res = await fetch(`${URI}?apiKey=${api_Key}`);
      const data = await res.json();
      console.log(data);
      setFood(data);
      setIsLoading(false);
    }
    fetchfood();
  }, [foodId]);
  console.log(food);

  return (
    <div >
      <div className="max-w-[600px] w-full shadow-lg shadow-slate-300 rounded-lg m-2 p-6 font-serif text-base sm:text-lg">
        <strong className="text-2xl mb-2 block">{food.title}</strong>
        <img
          className="max-w-full h-auto rounded mb-2.5"
          src={food.image}
        ></img>
        <div className="mb-4 flex flex-wrap justify-between items-center gap-2">
          <span>
            <strong>⏱️{food.readyInMinutes} Minutes</strong>
          </span>
          <span>
            <strong>👩‍👧‍👦 Serves {food.servings}</strong>
          </span>
          <span>
            <strong>
              {food.vegetarian ? "🥕 vegetarian" : "🍗 Non-vegetarian"}
            </strong>
          </span>
          <span>
            <strong>{food.vegan ? "🐄 vegan" : ""}</strong>
          </span>
        </div>
        <div className="mb-4">
          <span>
            <strong>$ {food.pricePerServing / 100} Per Serving</strong>
          </span>
        </div>
        <div>
          <br></br>
          <strong className="block mb-2">Ingredients</strong>
          <ItemList food={food} isLoading={isLoading}></ItemList>

          <strong className="block mt-4 mb-2">Instructions</strong>
          <hr className="mb-2"></hr>
          <div className="p-0 rounded text-gray-700">
            <ul className="ml-0 list-disc pl-6">
              {isLoading ? (
                <p>Loading....</p>
              ) : (
                food.analyzedInstructions[0].steps.map((step) => (
                  <li key={step.id} className="my-2">
                    {step.step}
                  </li>
                ))
              )}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
