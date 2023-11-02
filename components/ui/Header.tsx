import React from "react";

type Props = {
    title:string
}

export default function Header({title}:Props) {
  return (
    <div className="py-8 bg-gray-200 text-center">
      <h1 className="text-3xl font-bold">{title}</h1>
    </div>
  );
}
