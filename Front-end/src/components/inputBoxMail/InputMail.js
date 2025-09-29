import React from "react";
import { ReactComponent as SvgMail } from "../../issues/svgMail.svg";
import { useState } from "react";

// Mock de emails importantes vindos do backend
const mockEmails = [
  {
    id: 1,
    remetente: "suporte@empresa.com",
    assunto: "Problema resolvido ✔",
    preview: "Olá, verificamos seu chamado e o problema foi resolvido...",
    data: "29/09/2025",
    importante: true,
  },
  {
    id: 2,
    remetente: "financeiro@banco.com",
    assunto: "Pagamento confirmado",
    preview: "Seu pagamento da fatura foi processado com sucesso...",
    data: "28/09/2025",
    importante: true,
  },
  {
    id: 3,
    remetente: "time@autou.com",
    assunto: "Novas atualizações na plataforma",
    preview: "Adicionamos novas funcionalidades baseadas no seu feedback...",
    data: "27/09/2025",
    importante: false,
  },
];

export default function InputMail() {
    const [searchInput, setSearchInput] = useState(""); 
    const [search, setSearch] = useState("");
    console.log(search);

    const handleKeyDown = (e) => {
        if (e.key === "Enter") {
          setSearch(searchInput.toLowerCase());
        }
      };

  return (
    <div className="flex-1 flex flex-col bg-white dark:bg-black p-6 overflow-y-auto">
      <h2 className="text-xl font-bold mb-4 text-black dark:text-white flex justify-center">
        <SvgMail className="w-5 mr-2 text-black dark:text-white"/> Caixa de Entrada - Importantes
      </h2>
      {
        // Campo de busca para pesquisar o email especifico
      }
      <input 
      type="text" 
      onChange={(e) => setSearchInput(e.target.value)} 
      placeholder="Pesquisar..." 
      className="border p-3 rounded mb-10" 
      onKeyDown={handleKeyDown}
      />

      <ul className="space-y-3">
        {mockEmails.filter
        ((item) => {
        return search.toLowerCase() === '' 
        ? item
        : item.assunto.toLowerCase().includes(search) || item.remetente.toLowerCase().includes(search) || item.preview.toLowerCase().includes(search);
        })
        
        .map((email) => (
          <li
            key={email.id}
            className="p-4 border rounded-lg shadow-sm hover:shadow-md hover:bg-gray-100 transition bg-gray-50 cursor-pointer"
          >
            <div className="flex justify-between items-center">
              <span className="font-semibold text-gray-800">{email.remetente}</span>
              <span className="text-sm text-gray-500">{email.data}</span>
            </div>
            <p className="text-md font-medium text-gray-700">{email.assunto}</p>
            <p className="text-sm text-gray-500 truncate">{email.preview}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
