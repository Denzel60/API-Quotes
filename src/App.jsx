/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
import { useState } from 'react'
import './App.css'

function App() {

  // const todayQuote = async () => {
  //   const url = "https://zenquotes.io/api/today";
  //   const response = await fetch(url);
  //   console.log(response);
  //   const data = await response.json();
  //   return data;
  // }
  // let quoteOfTheDay = todayQuote();

  const [quote, setQuote] = useState(null);

  const handleQuotes = async (e) => {

    e.preventDefault();
    const apiKey = "5mF1kwUcslFYmOpmVHEV8w==uH3yGQoATwxosfAv";

    try {
      const options = {
        method: "GET",
        headers: {
          "X-Api-Key": apiKey,
        },
      };
      const apiURL = 'https://api.api-ninjas.com/v1/quotes?category=happiness';

      const response = await fetch(apiURL, options);
      const data = await response.json();

      console.log(data[0])

    } catch (error) {
      console.log("There was an error")
    }
  }


  return (
    <>
      <div className="quotes-container">
        <h1>By: <a href="https://github.com/Denzel60">Denzel Lawrence</a></h1>
        <button type="button" onClick={handleQuotes}>Generate Random Quote</button>
      </div>
      <h2>{quote}</h2>
      <h2>Random Quote: {setQuote}</h2>
    </>
  )
}

export default App
