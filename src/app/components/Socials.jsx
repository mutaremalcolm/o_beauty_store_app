'use client'

import {  
  RiInstagramFill, 
  RiFacebookFill, 
  RiTwitterFill,  
} from "react-icons/ri";


import Link from "next/link";

const icons = [
  {
    path: "https://www.instagram.com/obeautycollections?igsh=dWU5b3hhcXgweDBk",
    name: <RiInstagramFill />
  },
  {
    path: "",
    name: <RiFacebookFill />
  },
  {
    path: "https://x.com/OBeautyCoLL",
    name: <RiTwitterFill />
  },
]

  
const Socials = ({containerStyles, iconStyles}) => {
  return (
    <div className={`${containerStyles}`}>
      {icons.map((icon, index)=> {
        return <Link href={icon.path} key={index}>
          <div className={`${iconStyles}`}>
            {icon.name}
          </div>
        </Link>
      })} 
    </div>
  )
}

export default Socials