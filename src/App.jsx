/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
import { useState } from 'react'
import './App.css'

function App() {

  const todayQuote = async _ => {
    const url = "https://zenquotes.io/api/today";
    const response = await fetch(url);
    console.log(response);
    var data = await response.json();
    return data;
  }

  const [quote, setQuote] = useState(`Quote of the day is: ${todayQuote}`);

  const handleQuotes = async (e) => {

    e.preventDefault();

    try {

      const response = await fetch("https://zenquotes.io/api/random");
      console.log(response);
      var data = await response.json();
      console.log(data);
      setQuote(data);

    } catch (error) {
      // console.log("There was an error")
    }
  }

  return (
    <>
      <div className="quotes-container">
        <h1><a href="https://github.com/Denzel60">By Denzel Lawrence</a></h1>
        <button type="button" onClick={handleQuotes}>Generate Random Quote</button>
      </div>
      <h2>{quote}</h2>
      <h2>{setQuote}</h2>
    </>
  )
}

export default App
