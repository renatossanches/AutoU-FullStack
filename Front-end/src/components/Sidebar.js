import React, { useState } from "react";
import { ReactComponent as SvgMail } from "../issues/svgMail.svg";
import { ReactComponent as SvgSend } from "../issues/svgSend.svg";

export default function Sidebar() {

    const [selected, setSelected] = useState("📥 Caixa de entrada");


    const menuItems = [
    { icon: <SvgMail />, label: "Caixa de entrada" },
    { icon: "📌", label: "Marcações" },
    { icon: "📤", label: "Enviados" },
    { icon: "🗑", label: "Lixeira" },
    { icon: "⚙️", label: "Configurações" },
  ];
  return (
    <div className="w-60 bg-gray-100 border-r p-4">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-bold flex items-center gap-2">
          <img src="mail.png" alt="Logo" className="w-8 h-6 inline" /> AutoU
        </h2>

        <button className="p-2 bg-orange-400 hover:bg-orange-600 text-white rounded-lg shadow">
        <SvgSend className="w-6 h-6"/>
        </button>
      </div>

  <ul className="space-y-2">
     {menuItems.map((item) => (
      <li key={item.label}>
        <button 
          onClick={() => setSelected(item.label)}
          className={`
            w-full text-left px-3 py-2 rounded-lg transition
            ${
              selected === item.label
              ? "bg-orange-300 text-white font-semibold" 
              : "hover:bg-gray-200 hover:text-white-900"
            }
          `}
        >
          <span className="inline-flex
           px-3 py-2 items-center">{item.icon}</span>
          {item.label}
        </button>
      </li>
    ))}
  </ul>
</div>

  );
}
