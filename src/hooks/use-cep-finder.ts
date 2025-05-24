import { useCallback } from "react";

export interface Address {
  cep: string;
  logradouro: string;
  complemento: string;
  bairro: string;
  localidade: string;
  uf: string;
  ibge: string;
  gia: string;
  ddd: string;
  siafi: string;
}

const useCepFinder = () => {
  const findAddress = useCallback(
    async (cep: string): Promise<Address | null> => {
      const sanitizedCep = cep.replace(/\D/g, "");

      if (sanitizedCep.length !== 8) {
        return null;
      }

      try {
        const response = await fetch(
          `https://viacep.com.br/ws/${sanitizedCep}/json/`
        );

        if (!response.ok) {
          throw new Error(`Erro na busca do CEP: ${response.statusText}`);
        }

        const data = await response.json();

        if (data.erro) {
          return null;
        }

        return data as Address;
      } catch (error) {
        console.error("Erro ao buscar o endereço:", error);
        return null;
      }
    },
    []
  );

  return { findAddress };
};

export default useCepFinder;
