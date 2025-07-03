import { evaluate } from "mathjs";
import React from "react"; 

evaluate
export default function Calculator(){
    const[imput, setInput] = useState("")
    const handleClick = (value) => { 
        setInput(imput + value)
    }

    const buttonClassName = "justify-center itens-center"

    const hoverClassName = "hover:opacity-75 transition ease-in-out duration-300 hover:text-[CCD5AE]"

const [result, setResult] = useState("")

    return (
        <div className="grid shadow-md w-[360px] text-2xl font-bold">
          <div className="bg-[#CCD5AE] text-white min-h-[180px] grow flex flex-col justify-end items-end p-8 gap-4">
            <span className="flex w-fit justify-self-end text-xl">
              {input}
            </span>
            <div className="flex justify-between w-full items-center text-5xl">
              <span>=</span>
              <span className="flex h-fit">{result}</span>
               
              </div>
            </div>
          
          <button

            ClassName="justify-center items-center hover:opacity-75 transition ease-in-out duration-300 hover:text[CCDSAE] bg-[#E9EDC9] text-[#D4a373]"
            onClick={()=> handleClick("+")}
          >
            +
              </button>
          <button

            ClassName="justify-center items-center hover:opacity-75 transition ease-in-out duration-300 hover:text[CCDSAE] bg-[#E9EDC9] text-[#D4a373]"
            onClick={()=> handleClick("7")}
          >
            7
              </button>
        </div>
      )

       }
      