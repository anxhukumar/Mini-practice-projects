import React from 'react'
import GlowingBtn from '../buttons/GlowingBtn'
import {useNavigate} from "react-router-dom";

function Home() {

  const navigate = useNavigate();

  const goTo = (route) => {
    navigate(route);
  }

  return (
    <>
        <div className="bg-[#A79277] w-full min-h-screen flex justify-center items-center">
            <div className="flex flex-col justify-center items-center">
                <h1 className="text-white text-4xl font-bold mb-14">Press the button and let the laughter begin!</h1>
                <GlowingBtn text="Let's Go! 🎉" onClick={() => goTo("joke")} />
            </div>
      </div>
    </>
  )
}

export default Home