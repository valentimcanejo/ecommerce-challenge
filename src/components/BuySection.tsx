import { Button } from "./button";
import { Input } from "./ui/input";

const BuySection = () => {
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
        <Input placeholder="CEP" />
        <Button fullWidth>Calcular frete</Button>
      </div>
    </div>
  );
};

export default BuySection;
