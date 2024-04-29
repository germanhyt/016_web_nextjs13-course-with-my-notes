import React from "react";
import Link from "next/link";

const NotFound = () => {
  return (
    <div>
      <h1>404</h1>
      <p>Page No Encontrado</p>
      <Link rel="stylesheet" href="/">
        Volver
      </Link>
    </div>
  );
};

export default NotFound;
