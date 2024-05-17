import React from 'react'
import { GoKebabHorizontal } from "react-icons/go"
import { Link } from 'react-router-dom'
import { Tasks } from '../index'
import { BsPersonSquare } from "react-icons/bs"
import { RiFolder3Line } from "react-icons/ri"

const ClassCard = ({ item }) => {

  // const API_KEY = "YpYGop5mERcGk+V69HJEdQ==rD26idLCEDXFbvaJ";
  // const [image, setImage] = useState(null);

  // useEffect(() => {
  //   const fetchImage = async () => {
  //     try {
  //       const res = await fetch("https://api.api-ninjas.com/v1/randomimage?category=education", {
  //         method: "GET",
  //         headers: {
  //           'X-Api-Key': API_KEY,
  //           'Accept': 'image/jpg'
  //         },
  //       });

  //       if (!res.ok) {
  //         throw new Error("Failed to fetch image");
  //       } else {
  //         const data = await res.blob();
  //         setImage(URL.createObjectURL(data));
  //       }
  //     } catch (error) {
  //       console.log(error);
  //     }

  //   }

  //   fetchImage();
  // }, []);

  return (
    <div class="max-w-sm rounded-lg overflow-hidden border hover:shadow-lg w-80 cursor-pointer mt-7">
      <div className={`realtive w-full h-24 ${item.banner} flex justify-between`}>
        <div className='flex flex-col ml-5 mt-3'>
          <Link to={`/class/${item.id}`} className='hover:underline text-white flex flex-col'>
            <h1 className='text-2xl w-fit'>{item.name}</h1>
            <span className='-mt-1 text-[12px] w-fit'>{item.section}</span>
          </Link>
          <span className='text-white mt-1 hover:underline w-fit'>{item.teacher}</span>
        </div>
        <div className='w-10 h-10 rounded-full hover:bg-gray-500 flex justify-center items-center mt-2 mr-2'>
          <Link>
            <GoKebabHorizontal className='rotate-90 text-white text-xl' />
          </Link>
        </div>
      </div>

      <div className='relative h-32 border-b'>
        <div className='mt-1'>
          {
            item.tasks && item.tasks.map((task, idx) => (
              <Tasks key={idx} task={task} />
            )
            )}
        </div>
        <div className='absolute top-0 right-6 -mt-9'>
          <img src={item.icon} alt='Class 1' className='w-16 h-16 rounded-full' />,
        </div>
      </div>

      <div className='flex gap-5 justify-end items-center mr-6 py-5'>
        <Link><BsPersonSquare className='w-9 h-5' /></Link>
        <Link><RiFolder3Line className='w-6 h-6' /></Link>
      </div>
    </div>
  )
}

export default ClassCard