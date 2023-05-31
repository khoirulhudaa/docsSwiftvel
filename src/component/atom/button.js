import React from 'react'

const Button = ({
    type,
    text,
    onClick,
    style,
    bgColor="bg-indigo-500",
    width="w-max",
    height="h-max",
    padding="px-3 py-1",
    textColor="white"
}) => {
    switch(type) {
        case "outline": 
        return (
            <div className={`border-[1px] border-solid text-white rounded-md border-white active:scale-[0.97] hover:bg-indigo-500 hover:text-white cursor-pointer text-center ${height} ${width} ${padding} shadow-md ${style}`}>
                {text}
            </div>
        )
        default: 
        return (
            <div className={`${bgColor} text-center rounded-md text-${textColor} hover:bg-indigo-400 active:scale-[0.97] hover:text-white ${height} ${width} ${padding} cursor-pointer shadow-md ${style}`}>
                {text}
            </div>
        )
    }
}

export default Button
