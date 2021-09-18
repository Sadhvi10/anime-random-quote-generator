import React, { useEffect, useState } from "react";
import { BiRefresh } from "react-icons/bi";
import { ImQuotesRight, ImQuotesLeft } from "react-icons/im";
import Footer from "./components/Footer";
import Header from "./components/Header";

const url = "https://animechan.vercel.app/api/random";
function App() {
  const [randomQuote, setRandomQuote] = useState("");
  const [reload, setReload] = useState(false);

  const fetchQuotes = async () => {
    const response = await fetch(url);
    const activeQuote = await response.json();
    setRandomQuote(activeQuote);
  };

  useEffect(() => {
    fetchQuotes();
  }, [reload]);

  return (
    // main div
    <div className='relative bg-white min-h-screen justify-center items-center'>
      {/* header  */}
      <Header />

      <div className='p-20'>
        <div className='h-full max-w-3xl mx-auto p-10 rounded-lg bg-gradient-to-r from-white to-blue-200 border border-gray-200 shadow-lg'>
          <h2 className='font-inter font-black text-6xl text-[#1f2937] mb-5'>
            Animechan
          </h2>
          <p className='bg-gradient-to-b from-yellow-500 via-red-400 to-purple-600 text-transparent bg-clip-text mb-5 font-inter font-black  tracking-tighter text-xl'>
            {randomQuote.anime}
          </p>
          <p className='font-inter font-medium text-lg text-[#1f2937]'>
            <ImQuotesLeft style={{ marginTop: 15, marginBottom: 15 }} />
            {randomQuote.quote}
            <p className='bg-gradient-to-b text-right my-2 from-yellow-500 via-red-400 to-purple-600 text-transparent bg-clip-text font-inter font-black text-[17px]'>
              {" "}
              - {randomQuote.character}
            </p>
            <ImQuotesRight style={{ marginTop: 15, marginBottom: 15 }} />
          </p>
          <button
            type='reset'
            className=' bg-[#3d3d3d] rounded-lg mt-5 px-2 py-2'
            onClick={() => setReload(!reload)}
          >
            <BiRefresh size={24} color='#ffcd69' />
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
