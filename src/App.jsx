/* eslint-disable no-console */

// eslint-disable-next-line no-unused-vars
import React, { useState } from "react"
import "./App.css"
import Coffee from "./Conponents/Pages/Coffee/Coffee"
import { useLoaderData } from "react-router-dom"
import Header from "./Conponents/Header/Header"

function App() {

  const coffee = useLoaderData()
  const [coffees, setCoffees] = useState(coffee)
  return (
    <>
      <Header></Header>
      <section className="py-4 grid grid-cols-2 gap-2 content-center">
        {
          coffees.map(cof => <Coffee key={cof._id} coffees={coffees} setCoffees={setCoffees} coffee={cof}></Coffee>)
        }
      </section>

    </>
  )
}

export default App
