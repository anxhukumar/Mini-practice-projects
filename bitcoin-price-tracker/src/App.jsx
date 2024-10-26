import { useCallback, useEffect, useState } from "react"
import axios from "axios";

function App() {
 
  const[price, setPrice] = useState("loading...");

  const getPrice = useCallback(async () => {
    try{
    const response = await axios.get("https://api.coindesk.com/v1/bpi/currentprice.json");
    const data = response.data.bpi.USD.rate;
    console.log(data);
    setPrice(data)
    }catch(error){
      console.error("Error fetching prices:", error)
      setPrice("Error");
    }
  }, [])

  useEffect(() => {
    getPrice();

    const interval = setInterval(getPrice, 5*60*1000);
   
    return () => clearInterval(interval);
  }, [getPrice])

  return (
    <>
      <div className="bg-blue-950 h-screen flex flex-col justify-center items-center">
          <div className="bg-[#fba101] border-2 border-dotted hover:shadow-2xl hover:shadow-[#fba101] rounded-xl border-black">
            <div>
              <img className="h-60 w-56 rounded-xl" src="https://images.pexels.com/photos/14891563/pexels-photo-14891563.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Bitcoin logo" />
            </div>
            <div className="bg-[#fba101] rounded-xl h-40 w-56 flex flex-col justify-center items-center">
              <h2 className="text-center text-white text-3xl font-bold">Current Price</h2>
              <br />
              <h2 className="text-center text-white text-3xl font-bold">${price}</h2>
            </div>
          </div>  
      </div>
    </>
  )
}

export default App
