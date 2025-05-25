"use client";

import { useState } from "react";
import { useCepStore } from "../hooks/use-cep-finder";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { CheckCircle, Loader2 } from "lucide-react";

const CEPSearch = () => {
  const [cep, setCep] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const { address, findAddress } = useCepStore();

  const handleCepSearch = async () => {
    setError("");
    setLoading(true);
    try {
      await findAddress(cep);

      if (!useCepStore.getState().address) {
        setError("CEP inválido");
      }
    } catch (err) {
      console.error(err);
      setError("Erro ao buscar o endereço");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col gap-2">
      {error && <span className="text-sm text-red-400">{error}</span>}
      <label htmlFor="cep">Digite o seu CEP</label>
      <div className="flex gap-2">
        <Input
          placeholder="CEP"
          onChange={(e) => setCep(e.target.value)}
          value={cep}
        />

        <Button
          variant={"secondary"}
          disabled={loading}
          onClick={handleCepSearch}
        >
          {loading ? <Loader2 className="animate-spin" /> : "Procurar"}
        </Button>
      </div>

      {address && (
        <div className="border p-4 rounded-md flex flex-col gap-1 ">
          <div className="flex justify-between">
            <h3 className="font-semibold">Endereço encontrado:</h3>
            <CheckCircle className="text-green-400" />
          </div>
          <span>
            {address.logradouro} - {address.bairro}
          </span>
          <span>
            {address.localidade} - {address.uf} - {address.cep}
          </span>
        </div>
      )}
    </div>
  );
};

export default CEPSearch;
