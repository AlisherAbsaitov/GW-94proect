import { Link } from 'lucide-react'
import React from 'react'
//Bexruz
export default function Course() {

  const courses = [
    { category: "Marketing", categoryColor: "bg-emerald-500", title: "The Ultimate Google Ads Training Course", price: "$100", author: "Jerome Bell" },
    { category: "Management", categoryColor: "bg-blue-600", title: "Product Management Fundamentals", price: "$480", author: "Marvin McKinney" },
    { category: "HR & Recruiting", categoryColor: "bg-amber-500", title: "HR Management and Analytics", price: "$200", author: "Leslie Alexander Li" },
    { category: "Marketing", categoryColor: "bg-emerald-500", title: "Brand Management & PR Communications", price: "$530", author: "Kristin Watson" },
    { category: "Design", categoryColor: "bg-rose-500", title: "Graphic Design Basic", price: "$500", author: "Guy Hawkins" },
    { category: "Management", categoryColor: "bg-blue-600", title: "Business Development Management", price: "$400", author: "Dianne Russell" },
    { category: "Development", categoryColor: "bg-indigo-600", title: "Highload Software Architecture", price: "$600", author: "Brooklyn Simmons" },
    { category: "HR & Recruiting", categoryColor: "bg-amber-500", title: "Human Resources – Selection and Recruitment", price: "$150", author: "Kathryn Murphy" },
    { category: "Design", categoryColor: "bg-rose-500", title: "User Experience. Human-centered Design", price: "$240", author: "Cody Fisher" }
  ];

  return (
    <div className="bg-[#F5F5F5] min-h-screen pb-0 font-sans selection:bg-orange-500 selection:text-white">
      

      <div className='flex justify-center items-center h-48 bg-[#F5F5F5] text-slate-900'>
        <div className='flex flex-col justify-center items-center gap-2 text-center'>
          <p className='text-xl text-slate-600'>Enjoy your studying!</p>
          <h1 className='text-4xl font-bold'>Our online courses</h1>
        </div>
      </div>


      <div className='bg-[#FFFFFF] border-b border-gray-200 py-4 px-6 sticky top-0 z-50 shadow-sm'>
        <div className='max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4'>
          <div className='flex flex-wrap justify-center items-center gap-6 text-sm font-medium'> 
            <p className='px-4 py-1.5 border text-orange-400 border-orange-400 rounded-md cursor-pointer hover:bg-orange-50 transition-colors' >All</p>       
            <p className='text-gray-500 hover:text-orange-400 cursor-pointer transition-colors' >Marketing</p>
            <p className='text-gray-500 hover:text-orange-400 cursor-pointer transition-colors' >Design</p>
            <p className='text-gray-500 hover:text-orange-400 cursor-pointer transition-colors' >Development</p>
            <p className='text-gray-500 hover:text-orange-400 cursor-pointer transition-colors' >Business</p>
            <p className='text-gray-500 hover:text-orange-400 cursor-pointer transition-colors' >Photography</p>
          </div>
          <div className="w-full md:w-auto">
            <input type="text" className='w-full md:w-80 h-11 px-4 border-gray-300 border rounded-md focus:outline-none focus:border-orange-400 text-sm' placeholder='Search course...' />
          </div>
        </div>
      </div>


      <div className="max-w-6xl mx-auto p-6 mt-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col justify-between border border-gray-100 group hover:shadow-lg transition-shadow duration-300">
              <div className="bg-[#FFCA1D] h-60 flex items-end justify-center relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center opacity-20 pointer-events-none">
                  <div className="border border-white rounded-full w-56 h-56 absolute"></div>
                  <div className="border border-white rounded-full w-40 h-40 absolute"></div>
                  <div className="border border-white rounded-full w-24 h-24 absolute"></div>
                </div>
                <svg className="h-[80%] w-auto text-white/90 z-10 drop-shadow-sm mb-0" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <div className="p-6 grow flex flex-col justify-between">
                <div>
                  <span className={`${course.categoryColor} text-white text-[11px] font-bold px-2.5 py-1 rounded-md uppercase tracking-wider`}>{course.category}</span>
                  <h3 className="mt-4 text-slate-800 font-bold text-base line-clamp-2 min-h-12 group-hover:text-orange-500 transition-colors">{course.title}</h3>
                </div>
                <div className="mt-5 pt-4 border-t border-gray-100 flex items-center text-xs">
                  <span className="text-red-500 font-bold text-base mr-2">{course.price}</span>
                  <span className="text-gray-400 font-medium">| by {course.author}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-12 flex justify-center">
          <button className="flex items-center gap-2 text-sm font-semibold text-slate-700 hover:text-orange-400 transition-colors bg-white px-6 py-2.5 rounded-full shadow-sm border border-gray-200">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M4 4v5h.582m15.356 2A8.001 8.001 0 1121.253 8H18" />
            </svg>
            Load more
          </button>
        </div>
      </div>


      <div className="bg-[#F4F5F7] py-20 px-6 relative overflow-hidden">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <p className="text-xs font-bold tracking-widest text-slate-700 uppercase">Testimonials</p>
          <h2 className="text-3xl font-extrabold text-slate-900 mt-2 mb-12">What our students say</h2>
          

          <div className="flex items-center justify-between gap-4">
            <button className="hidden md:flex items-center justify-center w-10 h-10 rounded-full hover:bg-gray-200 text-slate-700 transition-colors">
              
            </button>

            <div className="bg-white p-10 md:p-12 rounded-lg shadow-sm border border-gray-100 text-left flex-1 max-w-2xl mx-auto relative">
              <span className="text-orange-500 text-5xl font-serif absolute top-6 left-6 leading-none">“</span>
              <p className="text-slate-600 text-sm leading-relaxed pl-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Justo, amet lectus quam viverra mus lobortis fermentum amet, eu. Pulvinar eu sed purus facilisi. Vitae id turpis tempus ornare turpis quis non. Congue tortor in euismod vulputate etiam eros. Pulvinar neque pharetra arcu diam maecenas diam integer in.
              </p>
              

              <div className="mt-8 flex items-center gap-4 pl-6">
                <div className="w-12 h-12 rounded-full bg-slate-300 overflow-hidden flex items-center justify-center text-white font-bold text-sm">
                  EP
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900">Eleanor Pena</h4>
                  <p className="text-xs text-gray-400 mt-0.5">Position, Course</p>
                </div>
              </div>
            </div>

            <button className="w-10 h-10 bg-orange-500 hover:bg-orange-600 text-white rounded-full flex items-center justify-center shadow-md transition-colors text-sm font-bold">
              
            </button>
          </div>


          <div className="flex justify-center gap-2 mt-8">
            <span className="w-6 h-1 bg-slate-800 rounded-full cursor-pointer"></span>
            <span className="w-6 h-1 bg-slate-300 rounded-full cursor-pointer hover:bg-slate-400"></span>
            <span className="w-6 h-1 bg-slate-300 rounded-full cursor-pointer hover:bg-slate-400"></span>
          </div>
        </div>
      </div>


      <div className="bg-white py-24 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          

          <div className="lg:col-span-5 space-y-6">
            <p className="text-xs font-bold tracking-widest text-slate-800 uppercase">Createx Certificate</p>
            <h2 className="text-4xl font-extrabold text-slate-900 leading-tight">Your expertise will<br/>be confirmed</h2>
            <p className="text-slate-500 text-sm leading-relaxed">
              We are accredited by international professional organizations and institutes:
            </p>
            

            <div className="pt-4 flex flex-wrap items-center gap-6 opacity-70">
              <span className="font-bold text-slate-800 text-sm tracking-tighter flex items-center gap-1">
                <span className="text-red-500 text-lg">♦</span> Del Mar Strategy
              </span>
              <span className="font-semibold text-slate-600 text-xs tracking-widest uppercase border-l pl-4 border-gray-300">
                Sentinal Consulting
              </span>
              <span className="font-bold text-emerald-600 text-sm flex items-center gap-1 border-l pl-4 border-gray-300">
                🟢 National
              </span>
            </div>
          </div>


          <div className="lg:col-span-7 flex justify-center">
            <div className="w-full max-w-xl bg-white border-12 border-slate-900 p-8 shadow-2xl relative rounded-sm aspect-[1.41] flex flex-col justify-between overflow-hidden">

              <div className="absolute top-0 left-0 w-32 h-32 bg-liner-to-br from-cyan-400 via-pink-400 to-yellow-400 opacity-20 rounded-br-full pointer-events-none"></div>
              <div className="absolute bottom-0 right-0 w-40 h-40 bg-liner-to-tl from-amber-400 via-red-400 to-blue-500 opacity-30 rounded-tl-full pointer-events-none"></div>

              <div className="text-center space-y-1 pt-4 relative z-10">
                <span className="text-[10px] tracking-widest text-slawte-400 uppercase font-semibold">Certificate</span>
                <h3 className="text-2xl font-black text-red-500 tracking-wider uppercase">Certificate</h3>
                <p className="text-[9px] text-slate-400 uppercase tracking-tight">The certificate is presented to:</p>
              </div>

              <div className="text-center my-4 relative z-10">
                <h4 className="text-2xl font-serif font-bold text-slate-800 border-b border-gray-200 pb-2 max-w-xs mx-auto">Jacob William</h4>
                <p className="text-[9px] text-slate-400 mt-2 px-12 leading-relaxed">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
                </p>
              </div>


              <div className="flex justify-between items-end px-8 pb-2 relative z-10">
                <div className="text-center">
                  <p className="font-serif italic text-sm text-slate-700">Robert</p>
                  <p className="text-[8px] font-bold text-slate-400 border-t border-gray-200 pt-1 mt-1 w-20">Robert Douglas</p>
                </div>
                <div className="text-center">
                  <p className="font-serif italic text-sm text-slate-700">Adam</p>
                  <p className="text-[8px] font-bold text-slate-400 border-t border-gray-200 pt-1 mt-1 w-20">Adam Smith</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>


      <div className="bg-[#FFEBE5] py-20 px-6 text-center relative overflow-hidden">

        <div className="absolute bottom-0 left-0 w-full flex justify-between px-4 md:px-12 opacity-25 pointer-events-none select-none text-3xl">

        </div>

        <div className="max-w-2xl mx-auto relative z-10 space-y-4">
          <p className="text-xs font-bold tracking-widest text-slate-800 uppercase">Don't miss anything</p>
          <h2 className="text-3xl font-black text-slate-900 tracking-tight md:text-4xl">
            Subscribe to the Createx School<br/>announcements
          </h2>
          
          {/* Input va Tugma */}
          <div className="pt-6 flex flex-col sm:flex-row justify-center items-stretch gap-0 max-w-md mx-auto rounded-md overflow-hidden shadow-sm">
            <input 
              type="email" 
              className="grow px-5 py-3.5 bg-white border border-gray-300 sm:border-r-0 rounded-t-md sm:rounded-l-md sm:rounded-tr-none text-sm focus:outline-none focus:border-orange-500" 
              placeholder="Your working email" 
            />
            <button className="bg-[#FF5A36] hover:bg-[#e04a27] text-white font-bold text-sm px-8 py-3.5 rounded-b-md sm:rounded-r-md sm:rounded-bl-none transition-colors whitespace-nowrap">
              Subscribe
            </button>
          </div>
        </div>
      </div>

    </div>
  )
}
