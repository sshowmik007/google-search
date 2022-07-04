import Image from 'next/image';

function Avatar({className}) {
  return (
    // <img loading="lazy"
    // src={}
    // alt="profile pic"
    // className="rounded-full h-10 cursor-pointer transition duration-150 transform hover:scale-110 animate-bounce">
  
    // </img>
    <Image src="/heroImage.png " 
     className={`rounded-full cursor-pointer transition duration-150 transform hover:scale-110 animate-spin ${className}`} 
    height="40" width="40" loading="lazy"  alt="profile pic"/>
  )
}

export default Avatar