import React from 'react';
import { Link } from 'react-router-dom';


function About() {

  
  return (
    <>
        <div>
        <div className="bg-[#addadd] p-10 px-20 mt-5 grid place-items-center lg:flex lg:justify-between">
                <h4 className="text-3xl">About Us</h4>
                <p className="">
                    <Link to='/'>Home</Link>/<span className="text-gray-500">About US</span>
                </p>
            </div>
            <div className='w-[60%] m-auto text-justify py-20'>
                <b>Alpha Platinum</b>, Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti ratione velit recusandae, sed molestiae veritatis rerum facilis asperiores eos error ipsum obcaecati officiis placeat aspernatur id repellendus voluptates numquam iusto reprehenderit nulla fugiat delectus maxime. Ratione similique nisi debitis sed, iusto dolore? Adipisci aliquam provident optio, deserunt reiciendis aut praesentium odio reprehenderit ipsam? Enim, quod quasi saepe ducimus qui nulla debitis excepturi voluptatibus, dolorum aspernatur temporibus accusantium laborum repudiandae dolores minima dolorem repellendus quia amet. Libero ipsum tempore veritatis eum accusamus facere nesciunt earum obcaecati qui laboriosam maxime iste nobis, dolorum deserunt illum assumenda totam amet similique, vitae nulla vero.
            </div>
        </div>
    </>
  )
}

export default About