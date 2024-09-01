export default function Item({ item }) {
  return (
    <div>
      <div className="flex p-[10px] mt-[50px] mb-[40px] shadow shadow-slate-300 rounded">
        <div className="h-full rounded-[10px]">
          <img
            className="max-w-full h-auto rounded-[10px]"
            src={
              `https://img.spoonacular.com/ingredients_100x100/` + item.image
            }
            alt={item.name}
          ></img>
        </div>

        <div className="ml-[50px]">
          <div className="text-lg font-bold">{item.name}</div>
          <div className="font-bold mt-[10px]">
            {item.amount} {item.unit}
          </div>
        </div>
      </div>
    </div>
  );
}
