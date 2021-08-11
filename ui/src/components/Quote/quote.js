import { useEffect, useState } from "react"
import "./quote.css";

const quotes = [
    {
        quote: "There is no elevator to success. You have to take the stairs.",
    },
    {
        quote: "The only place where success comes before work is in the dictionary."
    },
    {
        quote: "You are never too old to set another goal or to dream a new dream."
    },
    {
        quote: "Create a life you’ll look forward waking up to."
    },
    {
        quote: "If you don’t like something, change it. If you can’t change it, change your attitude. Don’t complain."
    },
    {
        quote: "Good things come to people who wait, but better things come to those who go out and get them."
    },
    {
        quote: "Success is the sum of small efforts, repeated day-in, and day-out."
    },
    {
        quote: "Dale."
    },
    {
        quote: "You miss 100% of the shots you don't take - Michael Scott"
    },
    {
        quote: "Success is not final, failure is not fatal: it is the courage to continue that counts."
    },
    {
        quote: "You didn't come this far only to come this far."
    },
    {
        quote: "Don't compare your chapter 1 to someone's chapter 10."
    },
    {
        quote: "A lion doesn't concern himself with the  opinions of  sheep."
    },
]

export default function Quotes(){

    const [index, setIndex] = useState();


    useEffect(() =>{
        const index = Math.floor(Math.random() * quotes.length);
        setIndex(index)
    },[])

    return(
        <div className="quotes">
            {quotes[index] && quotes[index].quote}
        </div>
    )
}