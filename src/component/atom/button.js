import React from 'react'

const Button = ({
    type,
    text,
    onClick,
    style,
    bgColor="bg-[#00ED64]",
    width="w-max",
    height="h-max",
    padding="px-3 py-1",
    textColor="text-[#00ED64]"
}) => {
    switch(type) {
        case "outline": 
        return (    
            <div onClick={onClick} className={`border-[1px] font-bold border-mongo ${textColor} rounded-md active:scale-[0.97] hvover:text-white hover:bg-hoverMongo hover:text-white cursor-pointer text-center ${height} ${width} ${padding} shadow-md ${style}`}>
                {text}
            </div>
        )
        default: 
        return (
            <div onClick={onClick} className={`${bgColor} text-center font-bold rounded-md ${textColor} hover:bg-hoverMongo hover:text-white active:scale-[0.97] hover:text-white ${height} ${width} ${padding} cursor-pointer shadow-md ${style}`}>
                {text}
            </div>
        )
    }
}

export default Button
