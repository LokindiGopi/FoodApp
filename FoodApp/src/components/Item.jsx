export default function Item({ item }) {
  return (
    <div>
      <div className="flex flex-col md:flex-row p-4 mt-8 mb-6 shadow-md shadow-slate-300 rounded-lg">
        <div className="w-full md:w-1/3 lg:w-1/4 h-auto rounded-lg overflow-hidden">
          <img
            className="w-full h-auto rounded-lg"
            src={
              `https://img.spoonacular.com/ingredients_100x100/` + item.image
            }
            alt={item.name}
          ></img>
        </div>

        <div className="mt-4 md:mt-0 md:ml-6 flex-1">
          <div className="text-lg font-bold">{item.name}</div>
          <div className="font-bold mt-2">
            {item.amount} {item.unit}
          </div>
        </div>
      </div>
    </div>
  );
}
