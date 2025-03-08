import Image from 'next/image';
import React from 'react';

const ToolsCard = ({ name, icon }) => {
  return (
    <div className="p-2 rounded-lg bg-gray-800 flex flex-col items-center justify-center gap-2">
      <Image src={icon} alt={name} width={40} height={40} className="w-10 h-10" />
      <span>{name}</span>
    </div>
  );
};

export default ToolsCard;