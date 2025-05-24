import Link from "next/link";
import { Product } from "../database/products-list";
import { colorMap } from "../lib/utils";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

interface BuySectionProps {
  product: Product;
  searchParams: { [key: string]: string | string[] | undefined };
}

const BuySection = ({ product, searchParams }: BuySectionProps) => {
  const currentColor = searchParams.cor || "branco";
  const currentSize = searchParams.tamanho || "M";
  console.log(currentColor);
  return (
    <div className="flex w-full flex-col justify-between border gap-8 p-4">
      <div className="flex flex-col gap-4">
        <h1 className="text-lg">
          {product.price.toLocaleString("pt-br", {
            style: "currency",
            currency: "BRL",
          })}
        </h1>
        <div className="flex flex-col">
          <h2>Chegará em 5 dias no endereço:</h2>
          <h3>Rua da Montink, 123</h3>
        </div>

        <Button>Adicionar ao Carrinho</Button>
      </div>
      <div className="flex flex-col gap-2">
        <span>Escolha a cor:</span>
        <div className="flex gap-2">
          {product.colorList?.map(({ id, hexa, color }) => (
            <Link
              href={`?cor=${color}&tamanho=${currentSize}`}
              key={id}
              className={`w-8 h-8 rounded-md ${colorMap[hexa]} ${
                currentColor === color ? "border-2 border-primary" : ""
              }`}
            />
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <span>Escolha o tamanho:</span>
        <div className="flex gap-2">
          {product.sizeList?.map(({ id, size }) => (
            <Button
              key={id}
              asChild
              variant={currentSize === size ? "outline" : "default"}
            >
              <Link
                href={`?cor=${currentColor}&tamanho=${size}`}
                className={`w-8 h-8 rounded-md`}
              >
                {size}
              </Link>
            </Button>
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
