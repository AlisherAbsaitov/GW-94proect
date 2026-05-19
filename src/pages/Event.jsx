import React from 'react';

// Hasan Nazirjov 
export default function Event() {
  return (
    <div className="bg-white text-slate-800 font-sans antialiased">
      
      
      <header className="bg-gradient-to-b from-orange-50 to-white pt-6 pb-20 relative overflow-hidden">
        
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
          <div className="flex items-center space-x-12">
            <div className="text-2xl font-black tracking-wider text-slate-900">
              CREATE<span className="text-orange-600">X</span>
            </div>
            <nav className="hidden md:flex space-x-8 font-medium text-slate-600 text-sm">
              <a href="#about" className="hover:text-orange-600 transition">About Us</a>
              <a href="#courses" className="hover:text-orange-600 transition">Courses</a>
              <a href="#events" className="text-orange-600 font-semibold">Events</a>
              <a href="#blog" className="hover:text-orange-600 transition">Blog</a>
              <a href="#contacts" className="hover:text-orange-600 transition">Contacts</a>
            </nav>
          </div>
          <div className="flex items-center space-x-6">
            <button className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-6 py-2.5 rounded-md text-sm font-semibold hover:opacity-90 transition shadow-sm">
              Get consultation
            </button>
            <button className="flex items-center space-x-2 text-sm font-medium text-slate-600 hover:text-orange-600 transition">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
              <span>Log In / Register</span>
            </button>
          </div>
        </div>

        
        <div className="max-w-4xl mx-auto text-center mt-20 px-4 relative z-10">
          <span className="text-xs font-bold uppercase tracking-widest text-orange-600 bg-orange-100/60 px-3 py-1 rounded">
            Online Lecture
          </span>
          <h1 className="text-3xl md:text-5xl font-black text-slate-900 mt-4 leading-tight">
            Formation of the organizational structure of the company in the face of uncertainty
          </h1>
        </div>
        
        
        <div className="absolute top-1/3 left-10 text-orange-200 opacity-40 text-4xl hidden lg:block">❖ ❖ ❖</div>
        <div className="absolute top-1/4 right-12 w-16 h-16 rounded-full bg-orange-200/30 blur-xl hidden lg:block"></div>
      </header>

      
      <main className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
          
          
          <div className="lg:col-span-2 space-y-8">
            <h2 className="text-3xl font-black text-slate-900">We will talk about:</h2>
            
            <div className="space-y-4">
              
              <div className="border-b border-slate-100 pb-4">
                <button className="flex items-start text-left w-full font-bold text-lg text-slate-900 group py-2">
                  <span className="text-orange-500 mr-3 text-xl">—</span>
                  <span><span className="text-orange-600 font-medium">Theme 1.</span> Aliquet lectus urna viverra in odio.</span>
                </button>
                <p className="text-slate-500 text-sm leading-relaxed pl-7 mt-2">
                  Nulla amet, sagittis potenti rhoncus sit. Elit lectus nec pulvinar aliquet donec enim, ornare. Lacus facilisi curabitur turpis varius mauris. Nisi, tempus risus, odio mi suscipit sed. Curabitur faucibus porttitor quis sem lacus, arcu feugiat facilisis. Commodo nunc orci vitae accumsan id.
                </p>
              </div>

              
              <div className="border-b border-slate-100 pb-2">
                <button className="flex items-center text-left w-full font-bold text-base text-slate-800 hover:text-orange-600 transition py-2">
                  <span className="text-orange-500 mr-3 text-xl">+</span>
                  <span><span className="text-orange-600 font-medium">Theme 2.</span> Orci commodo, viverra orci mollis ut euismod.</span>
                </button>
              </div>

              
              <div className="border-b border-slate-100 pb-2">
                <button className="flex items-center text-left w-full font-bold text-base text-slate-800 hover:text-orange-600 transition py-2">
                  <span className="text-orange-500 mr-3 text-xl">+</span>
                  <span><span className="text-orange-600 font-medium">Theme 3.</span> Sagittis vitae facilisi rutrum amet mauris quisque vel.</span>
                </button>
              </div>

              
              <div className="border-b border-slate-100 pb-2">
                <button className="flex items-center text-left w-full font-bold text-base text-slate-800 hover:text-orange-600 transition py-2">
                  <span className="text-orange-500 mr-3 text-xl">+</span>
                  <span><span className="text-orange-600 font-medium">Theme 4.</span> In id dolor quis nunc, urna hendrerit pharetra.</span>
                </button>
              </div>
            </div>
          </div>

          
          <div className="bg-white rounded-xl shadow-xl p-8 border border-slate-50 sticky top-6">
            <div className="space-y-6">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block mb-1">Time</span>
                <span className="text-lg font-bold text-orange-600">August 5, 11:00 – 14:00</span>
                <p className="text-xs text-slate-400 mt-1">Metus turpis sit lorem lacus, in elit tellus lacus.</p>
              </div>
              
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block mb-1">Price</span>
                <span className="text-lg font-bold text-slate-900">Free</span>
                <p className="text-xs text-slate-400 mt-1">Nulla sem adipiscing adipiscing felis fringilla. Adipiscing mauris quam ac elit tristique dis.</p>
              </div>

              <a href="#facebook" className="text-xs font-bold text-orange-600 underline block hover:text-orange-700">
                EVENT ON FACEBOOK
              </a>

              <button className="w-full bg-orange-600 text-white text-sm font-bold py-3.5 rounded-md hover:bg-orange-700 transition tracking-wide shadow-md shadow-orange-600/10">
                Join the event
              </button>
            </div>
          </div>

        </div>
      </main>

      
      <section className="max-w-7xl mx-auto px-4 py-16 border-t border-slate-50">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
          
          <div className="md:col-span-5 flex justify-center relative">
            <div className="absolute inset-0 bg-yellow-400 rounded-2xl transform -rotate-3 scale-95 z-0"></div>
            <img 
              src="" 
              alt="Kathryn Murphy" 
              className="rounded-2xl z-10 w-full object-cover aspect-[4/5] shadow-lg relative"
            />
          </div>

          
          <div className="md:col-span-7 space-y-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-slate-400 block mb-1">Speaker</span>
              <h2 className="text-4xl font-black text-slate-900">Kathryn Murphy</h2>
              <p className="text-slate-500 font-medium text-sm mt-1">Analyst and Marketing specialist in IT company</p>
            </div>

            <p className="text-slate-500 text-sm leading-relaxed">
              Mattis adipiscing aliquam eu proin metus a iaculis faucibus. Tempus curabitur venenatis, vulputate venenatis fermentum ante. Nisl, amet id semper semper quis commodo, consequat. Massa rhoncus sit morbi odio. Sit maecenas nibh consectetur vel diam. Sem vulputate molestie laoreet at massa sed pharetra. Ac commodo platea id habitasse proin. Nullam sit nec ipsum posuere non. Nam vel aliquam tristique sollicitudin interdum quam.
            </p>

            
            <div className="flex items-center space-x-8 opacity-40 py-2">
              <span className="font-bold text-xs tracking-wider">Del Mar Strategy</span>
              <span className="font-bold text-xs tracking-wider">SENTINAL CONSULTING</span>
              <span className="font-bold text-xs tracking-wider">NATIONAL</span>
            </div>

            
            <div className="flex space-x-4 text-slate-400 text-lg">
              <a href="#" className="hover:text-orange-600 transition"><i className="fab fa-facebook-f"></i></a>
              <a href="#" className="hover:text-orange-600 transition"><i className="fab fa-instagram"></i></a>
              <a href="#" className="hover:text-orange-600 transition"><i className="fab fa-twitter"></i></a>
              <a href="#" className="text-orange-600 transition"><i className="fab fa-linkedin-in"></i></a>
            </div>
          </div>
        </div>
      </section>

      
      <section className="bg-slate-50/50 py-20 border-t border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-5">
              <span className="text-xs font-bold uppercase tracking-widest text-slate-400 block mb-2">For Whom?</span>
              <h2 className="text-3xl md:text-4xl font-black text-slate-900 leading-tight">Who will benefit from the event:</h2>
            </div>
            <div className="lg:col-span-7 space-y-4">
              {[
                "Specialists with more than 1 year of active work experience",
                "Mobile app designers who want to improve their skills in solving business problems, creating and testing human-centered interfaces",
                "Professional designers who want to feel more confident in UX"
              ].map((text, idx) => (
                <div key={idx} className="flex items-start space-x-3">
                  <span className="text-orange-500 mt-1">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" /></svg>
                  </span>
                  <p className="text-slate-600 text-sm leading-relaxed">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      
      <section className="max-w-7xl mx-auto px-4 py-16">
        <div className="bg-orange-100/60 rounded-xl p-8 md:p-12 flex flex-col lg:flex-row items-center justify-between gap-8 relative overflow-hidden">
          <div className="flex items-center space-x-6 z-10">
            <div className="w-24 h-24 bg-white/80 rounded-lg flex items-center justify-center shadow-inner hidden sm:flex">
              <svg className="w-12 h-12 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>
            </div>
            <div>
              <h3 className="text-xl md:text-2xl font-black text-slate-900">Don't want to miss the best events?</h3>
              <p className="text-slate-800 font-bold text-lg">Subscribe to our newsletter!</p>
            </div>
          </div>
          
          <div className="w-full lg:w-auto z-10">
            <form className="flex flex-col sm:flex-row gap-3">
              <input 
                type="email" 
                placeholder="Your working email" 
                className="px-4 py-3 rounded-md text-sm bg-white border border-slate-200 focus:outline-none focus:ring-2 focus:ring-orange-500 w-full sm:w-64"
              />
              <button className="bg-orange-600 text-white px-6 py-3 rounded-md text-sm font-bold hover:bg-orange-700 transition whitespace-nowrap">
                Subscribe
              </button>
            </form>
            <label className="flex items-center space-x-2 mt-3 cursor-pointer text-xs text-slate-500">
              <input type="checkbox" defaultChecked className="rounded text-orange-600 focus:ring-orange-500 w-3.5 h-3.5" />
              <span>I agree to receive communications from Createx Online School</span>
            </label>
          </div>
        </div>
      </section>

      
      <section className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          <div className="space-y-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-slate-400 block mb-1">Don't miss the event</span>
              <h2 className="text-3xl font-black text-slate-900">Leave a request</h2>
            </div>

            <form className="space-y-4">
              <div>
                <label className="block text-xs font-medium text-slate-500 mb-1">Full Name</label>
                <input type="text" placeholder="Your full name" className="w-full px-4 py-3 rounded-md border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500"/>
              </div>
              <div>
                <label className="block text-xs font-medium text-slate-500 mb-1">Email</label>
                <input type="email" placeholder="Your working email" className="w-full px-4 py-3 rounded-md border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500"/>
              </div>
              <div>
                <label className="block text-xs font-medium text-slate-500 mb-1">Phone</label>
                <input type="tel" placeholder="Your phone number" className="w-full px-4 py-3 rounded-md border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500"/>
              </div>
              
              <button type="submit" className="w-full bg-orange-600 text-white font-bold py-3.5 rounded-md hover:bg-orange-700 transition text-sm shadow-md shadow-orange-600/10">
                Join the event
              </button>
              <p className="text-[11px] text-slate-400 mt-2">* You will receive a link to the online lecture in an email after registration.</p>
            </form>
          </div>

          
          <div className="flex justify-center">
            <img 
              src="" 
              alt="Illustration" 
              className="max-w-md w-full rounded-xl opacity-90 object-cover aspect-video shadow-md"
            />
          </div>
        </div>
      </section>

      
      <section className="bg-slate-50 py-20 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-end justify-between mb-10">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-slate-400 block mb-1">Check other online events</span>
              <h2 className="text-3xl font-black text-slate-900">You may be interested in</h2>
            </div>
            <div className="flex space-x-2">
              <button className="p-2.5 rounded-full border border-slate-200 bg-white hover:bg-orange-50 hover:text-orange-600 transition text-slate-600">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" /></svg>
              </button>
              <button className="p-2.5 rounded-full border border-slate-200 bg-white hover:bg-orange-50 hover:text-orange-600 transition text-slate-600">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" /></svg>
              </button>
            </div>
          </div>

          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { date: "05 Aug", time: "11:00 - 14:00", title: "Formation of the organizational structure of the company in the face of uncertainty.", type: "Online master-class" },
              { date: "24 Jul", time: "11:00 - 12:30", title: "Building a customer service department. Best Practices.", type: "Online lecture" },
              { date: "10 Jul", time: "9:00 - 14:00", title: "Find and evaluate: search and assessment tools for candidates.", type: "Online workshop" }
            ].map((ev, i) => (
              <div key={i} className="bg-white rounded-xl p-6 shadow-sm border border-slate-100 flex flex-col justify-between hover:shadow-md transition group">
                <div>
                  <div className="flex items-baseline space-x-3 mb-3">
                    <span className="text-xl font-black text-orange-600">{ev.date}</span>
                    <span className="text-xs text-slate-400">{ev.time}</span>
                  </div>
                  <h4 className="font-bold text-slate-900 text-sm mb-2 leading-snug group-hover:text-orange-600 transition line-clamp-3">
                    {ev.title}
                  </h4>
                  <p className="text-xs text-slate-400 mb-6">{ev.type}</p>
                </div>
                <button className="w-full py-2 border border-orange-500 text-orange-600 font-bold text-xs rounded hover:bg-orange-600 hover:text-white transition tracking-wide uppercase">
                  View more
                </button>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <div className="inline-flex items-center space-x-4">
              <span className="font-bold text-slate-900">Do you want more?</span>
              <button className="bg-orange-600 text-white text-xs font-bold px-6 py-3 rounded-md hover:bg-orange-700 transition uppercase tracking-wider shadow-sm">
                Explore all events
              </button>
            </div>
          </div>
        </div>
      </section>

      
      <footer className="bg-[#1e212c] text-slate-400 text-xs py-16">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-12 gap-8 mb-12">
          
          <div className="md:col-span-4 space-y-4">
            <div className="text-xl font-black text-white tracking-wider">
              CREATE<span className="text-orange-500">X</span>
            </div>
            <p className="text-slate-500 leading-relaxed text-[11px]">
              Createx Online School is a leader in online studying. We have lots of courses and programs from the main market experts. We provide relevant approaches to online learning, internships and employment in the largest companies in the country.
            </p>
            <div className="flex space-x-3 pt-2 text-base text-slate-500">
              <a href="#" className="hover:text-white transition"><i className="fab fa-facebook-f"></i></a>
              <a href="#" className="hover:text-white transition"><i className="fab fa-twitter"></i></a>
              <a href="#" className="hover:text-white transition"><i className="fab fa-youtube"></i></a>
              <a href="#" className="hover:text-white transition"><i className="fab fa-telegram-plane"></i></a>
              <a href="#" className="hover:text-white transition"><i className="fab fa-instagram"></i></a>
              <a href="#" className="hover:text-white transition"><i className="fab fa-linkedin-in"></i></a>
            </div>
          </div>

          
          <div className="md:col-span-2 space-y-3">
            <h5 className="text-white font-bold uppercase tracking-wider text-[11px]">Site Map</h5>
            <ul className="space-y-2 text-slate-500">
              <li><a href="#" className="hover:text-white transition">About Us</a></li>
              <li><a href="#" className="hover:text-white transition">Courses</a></li>
              <li><a href="#" className="hover:text-white transition">Events</a></li>
              <li><a href="#" className="hover:text-white transition">Blog</a></li>
              <li><a href="#" className="hover:text-white transition">Contacts</a></li>
            </ul>
          </div>

          <div className="md:col-span-2 space-y-3">
            <h5 className="text-white font-bold uppercase tracking-wider text-[11px]">Courses</h5>
            <ul className="space-y-2 text-slate-500">
              <li><a href="#" className="hover:text-white transition">Marketing</a></li>
              <li><a href="#" className="hover:text-white transition">Management</a></li>
              <li><a href="#" className="hover:text-white transition">HR & Recruiting</a></li>
              <li><a href="#" className="hover:text-white transition">Design</a></li>
              <li><a href="#" className="hover:text-white transition">Development</a></li>
            </ul>
          </div>

          <div className="md:col-span-2 space-y-3">
            <h5 className="text-white font-bold uppercase tracking-wider text-[11px]">Contact Us</h5>
            <ul className="space-y-2 text-slate-500">
              <li><a href="tel:4055550128" className="hover:text-white transition">(405) 555-0128</a></li>
              <li><a href="mailto:hello@createx.com" className="hover:text-white transition">hello@createx.com</a></li>
            </ul>
          </div>

          
          <div className="md:col-span-2 space-y-3">
            <h5 className="text-white font-bold uppercase tracking-wider text-[11px]">Sign up to our newsletter</h5>
            <div className="relative">
              <input 
                type="email" 
                placeholder="Email address" 
                className="w-full bg-white/10 rounded border border-white/20 px-3 py-2 text-[11px] text-white focus:outline-none focus:border-orange-500 pr-8"
              />
              <button className="absolute right-2 top-2.5 text-white opacity-60 hover:opacity-100 transition">
                →
              </button>
            </div>
            <p className="text-[9px] text-slate-600 leading-tight">
              *Subscribe to our newsletter to receive communications and early updates from Createx School.
            </p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 pt-6 border-t border-slate-800 flex justify-between items-center text-slate-600 text-[10px]">
          <span>© All rights reserved. Made with ❤️ by Createx Studio</span>
          <button onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})} className="hover:text-white uppercase font-bold tracking-wider transition">
            Go to top
          </button>
        </div>
      </footer>

    </div>
  );
}