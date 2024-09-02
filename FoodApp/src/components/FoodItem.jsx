export default function FoodItem({ food, setFoodId }) {
  return (
    <div className="ml-4 sm:ml-8 md:ml-12 lg:ml-[120px] shadow-lg shadow-slate-300 rounded w-full sm:w-[350px] m-4 sm:m-6 font-serif">
      <img src={food.image} className="w-full h-auto"></img>
      <div className="font-serif text-center m-3">
        <p className="ttext-base font-semibold text-slate-600">{food.title}</p>
      </div>
      <div className="mb-4 pb-4 flex justify-center">
        <button
          onClick={() => {
            console.log(food.id);
            setFoodId(food.id);
          }}
          className="bg-emerald-500 text-cyan-50 p-2  font-semibold text-sm cursor-pointer rounded"
        >
          View Receipe
        </button>
      </div>
    </div>
  );
}
