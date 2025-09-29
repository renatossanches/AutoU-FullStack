import React, { useState, useEffect } from "react";

export default function HeaderTop() {
const [darkMode, setDarkMode] = useState(false);
const [open, setOpen] = useState(false);
  
useEffect(() => {
        document.documentElement.classList.toggle("dark", darkMode);
    }, [darkMode]);

const toggleDarkMode = () => setDarkMode(!darkMode);

  return (
    <header className="fixed top-0 left-60 right-0 h-12 flex items-center justify-end px-4 z-50">
      {/* Botão tema */}
      <button
        onClick={toggleDarkMode}
        className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition"
      >
        {darkMode ? "☀️" : "🌙"}
      </button>

      {/* Dropdown perfil */}
      <div className="relative ml-4">
        <button
          onClick={() => setOpen(!open)}
          className="flex items-center focus:outline-none"
        >
          <img
            src={null}
            alt="Usuário"
            className="w-9 h-9 rounded-full border"
          />
        </button>

        {/* Conteúdo do dropdown */}
        {open && (
          <div className="absolute right-0 mt-2 w-40 bg-orange-500 dark:bg-black rounded-lg shadow-lg dark:border-gray-200">
            <ul className="py-2 text-sm text-white dark:text-gray-200">
              <li>
                <a
                  href="/perfil"
                  className="block px-4 py-2 hover:bg-orange-600 dark:hover:bg-gray-900"
                >
                  Perfil
                </a>
              </li>
              <li>
                <a
                  href="/login"
                  className="block px-4 py-2 hover:bg-orange-600 dark:hover:bg-gray-900"
                >
                  Sair
                </a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </header>
  );
}
