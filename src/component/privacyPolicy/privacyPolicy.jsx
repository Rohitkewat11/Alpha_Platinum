import React from 'react';
import { Link } from 'react-router-dom';

function PrivacyPolicy() {
  return (
    <>
         <div className="bg-[#addadd] p-10 px-20 grid place-items-center lg:flex lg:justify-between mt-2">
          <h4 className="text-3xl">Privacy Policy</h4>
          <p className="">
            <Link to="/">Home</Link>/
            <span className="text-gray-500">Terms & Condition</span>
          </p>
        </div>
        <div className='w-[60%] m-auto text-justify py-10'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis porro modi officia, repellat rem adipisci iusto laudantium eveniet ipsum dolorem deserunt debitis quaerat aliquam maxime nam quis saepe cupiditate dicta doloribus perferendis itaque quas atque inventore numquam? Sed vero amet autem. Sapiente sint aperiam, corrupti vero omnis numquam aut voluptatem doloribus eveniet ut dicta nobis praesentium, cumque ab eos culpa! Veritatis at rerum labore assumenda modi iure magnam nobis quo velit, quam harum ipsa totam iste minima magni libero illum consequatur <br />
            temporibus odio praesentium aut. Harum quod, voluptatibus ab sequi reprehenderit, placeat hic sit officiis est neque iusto nisi itaque exercitationem dolore sapiente recusandae cumque iure dicta expedita, omnis voluptate voluptatem. Repellat odit delectus enim labore natus explicabo magni blanditiis ad minus. Rem quae repellat neque sequi, iste hic soluta molestiae totam. Impedit velit mollitia dolore at unde. Nulla fuga saepe quo odit nesciunt molestias asperiores iure recusandae doloremque consectetur?
        </div>
    </>
  )
}

export default PrivacyPolicy