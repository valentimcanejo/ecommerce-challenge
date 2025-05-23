import { Product } from "../database/products-list";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

interface BuySectionProps {
  product: Product;
}

const BuySection = ({ product }: BuySectionProps) => {
  return (
    <div className="flex w-full flex-col justify-between border gap-8 p-4">
      <div className="flex flex-col gap-4">
        <h1 className="text-lg">R$ 99,90</h1>
        <div className="flex flex-col">
          <h2>Chegará em 5 dias no endereço:</h2>
          <h3>Rua da Montink, 123</h3>
        </div>

        <Button>Adicionar ao Carrinho</Button>
      </div>
      <div className="flex flex-col gap-2">
        <span>Escolha a cor:</span>
        <div className="flex gap-2">
          {product.colorList?.map(({ id, color }) => (
            <button
              key={id}
              className={`w-8 h-8 rounded-md ${color} hover:border-2`}
            />
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <span>Escolha o tamanho:</span>
        <div className="flex gap-2">
          {product.sizeList?.map(({ id, size }) => (
            <Button key={id}>{size}</Button>
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <Input placeholder="CEP" />
        <Button fullWidth>Calcular frete</Button>
      </div>
    </div>
  );
};

export default BuySection;
