/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
import { useState } from 'react'
import './App.css'
import { FadeLoader } from 'react-spinners'

function App() {

  const [quote, setQuote] = useState(null);
  const [loading, setLoading] = useState(false)

  const handleQuotes = async (e) => {

    e.preventDefault();

    try {
      const apiURL = 'https://api.adviceslip.com/advice';
      setLoading(true)
      const response = await fetch(apiURL);
      const data = await response.json();
      setLoading(false)

      setQuote(data.slip.advice)

    } catch (error) {
      console.log("There was an error")
      setQuote("There was an error")
      setLoading(false)
    }
  }


  return (
    <>
      <div className="quotes-container">
        <h1>By: <a href="https://github.com/Denzel60">Denzel Lawrence</a></h1>
        <button disabled={loading} type="button" onClick={handleQuotes}>Generate Random Quote</button>
      </div>

      <hr />
      <h2>{quote}</h2>
      <hr />

      <div className="loader">
        {loading && <FadeLoader size={50} color="#000000" />}
      </div>
    </>
  )
}

export default App
