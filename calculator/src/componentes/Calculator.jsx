import { evaluate } from "mathjs";
import React, { useState } from "react";

export default function Calculator() {
    const [input, setInput] = useState("")

    const handleClick = (value) => {
        setInput(input + value)
    }

    const buttonClassName = "justify-center items-center"

    const hoverClassName = "hover:opacity-75 transition ease-in-out duration-300 hover:text-[#CCD5AE]"

    const [result, setResult] = useState("")

    const handleCalculate = () => {
        try {
            if (!input) return
            setResult(evaluate(input).toString())
        } catch (error) {
            setResult(error)
        }
    }

    const handleClear = () => {
        setInput("")
        setResult("")
    }

    const handleDelete = () => setInput((prev) => prev.slice(0, -1))

    return (
        <div className="grid shadow-md w-[360px] h-[600px] text-2x1 font-bold">
            <div className="col-span-4 bg-[#CCD5AE] text-white min-h-[180px] grow flex flex-col justify-end items-end p-8 gap-4">
                <span className="flex w-fit justify-self-end text-xl">
                    {input}
                </span>
                <div className="flex justify-between w-full items-center text-5x1">
                    <span>=</span>
                    <span className="flex h-fit">{result}</span>
                </div>
            </div>
            <button
                className="justify-center items-center hover:opacity-75 transition ease-in-out duration-300
            hover:text[#CCD5AE] bg-[#E9EDC9] text-[#D4A373]"
                onClick={() => handleClick("+")}
            >
                +
            </button>
            <button
                className="justify-center items-center hover:opacity-75 transition ease-in-out duration-300
            hover:text[#CCD5AE] bg-[#E9EDC9] text-[#D4A373]"
                onClick={() => handleClick("-")}
            >
                -
            </button>
            <button
                className="justify-center items-center hover:opacity-75 transition ease-in-out duration-300
            hover:text[#CCD5AE] bg-[#E9EDC9] text-[#D4A373]"
                onClick={() => handleClear()}
            >
                CLEAR
            </button>

            <button
                className="justify-center items-center hover:opacity-75 transition ease-in-out duration-300
            hover:text[#CCD5AE] bg-[#E9EDC9] text-[#D4A373]"
                onClick={() => handleClick("*")}
            >
                *   
            </button>
            <button
                className="justify-center items-center hover:opacity-75 transition ease-in-out duration-300
            hover:text[#CCD5AE]"
                onClick={() => handleClick("7")}
            >
                7
            </button>
            <button
                className="justify-center items-center hover:opacity-75 transition ease-in-out duration-300
            hover:text[#CCD5AE]"
                onClick={() => handleClick("8")}
            >
                8
            </button>
            <button
                className="justify-center items-center hover:opacity-75 transition ease-in-out duration-300
            hover:text[#CCD5AE]"
                onClick={() => handleClick("9")}
            >
                9
            </button>

            <button
                className="justify-center items-center hover:opacity-75 transition ease-in-out duration-300
            hover:text[#CCD5AE] bg-[#E9EDC9] text-[#D4A373]"
                onClick={() => handleClick("/")}
            >
                /
            </button>

            <button
                className="justify-center items-center hover:opacity-75 transition ease-in-out duration-300
            hover:text[#CCD5AE]"
                onClick={() => handleClick("4")}
            >
                4
            </button>
            <button
                className="justify-center items-center hover:opacity-75 transition ease-in-out duration-300
            hover:text[#CCD5AE]"
                onClick={() => handleClick("5")}
            >
                5
            </button>
            <button
                className="justify-center items-center hover:opacity-75 transition ease-in-out duration-300
            hover:text[#CCD5AE]"
                onClick={() => handleClick("6")}
            >
                6
            </button>
            <div className={`${buttonClassName} bg-[#E9EDC9]`} />


            <button
                className="justify-center items-center hover:opacity-75 transition ease-in-out duration-300
            hover:text[#CCD5AE]"
                onClick={() => handleClick("1")}
            >
                1
            </button>
            <button
                className="justify-center items-center hover:opacity-75 transition ease-in-out duration-300
            hover:text[#CCD5AE]"
                onClick={() => handleClick("2")}
            >
                2
            </button>
            <button
                className="justify-center items-center hover:opacity-75 transition ease-in-out duration-300
            hover:text[#CCD5AE]"
                onClick={() => handleClick("3")}
            >
                3
            </button>
            <div className={`${buttonClassName} bg-[#E9EDC9]`} />
            <button className={`${buttonClassName} ${hoverClassName} text-sm`}
                onClick={() => handleClick('.')}
            >
                .
            </button>
            <div className={`${buttonClassName} bg-[#E9EDC9]`} />
            <button className={`${buttonClassName} ${hoverClassName} text-sm`}
                onClick={() => handleClick('0')}
            >
                0
            </button>
            <div className={`${buttonClassName} bg-[#E9EDC9]`} />
            <button className={`${buttonClassName} ${hoverClassName} text-sm`}
                onClick={() => handleDelete()}
            >
                DEL
            </button>
            <button className={`${buttonClassName} ${hoverClassName} text-sm`}
                onClick={() => handleCalculate()}
            >
                =
            </button>

        </div>
    )

}
