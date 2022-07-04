import Head from 'next/head'
import Image from 'next/image'
import Avatar from './../components/Avatar';
import {ViewGridIcon,MicrophoneIcon, SearchIcon} from '@heroicons/react/solid'
import Footer from '../components/Footer';
import { useRef } from 'react';
import {useRouter} from "next/router";

export default function Home() {
  const router = useRouter();
  // HOOK
  const searchInputRef= useRef(null);



  // search button prevent reload
const search =(e)=>{
  e.preventDefault();
  const term=searchInputRef.current.value; 
  // the values are stored in the current variable
  if(!term) return;

  router.push(`/search?term=${term}`); //search term reasult
  
}


  return (
    <div className='flex flex-col items-center justify-center h-screen'>
      <Head>
        <title>Google Search Clone By SADMAN</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* header */}
      <header className='flex w-full p-5 justify-between text-sm text-gray-700'>


          {/* left portion*/}
        <div className='flex space-x-4 items-center'>
          <p className='link'>About</p>
          <p className='link'>Store</p>
        </div>


          {/* right portion*/}
        <div className='flex space-x-4 items-center'>
          <p className='link'>Gmail</p>
          <p className='link'>Images</p>

          {/* Icons */}
          <ViewGridIcon className="h-10 w-10 p-2 rounded-full hover:bg-gray-100 cursor-pointer" />

          {/* Avater */}
          <Avatar/>
          {/* <Image src="/heroImage.png " width="300" height="300"/>  */}

        </div>
      </header>


      {/* Body */}
      <form className="flex flex-col items-center mt-44 flex-grow w-4/5 ">
        <Image 
        src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
       width={300}
        height={100}
        alt="Google Logo"
        />
      {/* search icons */}

      {/* searchBOX */}
      <div className="flex w-full mt-5 hover:shadow-lg focus-within:shadow-lg max-w-md rounded-full border-gray-200 px-5 py-3 items-center sm:max-w-xl lg:max-w-2xl">  
       {/*searchICOn  */}
        <SearchIcon className='h-5 mr-3 text-gray-500'/>
       {/* input BOX */}
        <input type="text"  ref={searchInputRef}  className='focus:outline-none flex-grow' />
        <MicrophoneIcon className='h-5 '/>
      </div>
      {/* BUTTONS */}

        <div className='flex flex-col w-1/2 space-y-2 justify-center mt-8 sm:space-y-0 sm:flex-row sm:space-x-4'>
            <button onClick={search} className='btn'> Google Search </button>
            <button onClick={search} className='btn'> I am Feeling Lucky </button>  
        </div>
      </form>



      {/* Footer */}
      <Footer/>
    </div>
  )
}
