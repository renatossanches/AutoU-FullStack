import React, { useState } from "react";
import "./SenderEmail.css";
import { ReactComponent as SvgMailSend } from "../../issues/svgSend.svg";

const SenderEmail = () => {
  const [to, setTo] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [file, setFile] = useState(null);

  const handleSend = (e) => {
    e.preventDefault();
    console.log({ to, subject, message, file });
    alert("Email enviado!");
  };

  return (
    <div className="flex items-center justify-center">
    <div className="p-8 bg-white dark:bg-black border rounded-lg shadow w-full max-w-3xl">
      <h2 className="text-4xl font-bold mb-4 text-gray-800 dark:text-white">Enviar Email</h2>
      
      <form onSubmit={handleSend} className="space-y-4">
        {/* Destinatário */}
        <div>
          <label className="block text-gray-700 dark:text-gray-200 mb-1">Para:</label>
          <input
            type="email"
            value={to}
            onChange={(e) => setTo(e.target.value)}
            placeholder="destinatario@exemplo.com"
            className="w-full border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-orange-400 dark:focus:ring-gray-200"
            required
          />
        </div>

        {/* Assunto */}
        <div>
          <label className="block text-gray-700 dark:text-gray-200 mb-1">Assunto:</label>
          <input
            type="text"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            placeholder="Assunto do email"
            className="w-full border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
            required
          />
        </div>

        {/* Mensagem */}
        <div>
          <label className="block text-gray-700 dark:text-gray-200 mb-1">Mensagem:</label>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Escreva sua mensagem aqui..."
            className=" w-full border rounded-lg p-2 h-52 resize-none focus:outline-none focus:ring-2 focus:ring-orange-400"
            required
          />
        </div>

        {/* Upload de arquivo */}
        <div>
          <label className="block text-gray-700 dark:text-white mb-1">Arquivo:</label>
          <input
            type="file"
            onChange={(e) => setFile(e.target.files[0])}
            className="w-full"
            accept=".txt, .pdf"
          />
          {file && <p className="mt-1 text-sm text-gray-600 dark:text-gray-200">{file.name}</p>}
        </div>

        {/* Botão enviar */}
        {
          // Group estiliza o efeito para todo o grupo de elementos
        }
        <button
        type="submit"
        className="send-button flex items-center gap-2 bg-orange-400 dark:bg-white hover:bg-orange-600 text-white rounded-lg px-4 py-2 shadow"
        >
        <span className="text-white dark:text-black">Enviar</span>
        <SvgMailSend className="w-5 h-5 text-black dark:text-black"/>
        </button>

      </form>
    </div>
    </div>
  );
};

export default SenderEmail;
