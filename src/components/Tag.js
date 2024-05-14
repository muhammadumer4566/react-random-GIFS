
import React, { useState } from 'react'
import Spinner from './Spinner';
import useGif from '../hooks/useGif';


const Tag = () => {
 
  const [tag, setTag] = useState(" ");
  const {gif, loading, fetchData} = useGif(tag);

  return (
    <div className='w-1/2 bg-blue-500 rounded-lg border border-black 
    flex flex-col items-center gap-y-5 mt-[15px]'>

      <h1 className=' mt-[15px] font-bold text-2xl underline uppercase ' > Random {tag} Gif </h1>
 
      {
        loading ? <Spinner/> : <img src={gif} alt="Gif" width="450"/>
      }

      <input className='w-10/12 text-2xl p-1 rounded-lg text-center'
       type="text" onChange={ (event) => setTag(event.target.value) } value={tag}/>

      <button className='w-10/12 text-2xl p-1 rounded-lg bg-black text-white mb-[20px]'
      onClick={ () => fetchData(tag) }> Generate </button>
    </div>
  )
}

export default Tag
