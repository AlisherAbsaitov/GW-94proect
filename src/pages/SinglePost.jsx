import React from 'react'
// Bahora
export default function SinglePost() {
 
const cards = [
    {
      id: 1,
      image:
        "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop",
      title: "What are color profiles and how they work in graphic design",
      category: "Design",
    },
    {
      id: 2,
      image:
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1200&auto=format&fit=crop",
      title: "How to choose the first programming language",
      category: "Development",
    },
    {
      id: 3,
      image:
        "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1200&auto=format&fit=crop",
      title: "Should you choose a creative profession?",
      category: "Design",
    },
  ];

  return (
    <div className="bg-[white] min-h-screen">
     
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
          <h1 className="text-2xl font-bold">
            CREATE<span className="text-black">X</span>
          </h1>

          <ul className="hidden md:flex gap-8 text-gray-700">
            <li className="hover:text-orange-500 cursor-pointer">About</li>
            <li className="hover:text-orange-500 cursor-pointer">Courses</li>
            <li className="hover:text-orange-500 cursor-pointer">Events</li>
            <li className="text-orange-500 font-semibold cursor-pointer">
              Blog
            </li>
            <li className="hover:text-orange-500 cursor-pointer">Contacts</li>
          </ul>

          <button className="bg-orange-500 text-white px-5 py-2 rounded-md hover:bg-orange-600 transition">
            Get consultation
          </button>
        </div>
      </div>

     
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 lg:grid-cols-3 gap-10">
       
        <div className="lg:col-span-2">
          <p className="text-sm text-orange-500 font-semibold mb-3">
            HR & Recruiting
          </p>

          <h1 className="text-5xl text-black font-bold leading-tight mb-6">
            HR statistics: job search,
            <br />
            interviews, hiring and
            <br />
            recruiting
          </h1>

          <div className="flex items-center gap-5 text-gray-500 text-sm mb-8">
            <span>August 3, 2020</span>
            <span>4 min read</span>
          </div>

          <img
            src="https://media.gettyimages.com/id/157619338/photo/magnifying-glass-on-computer-keyboard.jpg?s=612x612&w=gi&k=20&c=HtHZ80evqGRgHckZAi50jxuIu0OKi1sESlurZw0Mhvo="
            alt=""
            className="w-full  object-cover rounded-xl mb-8"
          />

          <p className="text-black leading-8 mb-6">
            Vulputate vitae pellentesque scelerisque luctus consequat mattis
            pellentesque dui odio. Interdum a malesuada ornare sed gravida
            rhoncus, congue.
          </p>

          <p className="text-gray-600 leading-8 mb-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            aspernatur beatae dicta illum exercitationem cupiditate.
          </p>

          <div className="border-l-4 border-orange-500 pl-5 py-2 mb-8">
            <p className="text-xl font-semibold text-gray-800 leading-9">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae
              et temporibus.
            </p>
          </div>

          <ul className="space-y-3 mb-10">
            <li className="flex gap-3">
              <span className="text-black">✓</span>
              <p className='text-black'>Fermentum in morbi pretium aliquam adipiscing donec tempus.</p>
            </li>

            <li className="flex gap-3">
              <span className="text-black">✓</span>
              <p className='text-black'>Vulputate placerat amet pulvinar lorem nisl.</p>
            </li>

            <li className="flex gap-3">
              <span className="text-black">✓</span>
              <p className='text-black'>Consequat feugiat habitant gravida quisque elit.</p>
            </li>
          </ul>

          
          <div className="flex gap-3 flex-wrap">
            <button className="border px-4 py-2 rounded-md text-sm text-black">
              #learning
            </button>

            <button className="border px-4 py-2 rounded-md text-sm text-black">
              #HR
            </button>

            <button className="bg-orange-500 text-white px-4 py-2 rounded-md text-sm">
              #self-development
            </button>
          </div>
        </div>

     
        <div>
         
          <div className="bg-white p-5 rounded-xl shadow-sm mb-8">
            <div className="flex items-center border rounded-lg overflow-hidden">
              <input
                type="text"
                placeholder="Search blog..."
                className="w-full px-4 py-3 outline-none"
              />

              <button className="px-4">
                
              </button>
            </div>
          </div>

         
          <div className="bg-white p-6 rounded-xl shadow-sm mb-8">
            <h2 className="font-bold text-lg mb-5">Author</h2>

            <div className="flex gap-4">
              <img
                src="https://randomuser.me/api/portraits/women/44.jpg"
                alt=""
                className="w-16 h-16 rounded-full object-cover"
              />

              <div>
                <h3 className="font-semibold">Kristin Watson</h3>
                <p className="text-sm text-gray-500 mb-3">
                  Curator of Marketing Course
                </p>

                <div className="flex gap-3 text-gray-500">
                  {/* <Facebook size={18} />
                  <Twitter size={18} />
                  <Instagram size={18} />
                  <Linkedin size={18} /> */}
                </div>
              </div>
            </div>
          </div>

         
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h2 className="font-bold text-lg mb-5">Trending Articles</h2>

            <div className="space-y-5">
              {cards.map((item) => (
                <div key={item.id} className="flex gap-4">
                  <img
                    src={item.image}
                    alt=""
                    className="w-24 h-24 rounded-lg object-cover"
                  />

                  <div>
                    <p className="text-xs text-gray-400 mb-2">
                      September 4, 2020
                    </p>

                    <h3 className="font-semibold text-sm leading-6 hover:text-orange-500 cursor-pointer">
                      {item.title}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      
      <div className="bg-[#ececec] py-16 mt-10">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
          <img
            src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
            alt=""
            className="w-72"
          />

          <div className=' text-blue-600'>
            <h2 className="text-4xl font-bold mb-6 text-blue-600">
              Want to get the best articles weekly?
            </h2>

            <div className="flex gap-3">
              <input
                type="email"
                placeholder="Your working email"
                className="flex-1 px-5 py-4 rounded-lg outline-none"
              />

              <button className="bg-orange-500 text-white px-7 rounded-lg">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

     
      <div className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="text-4xl font-bold mb-12">You may also like</h2>

        <div className="grid md:grid-cols-3 gap-8">
          {cards.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition"
            >
              <img
                src={item.image}
                alt=""
                className="w-full h-60 object-cover"
              />

              <div className="p-6">
                <p className="text-sm text-gray-400 mb-3">{item.category}</p>

                <h3 className="font-bold text-xl leading-8 mb-4">
                  {item.title}
                </h3>

                <button className="text-orange-500 font-semibold">
                  Read →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      
      <footer className="bg-[#1d1d2e] text-gray-400 py-14">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-10">
          <div>
            <h1 className="text-3xl font-bold mb-5">
              CREATE<span className="text-orange-500">X</span>
            </h1>

            <p className="text-black text-sm leading-7">
              Createx Online School is a leader in online studying.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-5">SITE MAP</h3>

            <ul className="space-y-3 text-gray-400">
              <li>About</li>
              <li>Courses</li>
              <li>Events</li>
              <li>Blog</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-5">CONTACT</h3>

            <ul className="space-y-3 text-gray-400">
              <li>(405) 555-0128</li>
              <li>hello@createx.com</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-5">NEWSLETTER</h3>

            <input
              type="text"
              placeholder="Email address"
              className="w-full px-4 py-3 rounded-lg text-grey-400 outline-none"
            />
          </div>
        </div>
      </footer>
    </div>
  );
}
 
