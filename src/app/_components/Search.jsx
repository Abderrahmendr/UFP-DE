import React from 'react'
import { AiOutlineSearch } from "react-icons/ai";
 const Search = ()=> {
  return (
  <form className="w-[350px]  sm:flex sm:pt-4 sm:pb-20 sm:left-5 relative mr-0 md:flex md:w-[200px]  flex items-start">
  <div className="relative">
  <input type="search" placeholder=' Suchen' className='w-full outline-0 p-2 pl-4 rounded-full bg-slate-800 text-white' />
  <button className=' absolute right-1 top-1/2  -translate-y-1/2 p-3 flex flex-col bg-[#04cecf] rounded-full'>
  <AiOutlineSearch />

  </button>
  </div>
  </form>


)
}

export default Search