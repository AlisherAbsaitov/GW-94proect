import React from 'react'
import cardone from "../assets/image.png"
import character from "../assets/illustration.png"
import photo from "../assets/photo.png"
import work from "../assets/work.png"
import man from "../assets/man.png"
import boy from "../assets/boy.png"
// Shahriyor
export default function Course2() {
  return (
<div>
      <div className='flex flex-col justify-center items-center bg-red-200 h-65'>
        <h1 className='text-red-500 font-semibold'>Course</h1>
        <h1 className='text-4xl font-bold'>User Experience.Principles of Human-Centred Design</h1> 
      </div>
  <div className="container mx-auto px-6 py-16">
   <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-start">
    <div className="lg:col-span-2 space-y-10">
      <div>
        <h1 className="text-4xl font-bold text-gray-900 mb-5">
          About the course
        </h1>
        <p className="text-gray-600  text-sm md:text-base">
          Bibendum vulputate adipiscing venenatis at est, a eu tincidunt.
          Leo aenean congue in sagittis, felis maecenas amet varius at.
          Pellentesque euismod in faucibus at elementum. Tellus maecenas
          libero est tempus sit cras at malesuada diam.
        </p>
      </div>
      <div>
        <h2 className="text-3xl font-semibold text-gray-900 mb-6">
          You will learn:
        </h2>
        <div className='grid  gap-6 items-start p-4 rounded-xl' >
            <p className='text-gray-700 text-sm'>A fermentum in morbi pretium aliquam adipiscing donec tempus.</p>
            <p className='text-gray-700 text-sm'>Vulputate placerat amet pulvinar lorem nisl.</p>
            <p className='text-gray-700 text-sm'>Consequat feugiat habitant gravida quisque elit bibendum id.</p>
            <p className='text-gray-700 text-sm'>Etiam duis lobortis in fames ultrices commodo nibh.</p>
            <p className='text-gray-700 text-sm'>Fringilla in nec risus congue venenatis pretium posuere nec.</p>
            <p className='text-gray-700 text-sm'>Cursus eu pretium, vulputate tempus quam massa sed at.</p>
          </div>
      </div>
    </div>
    <div className="bg-white shadow-2xl rounded-3xl p-8 border border-gray-100 sticky top-10">
      <div className="space-y-8">
        <div>
          <p className="text-sm uppercase  text-gray-400 mb-1">
            Dates
          </p>
          <h3 className="text-2xl font-bold text-orange-600">
            Sept 7 — Nov 2
          </h3>
          <p className="text-sm text-gray-500 mt-2 ">
            Metus turpis sit lorem lacus, in elit tellus lacus.
          </p>
        </div>
        <div>
          <p className="text-sm uppercase text-gray-400 mb-1">
            Duration
          </p>
          <h3 className="text-2xl font-bold text-orange-600">
            2 months · 8 lessons
          </h3>
          <p className="text-sm text-gray-500 mt-2">
            Rhoncus pellentesque auctor auctor orci vulputate faucibus quis ut.
          </p>
        </div>
        <div>
          <p className="text-sm uppercase text-gray-400 mb-1">
            Price
          </p>
          <h3 className="text-2xl font-bold text-orange-600">
            $120 / month
          </h3>
          <p className="text-sm text-gray-500 mt-2 ">
            Nulla sem adipiscing adipiscing felis fringilla.
          </p>
        </div>
        <button className="w-full h-12 rounded-xl bg-orange-600 hover:bg-orange-700  text-white font-semibold shadow-lg">
          Join the course
        </button>
      </div>
    </div>
  </div>
 </div>
 <div className='flex p-10'>
  <div>
    <img src={cardone} alt="" className='bg-yellow-400' width={600} />
  </div>
  <div className='flex flex-col gap-3 p-10'>
    <p className='uppercase font-semibold t'>Course Curator</p>      
    <h1 className='text-3xl font-bold '>Cody Fisher</h1>
    <p className='text-sm text-gray-700 '>Senior UX designer in IT Product Company</p>
    <p className='text-xs text-gray-800'>4.9 rate</p>
    <p className='text-xs text-gray-800'>4 courses</p>
    <p className='text-xs text-gray-800'>350 students</p>
    <p className='text-xs text-gray-700'>Mattis adipiscing aliquam eu proin metus a iaculis faucibus. Tempus curabitur venenatis, vulputate venenatis fermentum ante. Nisl, amet id semper semper quis commodo, consequat. Massa rhoncus sit morbi odio. Sit maecenas nibh consectetur vel diam. Sem vulputate molestie laoreet at massa sed pharetra. Ac commodo platea id habitasse proin. Nullam sit nec ipsum posuere non. Nam vel aliquam tristique sollicitudin interdum quam. </p>
  </div>
 </div>
 <div className='flex flex-col gap-15'>
  <div className='flex flex-col items-center'>
    <p className='uppercase'>Main Steps</p>
    <h1 className='text-3xl font-bold'>Online learning process</h1>
  </div>
  <div className="grid grid-cols-4 gap-10 p-10">
  <div className="space-y-3">
    <div className="flex items-center gap-4">
      <p className="text-5xl font-bold text-gray-200">01</p>
      <div className="w-full border-t border-dashed border-gray-300"></div>
    </div>

    <h3 className="text-lg font-semibold text-gray-900">
      Watching online video lectures
    </h3>

    <p className="text-sm leading-7 text-gray-500">
      Culpa nostrud commodo ea consequat aliquip reprehenderit.
      Veniam velit nostrud aliquip sunt.
    </p>
  </div>

  <div className="space-y-3">
    <div className="flex items-center gap-4">
      <p className="text-5xl font-bold text-gray-200">02</p>
      <div className="w-full border-t border-dashed border-gray-300"></div>
    </div>

    <h3 className="text-lg font-semibold text-gray-900">
      Passing test
    </h3>

    <p className="text-sm leading-7 text-gray-500">
      Anim reprehenderit sint voluptate exercitation adipisicing
      laborum adipisicing.
    </p>
  </div>

  <div className="space-y-3">
    <div className="flex items-center gap-4">
      <p className="text-5xl font-bold text-gray-200">03</p>
      <div className="w-full border-t border-dashed border-gray-300"></div>
    </div>

    <h3 className="text-lg font-semibold text-gray-900">
      Curator’s feedback
    </h3>

    <p className="text-sm leading-7 text-gray-500">
      Adipisicing esse aliqua aliquip qui amet. 
      Aute eiusmod dolore dolore et ad et veniam.
    </p>
  </div>

  <div className="space-y-3">
    <div className="flex items-center gap-4">
      <div className="flex items-center justify-center w-16 h-16 rounded-full bg-red-50">
        <p className="text-5xl font-bold text-red-500">04</p>
      </div>
    </div>

    <h3 className="text-lg font-semibold text-gray-900">
      Corrections if needed
    </h3>

    <p className="text-sm leading-7 text-gray-500">
      Sit veniam aute dolore adipisicing nulla sit culpa.
      Minim mollit voluptate ullamco proident.
    </p>
  </div>
</div>
 </div>
<div className="bg-[#ffe5dd] rounded-xl px-10 py-8 flex items-center justify-between mt-24">

  <div>
    <h2 className="text-3xl font-bold text-[#1E212C]">
      20% discount for early birds!
    </h2>

    <p className="text-gray-500 mt-2">
      Consequat vulputate mauris nunc.
    </p>
  </div>

  <div className="flex gap-4 items-end">

    <div className="flex flex-col">
      <label className="text-sm text-gray-500 mb-2">
        Full name
      </label>

      <input
        type="text"
        placeholder="Your full name"
        className="w-52 h-12 px-4 rounded-md border border-gray-200 outline-none bg-white"
      />
    </div>

    <div className="flex flex-col">
      <label className="text-sm text-gray-500 mb-2">
        Email
      </label>

      <input
        type="email"
        placeholder="Your working email"
        className="w-60 h-12 px-4 rounded-md border border-gray-200 outline-none bg-white"
      />
    </div>

    <button className="h-12 px-8 rounded-md bg-[#FF3F3A] hover:bg-[#ff2d27] text-white font-semibold">
      Join the course
    </button>

  </div>
</div>
<div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start py-28 p-10">

  <div>
    <p className="uppercase tracking-[3px] text-sm text-gray-400 mb-4">
      For whom?
    </p>

    <h2 className="text-5xl font-bold text-[#1E212C] leading-tight">
      Who will benefit from the course:
    </h2>
  </div>

  <div className="space-y-7">

    {[
      "Specialists with more than 1 year of active work experience",
      "Mobile app designers who want to improve their skills in solving business problems",
      "Professional designers who want to feel more confident in UX",
      "Specialists who would like to structure their knowledge, fill in the gaps",
      "Freelancers who want to work with larger projects",
    ].map((item, index) => (
      <div key={index} className="flex items-start gap-4">

        <div className="w-5 h-5 rounded-full border-2 border-[#FF3F3A] flex items-center justify-center mt-1">
          <div className="w-2 h-2 rounded-full bg-[#FF3F3A]"></div>
        </div>

        <p className="text-gray-600 leading-8">
          {item}
        </p>
      </div>
    ))}

  </div>
</div>
<div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center py-20 p-10">

  <div>

    <p className="uppercase tracking-[3px] text-sm text-gray-400 mb-4">
      Course program
    </p>

    <h2 className="text-5xl font-bold text-[#1E212C] mb-14">
      What will you learn
    </h2>

    <div className="space-y-8">

      {[
        "Aliquet lectus urna viverra in odio.",
        "Orci commodo, viverra orci mollis ut euismod.",
        "Sagittis vitae facilisi rutrum amet mauris quisque vel convallis.",
        "In id dolor quis nunc, urna hendrerit pharetra.",
        "Est, ut tempus id rutrum facilisi.",
        "Amet nec in pellentesque.",
      ].map((item, index) => (
        <div key={index} className="flex gap-5">

          <p className="text-[#FF3F3A] font-bold text-xl">
            {String(index + 1).padStart(2, "0")}
          </p>

          <div>
            <h3 className="text-lg font-semibold text-[#1E212C]">
              {item}
            </h3>

            <p className="text-gray-500 mt-2 leading-7">
              Nulla amet, sagittis potenti rhoncus sit. Elit lectus nec pulvinar aliquet donec enim.
            </p>
          </div>

        </div>
      ))}

    </div>
  </div>
  <div className="flex justify-center">

    <div className="relative">

      <div className="absolute w-72 h-72 bg-[#dff5ec] rounded-full top-0 left-10"></div>

      <div className="relative z-10 bg-white rounded-3xl p-10 mt-20">
        <img
          src={character}
          alt=""
          className="w-87.5 object-cover"
        />
      </div>

    </div>

  </div>
</div>
<div className="bg-[#f4f5f7] py-24 rounded-xl mt-20">

  <div className="text-center mb-16">

    <p className="uppercase tracking-[3px] text-sm text-gray-400 mb-4">
      Testimonials
    </p>

    <h2 className="text-5xl font-bold text-[#1E212C]">
      What our students say
    </h2>
  </div>

  <div className="max-w-3xl mx-auto bg-white shadow-xl rounded-2xl p-12">

    <p className="text-gray-600 leading-8 text-lg">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Justo, amet lectus quam viverra mus lobortis fermentum amet,
      eu. Pulvinar eu sed purus facilisi.
    </p>

    <div className="flex items-center gap-4 mt-10">

      <img
        src={photo}
        alt=""
        className="w-14 h-14 rounded-full"
      />

      <div>
        <h4 className="font-semibold text-[#1E212C]">
          Eleanor Pena
        </h4>

        <p className="text-gray-500 text-sm">
          Position, Course
        </p>
      </div>

    </div>

  </div>
</div>
<div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center py-28 p-10">

  <div>
    <img
      src={work}
      alt=""
      className="w-full max-w-125"
    />
  </div>

  <div>

    <p className="uppercase tracking-[3px] text-sm text-gray-400 mb-4">
      Leave a request now
    </p>

    <h2 className="text-5xl font-bold text-[#1E212C] mb-12">
      Register for the course
    </h2>

    <div className="space-y-6">

      <input
        type="text"
        placeholder="Full name"
        className="w-full h-14 border border-gray-200 rounded-md px-5 outline-none"
      />

      <input
        type="email"
        placeholder="Email"
        className="w-full h-14 border border-gray-200 rounded-md px-5 outline-none"
      />

      <input
        type="text"
        placeholder="Phone"
        className="w-full h-14 border border-gray-200 rounded-md px-5 outline-none"
      />

      <button className="w-full h-14 rounded-md bg-[#FF3F3A] hover:bg-[#ff2d27] text-white font-semibold">
        Join the course
      </button>

    </div>

  </div>
</div>
<div className='p-10 flex flex-col items-center gap-10'>
  <div className='p-3'>
  <h1 className='uppercase font-semibold'>Check other courses</h1>
  <p className='text-4xl font-bold'>You may also like </p>
  </div>
  <div className='flex gap-10'> 
    <div className="flex">
    <img src={man} alt="" width={120}/>  
    <div className='flex flex-col gap-3 justify-center border border-gray-400 p-3'>
    <p className="bg-emerald-500 text-white w-20 rounded-sm " >Marketing</p>
    <h3 className="font-bold">
      The Ultimate Google Ads Training Course
    </h3>
    
    <div className='flex'>
      <p className="text-orange-600">
      $100  
      </p>
      <p className='text-gray-600'> | by Jerome Bell</p>
    </div>
    </div>
  </div>
   <div className="flex">
    <img src={boy} alt="" width={120}/>  
    <div className='flex flex-col gap-3 justify-center border border-gray-400 p-3 w-84 shadow-2xl'>
    <p className="bg-sky-500 text-white w-25 rounded-sm " >Management</p>
    <h3 className="font-bold">
      Prduct Management Fundamentals
    </h3>
    
    <div className='flex'>
      <p className="text-orange-600">
      $480 
      </p>
      <p className='text-gray-600'> | by Marvin McKinney</p>
    </div>
    </div>
  </div> 
  </div>
</div>
<div className='flex justify-center gap-10'>
  <p className='font-semibold text-2xl'>Do you want more courses?</p>
  <button className="w-50 h-10 rounded-md bg-[#FF3F3A] hover:bg-[#ff2d27] text-white font-semibold">
    View all courses
  </button>
</div>
</div>
  )
}
