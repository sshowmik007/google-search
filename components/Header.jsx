import { XIcon, MicrophoneIcon,SearchIcon } from '@heroicons/react/solid';

import Image from 'next/Image';
import {useRouter} from "next/router";
import { useRef } from 'react';
import Avatar from './Avatar';

import HeaderOptions from './HeaderOptions';



function Header () {
    // redirrect to homepage
    const router= useRouter();
    const searchInputRef=useRef(null);

    const search = e =>{
        e.preventDefault();
        const term=searchInputRef.current.value; 
        // the values are stored in the current variable
        if(!term) return;

        router.push(`/search?term=${term}`);
    }
  return (
    <header className="sticky top-0 bg-white " >
        <div className=" flex w-full p-6 items-center">

        <Image src='https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png'
        height={40} width={120} className="cursor-pointer" alt='google logo'
        onClick={() => router.push("/")} />
        {/* Search Bar for the searched items */}
        <form className='flex flex-grow border border-gray-200 rounded-full shadow-lg max-w-3xl items-center px-6 py-3 ml-10 mr-5'>
            <input type="text" ref={searchInputRef} className="flex-grow w-full focus:outline-none" />
            {/* cross iCOn */}
            <XIcon className="h-7 sm:mr-3 text-gray-500 cursor-pointer transition duration-100 transform hover:scale-125" 
            onClick={()=> (searchInputRef.current.value="")}
            />
            {/* Microphone icon */}
            <MicrophoneIcon className='h-6 mr-3 hidden sm:inline-flex text-blue-500 border-l-2 pl-4 border-gray-300' />

            {/* search ICon */}
            <SearchIcon className='h-6 text-blue-500 hidden sm:inline-flex '/>

            <button hidden type='submit' onClick={search} >Search</button>
        </form>
        <Avatar className="ml-auto" />
        </div>
        {/* Header Options */}
        <HeaderOptions/>
    </header>
  );
}

export default Header;