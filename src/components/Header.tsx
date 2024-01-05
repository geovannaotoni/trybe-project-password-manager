import React from 'react';
import { FaAsterisk } from 'react-icons/fa';

export default function Header() {
  return (
    <header>
      <h1 className="font-roboto text-6xl font-extrabold py-10 flex items-center gap-5">
        Gerenciador
        <span className="text-blue-500 text-4xl">
          <FaAsterisk />
        </span>
        de
        <span className="text-blue-500 text-4xl">
          <FaAsterisk />
        </span>
        senhas
      </h1>
    </header>
  );
}
