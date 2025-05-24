"use client";
import { useState } from "react";
import useCepFinder, { Address } from "../hooks/use-cep-finder";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Check, CheckCircle, Loader2 } from "lucide-react";

const CEPSearch = () => {
  const [cep, setCep] = useState("");
  const [loading, setLoading] = useState(false);
  const [address, setAddress] = useState<Address | null>(null);
  const [error, setError] = useState("");

  const { findAddress } = useCepFinder();

  const handleCepSearch = async () => {
    try {
      setLoading(true);
      const address = await findAddress(cep);

      if (!address) {
        setError("CEP inválido");
        setAddress(null);
        return;
      }

      setError("");
      setAddress(address);
    } catch (error) {
      setError("Erro ao buscar o endereço");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col gap-2">
      {error && <span className="text-sm text-red-400">{error}</span>}
      {address && (
        <div className="border p-4 rounded-md flex flex-col gap-1 bg-slate-50">
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
      <Input
        placeholder="CEP"
        onChange={(e) => setCep(e.target.value)}
        value={cep}
      />

      <Button fullWidth disabled={loading} onClick={handleCepSearch}>
        {loading ? <Loader2 className="animate-spin" /> : "Calcular frete"}
      </Button>
    </div>
  );
};

export default CEPSearch;
