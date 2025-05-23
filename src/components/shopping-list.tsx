import Image from "next/image";

const ShoppingList = () => {
  return (
    <aside className="w-32 right-0 bg-primary  p-4 z-20 text-white flex flex-col gap-4 left-0 fixed h-full">
      <h1 className="text-xl">Lista de produtos</h1>
      <div className="flex gap-2 items-center w-full justify-between">
        <div className="flex items-center gap-2">
          <span>Camiseta Lisa da Montink</span>
        </div>
      </div>
    </aside>
  );
};

export default ShoppingList;
