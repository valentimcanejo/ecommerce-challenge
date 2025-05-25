import { create } from "zustand";

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

interface CepStore {
  address: Address | null;
  findAddress: (cep: string) => Promise<void>;
  clearAddress: () => void;
}

export const useCepStore = create<CepStore>((set) => ({
  address: null,

  findAddress: async (cep: string) => {
    const sanitizedCep = cep.replace(/\D/g, "");
    if (sanitizedCep.length !== 8) {
      set({ address: null });
      return;
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
        set({ address: null });
        return;
      }

      set({ address: data as Address });
    } catch (error) {
      console.error("Erro ao buscar o endereço:", error);
      set({ address: null });
    }
  },

  clearAddress: () => set({ address: null }),
}));
