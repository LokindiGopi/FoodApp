export default function FoodItem({ food, setFoodId }) {
  return (
    <div className=" shadow-lg shadow-slate-300 rounded w-[350px]  overflow-hidden m-[20px] font-serif">
      <img src={food.image} className="w-full h-auto"></img>
      <div className="font-serif text-center m-3">
        <p className="text-base font-semibold text-slate-600">{food.title}</p>
      </div>
      <div className="mb-[20px] flex justify-around text-center">
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
