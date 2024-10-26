    import React, { useEffect } from 'react'
    import HoverBtn from "../buttons/HoverBtn"
    import { useState } from 'react'
    import {useDispatch, useSelector} from "react-redux"
    import {fetchJoke} from "../../features/jokes/jokeSlice"

    function JokePage() {

      const dispatch = useDispatch();

      const {joke, loading, error} = useSelector((state) => state.joke);
      

      useEffect(() => {
        dispatch(fetchJoke());
      }, [dispatch]);

      const [punchline, setPunchline] = useState(".....")
      const [setup, setSetup] = useState(".....")
      
      useEffect(() => {
        if(joke){
        setSetup (joke.setup);
        }
      }, [joke]);
      

      useEffect(() => {
        const delayedText = setTimeout(() => {
          setPunchline(joke.punchline)
          }, 4000);
        
        return () => clearTimeout(delayedText);
      }, [joke])
      
      const newJoke = () => {
        setSetup("")
        setPunchline(".....")
        dispatch(fetchJoke())
      }

      return (
        <>
            <div className="bg-[#A79277] w-full min-h-screen flex flex-col justify-center items-center">
                <div className='ml-28'>
                {loading && (
                  <div className="animate-spin rounded-full h-32 w-32 border-t-4 border-b-4 border-white"></div>
                )}
                {error && (
                  <p className="text-white text-lg">{error}</p>
                )}
                  {joke && 
                  <div>
                    <h2 className='text-white text-4xl  font-comic font-extrabold mb-24'>{setup}</h2>
                    <br />
                    <h2 className='text-white text-4xl  font-comic font-extrabold mb-24'>{punchline}</h2>
                    <HoverBtn text="Next Joke ✨" onClick={newJoke}/>
                  </div>}
                </div>
            </div>
        </>
      )
    }

    export default JokePage