import React from 'react'

const TabButtion = ({active,selectTab, children}) => {
const buttonClasses = active ? 'text-black border-b border-purple-500' : 'text-gray-700'
    
    return (
    <button onClick={selectTab}>
        <p className={`mr-3 font-semibold hover:text-black ${buttonClasses}`}>
            {children}
        </p>
        
    </button>
  );
}

export default TabButtion