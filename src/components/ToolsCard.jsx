import Image from 'next/image';
import React from 'react';

const ToolsCard = ({ name, icon }) => {
  return (
    <div className="p-2 rounded-lg bg-gray-800 flex flex-col items-center justify-center gap-2">
      {typeof icon === "string" ? (
        <Image src={icon} alt={name} width={40} height={40} className="w-10 h-10" />
      ) : (
        <div className="w-10 h-10 flex items-center justify-center text-white text-3xl">
          {icon} 
        </div>
      )}
      <span>{name}</span>
    </div>
  );
};

export default ToolsCard;
