import React from 'react'

export default function Clima({clima}) {
  return (
    <div>
        <h2>
            {clima.name}
        </h2>
        <p>
            {clima.temperatura}
        </p>
        <p>
            {clima.description}
        </p>
        <img src={clima.icon} alt="" />
    </div>
  )
}
