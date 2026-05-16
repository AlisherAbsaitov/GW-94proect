// import React from 'react'
// // Hasan Zokirov
// export default function Home() {
//   return (
//     <div>Home</div>
//   )
// }
1
import { useState } from "react"

const courses = [
  {
    id: 1,
    category: "Abror",
    categoryBg: "#4ade80",
    title: "The Ultimate Google Ads Training Course",
    price: "$100",
    author: "Jerome Bell",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    id: 2,
    category: "Hasan",
    categoryBg: "#60a5fa",
    title: "Product Management Fundamentals",
    price: "$480",
    author: "Marvin McKinney",
    image: "https://randomuser.me/api/portraits/men/75.jpg",
  },
  {
    id: 3,
    category: "Bexruz",
    categoryBg: "#fb923c",
    title: "HR Management and Analytics",
    price: "$200",
    author: "Leslie Alexander Li",
    image: "https://randomuser.me/api/portraits/men/44.jpg",
  },
  {
    id: 4,
    category: "Zuxra",
    categoryBg: "#4ade80",
    title: "Brand Management & PR Communications",
    price: "$530",
    author: "Kristin Watson",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    id: 5,
    category: "shahnoza",
    categoryBg: "#60a5fa",
    title: "Business Development Management",
    price: "$400",
    author: "Dianne Russell",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
  },
  {
    id: 6,
    category: "Ansor",
    categoryBg: "#f472b6",
    title: "Graphic Design Basic",
    price: "$500",
    author: "Guy Hawkins",
    image: "https://randomuser.me/api/portraits/men/60.jpg",
  },
]

const team = [
  {
    name: "Dianne Russell",
    role: "Founder and CEO",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
  },
  {
    name: "Jerome Bell",
    role: "Founder and Program Director",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Kristin Watson",
    role: "Marketer, Curator of Marketing Course",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "Marvin McKinney",
    role: "PM, Curator of Management Course",
    image: "https://randomuser.me/api/portraits/men/75.jpg",
  },
]

const events = [
  {
    day: "05",
    month: "August",
    time: "11:00 - 14:00 • Online lecture",
    title: "Formation of the organizational structure of the company in the face of uncertainty.",
  },
  {
    day: "24",
    month: "July",
    time: "11:00 - 12:00 • Online lecture",
    title: "Building a customer service department. Best Practices.",
  },
  {
    day: "16",
    month: "July",
    time: "11:00 - 13:00 • Online lecture",
    title: "How to apply methods of speculative design in practice. Worldbuilding prototyping.",
  },
]

const benefits = ["Experienced Tutors", "Feedback & Support", "24/7 Online Library", "Community"]

const posts = [
  {
    tag: "Hacking",
    tagBg: "#4ade80",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=200&fit=crop&auto=format",
    title: "What is college and does it really make money?",
    action: "Learn",
  },
  {
    tag: "Management",
    tagBg: "#60a5fa",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&h=200&fit=crop&auto=format",
    title: "What to do and who to talk to if you want to get feedback on the product",
    action: "More",
  },
  {
    tag: "Design",
    tagBg: "#fb923c",
    image: "https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?w=400&h=200&fit=crop&auto=format",
    title: "Should you choose a creative profession if you are attracted to creativity?",
    action: "Read",
  },
]

export default function App() {
  const [activeBenefit, setActiveBenefit] = useState(0)
  const [email, setEmail] = useState("")

  return (
    <div style={{ fontFamily: "Segoe UI, sans-serif", color: "#1a1a1a", margin: 0, padding: 0 }}>

    
      <header style={{ background: "#fff", padding: "0 80px", boxShadow: "0 1px 4px rgba(0,0,0,0.08)", position: "sticky", top: 0, zIndex: 999 }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "space-between", height: 68 }}>
          <div style={{ fontWeight: 900, fontSize: 22 }}>
            <span style={{ color: "#1a1a1a" }}>CREATE</span>
            <span style={{ color: "#FF4500" }}>X</span>
          </div>
          <nav style={{ display: "flex", gap: 32 }}>
            {["About Us", "Courses", "Events", "Blog", "Contacts"].map((item) => (
              <a key={item} href="#" style={{ textDecoration: "none", color: "#555", fontSize: 14, fontWeight: 500 }}>
                {item}
              </a>
            ))}
          </nav>
          <div style={{ display: "flex", gap: 16, alignItems: "center" }}>
            <a href="#" style={{ fontSize: 13, color: "#555", textDecoration: "none" }}>🔒 Log in / Register</a>
            <button style={{ background: "#FF4500", color: "#fff", border: "none", borderRadius: 6, padding: "10px 22px", fontSize: 13, fontWeight: 600, cursor: "pointer" }}>
              Get consultation
            </button>
          </div>
        </div>
      </header>

      
      <section style={{ background: "#FFE8E0", padding: "80px 80px 0" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ maxWidth: 500 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 24 }}>
              <div style={{ width: 34, height: 34, background: "#FF4500", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontSize: 12 }}>▶</div>
              <span style={{ fontSize: 13, color: "#555" }}>Play showreel</span>
            </div>
            <h1 style={{ fontSize: 54, fontWeight: 900, lineHeight: 1.1, margin: "0 0 32px", color: "#1a1a1a" }}>
              Enjoy studying<br />with Createx<br />Online Courses
            </h1>
            <div style={{ display: "flex", gap: 12 }}>
              <button style={{ background: "transparent", border: "1.5px solid #999", color: "#444", borderRadius: 6, padding: "12px 26px", fontSize: 14, fontWeight: 500, cursor: "pointer" }}>
                About us
              </button>
              <button style={{ background: "#FF4500", color: "#fff", border: "none", borderRadius: 6, padding: "12px 26px", fontSize: 14, fontWeight: 600, cursor: "pointer" }}>
                Explore courses
              </button>
            </div>
          </div>
          <div>
            <img
              src="https://img.magnific.com/premium-vector/man-works-computer-illustration_333239-259.jpg"
              alt="Student"
              style={{ width: 460, height: 340, objectFit: "cover", borderRadius: 16, display: "block" }}
            />
          </div>
        </div>

        <div style={{ maxWidth: 1100, margin: "0 auto", display: "flex", gap: 48, alignItems: "center", paddingTop: 60, paddingBottom: 48 }}>
          {[
            { num: "1200", label: "Students graduated" },
            { num: "84", label: "Completed courses" },
            { num: "16", label: "Qualified tutors" },
            { num: "5", label: "Years of experience" },
          ].map((s, i) => (
            <div key={i} style={{ display: "flex", alignItems: "center", gap: 48 }}>
              <div>
                <span style={{ fontSize: 32, fontWeight: 900 }}>{s.num} </span>
                <span style={{ fontSize: 13, color: "#666" }}>{s.label}</span>
              </div>
              {i < 3 && <span style={{ color: "#FF4500", fontSize: 20 }}>•</span>}
            </div>
          ))}
        </div>
      </section>

      
      <section style={{ padding: "80px 80px", background: "#fff" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", display: "flex", gap: 60, alignItems: "center" }}>
          <img
            src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=500&h=380&fit=crop&auto=format"
            alt="Why Createx"
            style={{ width: 460, height: 360, objectFit: "cover", borderRadius: 14 }}
          />
          <div style={{ flex: 1 }}>
            <p style={{ color: "#FF4500", fontSize: 11, fontWeight: 700, letterSpacing: 2, marginBottom: 6, marginTop: 0 }}>WHO WE ARE</p>
            <h2 style={{ fontSize: 38, fontWeight: 900, marginBottom: 24, marginTop: 0 }}>Why Createx?</h2>
            <ul style={{ listStyle: "none", padding: 0, margin: "0 0 28px" }}>
              {[
                "A fermentum in morbi pretium aliquam adipiscing donec tempus.",
                "Volutpat placerat amet pulvinar lorem nisl.",
                "Consequat neque habitant gravida quisque elit bibendum id adipiscing sed.",
                "Etiam duis lobortis in fames ultrices commodo nibh.",
                "Tincidunt sagittis neque sem ac eget.",
                "Ultrices amet justo et eget quisque purus vulputate dapibus tortor.",
              ].map((item, i) => (
                <li key={i} style={{ display: "flex", gap: 10, marginBottom: 14, fontSize: 14, color: "#555", lineHeight: 1.5 }}>
                  <span style={{ color: "#FF4500", flexShrink: 0, marginTop: 2 }}>✓</span>
                  {item}
                </li>
              ))}
            </ul>
            <button style={{ background: "#FF4500", color: "#fff", border: "none", borderRadius: 6, padding: "12px 28px", fontSize: 14, fontWeight: 600, cursor: "pointer" }}>
              More about us
            </button>
          </div>
        </div>
      </section>

    
      <section style={{ padding: "80px 80px", background: "#f9f9f9" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: 36 }}>
            <div>
              <p style={{ color: "#FF4500", fontSize: 11, fontWeight: 700, letterSpacing: 2, marginBottom: 4, marginTop: 0 }}>READY TO LEARN?</p>
              <h2 style={{ fontSize: 38, fontWeight: 900, margin: 0 }}>Featured Courses</h2>
            </div>
            <button style={{ background: "transparent", border: "1.5px solid #FF4500", color: "#FF4500", borderRadius: 6, padding: "10px 22px", fontSize: 13, fontWeight: 600, cursor: "pointer" }}>
              View all courses
            </button>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
            {courses.map((course) => (
              <div key={course.id} style={{ background: "#fff", borderRadius: 12, display: "flex", overflow: "hidden", boxShadow: "0 2px 8px rgba(0,0,0,0.06)" }}>
                <div style={{ width: 110, height: 110, background: "#F5C842", flexShrink: 0, overflow: "hidden" }}>
                  <img src={course.image} alt={course.author} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                </div>
                <div style={{ padding: "16px 20px" }}>
                  <span style={{ background: course.categoryBg, color: "#fff", borderRadius: 4, padding: "2px 10px", fontSize: 11, fontWeight: 700 }}>
                    {course.category}
                  </span>
                  <p style={{ fontWeight: 700, fontSize: 14, margin: "8px 0 6px", lineHeight: 1.4 }}>{course.title}</p>
                  <p style={{ color: "#888", fontSize: 12, margin: 0 }}>
                    <span style={{ color: "#FF4500", fontWeight: 700 }}>{course.price}</span> | by {course.author}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      
      <section style={{ padding: "80px 80px", background: "#fff" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <p style={{ textAlign: "center", color: "#FF4500", fontSize: 11, fontWeight: 700, letterSpacing: 2, marginBottom: 6, marginTop: 0 }}>OUR BENEFITS</p>
          <h2 style={{ textAlign: "center", fontSize: 38, fontWeight: 900, marginBottom: 32, marginTop: 0 }}>That's how we do it</h2>
          <div style={{ display: "flex", justifyContent: "center", borderBottom: "2px solid #eee", marginBottom: 48 }}>
            {benefits.map((b, i) => (
              <button key={i} onClick={() => setActiveBenefit(i)} style={{
                padding: "12px 28px", fontSize: 13, fontWeight: 600, cursor: "pointer", border: "none", background: "transparent",
                borderBottom: activeBenefit === i ? "2px solid #FF4500" : "2px solid transparent",
                color: activeBenefit === i ? "#FF4500" : "#777", marginBottom: -2
              }}>
                {b}
              </button>
            ))}
          </div>
          <div style={{ display: "flex", gap: 60, alignItems: "center" }}>
            <div style={{ flex: 1 }}>
              <h3 style={{ fontSize: 28, fontWeight: 800, marginBottom: 16, marginTop: 0 }}>Only practicing tutors</h3>
              <p style={{ color: "#666", fontSize: 14, lineHeight: 1.8, marginBottom: 0 }}>
                Uma nibh, arcu cras nunc. Aenean quam est lobortis mi non fames dictum suspendisse. Morbi mauris cras massa at odio quis lectus mollis augue. Nunc sodales tortor sit diam mi amet massa. Fermentum diam diam velit vestibulum. Nulla nisl accumsan id adipiscing in posuere amet. Amet enim, nisl tempus vehicula.
              </p>
            </div>
            <div style={{ flex: 1 }}>
              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=500&h=320&fit=crop&auto=format"
                alt="Tutors"
                style={{ width: "100%", height: 300, objectFit: "cover", borderRadius: 12 }}
              />
            </div>
          </div>
        </div>
      </section>

      
      <section style={{ padding: "80px 80px", background: "#FFE8E0" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <p style={{ color: "#FF4500", fontSize: 11, fontWeight: 700, letterSpacing: 2, marginBottom: 6, marginTop: 0 }}>OUR EVENTS</p>
          <h2 style={{ fontSize: 38, fontWeight: 900, marginBottom: 32, marginTop: 0 }}>Lectures & workshops</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {events.map((e, i) => (
              <div key={i} style={{ background: "#fff", borderRadius: 10, padding: "22px 28px", display: "flex", alignItems: "center", gap: 28 }}>
                <div style={{ textAlign: "center", minWidth: 55 }}>
                  <div style={{ fontSize: 30, fontWeight: 900, color: "#FF4500", lineHeight: 1 }}>{e.day}</div>
                  <div style={{ fontSize: 12, color: "#999" }}>{e.month}</div>
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: 12, color: "#bbb", marginBottom: 6 }}>{e.time}</div>
                  <div style={{ fontSize: 14, fontWeight: 600 }}>{e.title}</div>
                </div>
                <button style={{ background: "#FF4500", color: "#fff", border: "none", borderRadius: 6, padding: "10px 22px", fontSize: 13, fontWeight: 600, cursor: "pointer", whiteSpace: "nowrap" }}>
                  View more
                </button>
              </div>
            ))}
          </div>
          <div style={{ textAlign: "center", marginTop: 36 }}>
            <span style={{ color: "#555", fontSize: 14, marginRight: 16 }}>Do you want more?</span>
            <button style={{ background: "#FF4500", color: "#fff", border: "none", borderRadius: 6, padding: "11px 24px", fontSize: 13, fontWeight: 600, cursor: "pointer" }}>
              Explore all topics
            </button>
          </div>
        </div>
      </section>

      
      <section style={{ padding: "80px 80px", background: "#fff" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", display: "flex", gap: 60, alignItems: "center" }}>
          <div style={{ flex: 1 }}>
            <p style={{ color: "#FF4500", fontSize: 11, fontWeight: 700, letterSpacing: 2, marginBottom: 6, marginTop: 0 }}>CREATEX CERTIFICATE</p>
            <h2 style={{ fontSize: 38, fontWeight: 900, marginBottom: 18, marginTop: 0 }}>Your expertise will be confirmed</h2>
            <p style={{ color: "#666", fontSize: 14, lineHeight: 1.7, marginBottom: 24 }}>
              We are accredited by international professional organisations and educational institutions.
            </p>
            <div style={{ display: "flex", gap: 12 }}>
              {["GetSME Strategy", "Hubspot", "Salesforce"].map((org) => (
                <span key={org} style={{ background: "#f0f0f0", borderRadius: 6, padding: "7px 14px", fontSize: 12, fontWeight: 600, color: "#555" }}>{org}</span>
              ))}
            </div>
          </div>
          <div style={{ flex: 1, display: "flex", justifyContent: "center" }}>
            <div style={{ background: "#fff", border: "1px solid #e0e0e0", borderRadius: 14, padding: "36px 48px", boxShadow: "0 8px 32px rgba(0,0,0,0.10)", textAlign: "center", minWidth: 320 }}>
              <p style={{ color: "#bbb", fontSize: 11, letterSpacing: 3, marginBottom: 8, marginTop: 0 }}>CERTIFICATE</p>
              <p style={{ color: "#666", fontSize: 13, marginBottom: 10 }}>THE CERTIFICATE IS PRESENTED TO:</p>
              <p style={{ fontSize: 24, fontWeight: 900, color: "#1a1a1a", margin: "0 0 20px" }}>Jacob William</p>
              <div style={{ borderTop: "1px solid #eee", paddingTop: 16, display: "flex", justifyContent: "space-around" }}>
                <div>
                  <div style={{ width: 70, borderTop: "1.5px solid #333", margin: "0 auto 6px" }}></div>
                  <div style={{ fontSize: 11, color: "#aaa" }}>Robert</div>
                </div>
                <div>
                  <div style={{ width: 70, borderTop: "1.5px solid #333", margin: "0 auto 6px" }}></div>
                  <div style={{ fontSize: 11, color: "#aaa" }}>Adam</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      
      <section style={{ padding: "80px 80px", background: "#f9f9f9" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: 36 }}>
            <div>
              <p style={{ color: "#FF4500", fontSize: 11, fontWeight: 700, letterSpacing: 2, marginBottom: 4, marginTop: 0 }}>BEST TUTORS ARE ALL HERE</p>
              <h2 style={{ fontSize: 38, fontWeight: 900, margin: 0 }}>Meet our team</h2>
            </div>
            <div style={{ display: "flex", gap: 8 }}>
              <button style={{ width: 36, height: 36, borderRadius: "50%", border: "1.5px solid #ccc", background: "#fff", cursor: "pointer", fontSize: 14 }}>←</button>
              <button style={{ width: 36, height: 36, borderRadius: "50%", border: "none", background: "#FF4500", color: "#fff", cursor: "pointer", fontSize: 14 }}>→</button>
            </div>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 20 }}>
            {team.map((member, i) => (
              <div key={i} style={{ borderRadius: 12, overflow: "hidden", background: "#fff", boxShadow: "0 2px 8px rgba(0,0,0,0.07)" }}>
                <div style={{ height: 200, background: "#F5C842", position: "relative", overflow: "hidden" }}>
                  <img src={member.image} alt={member.name} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                  <div style={{ position: "absolute", bottom: 10, left: 10, display: "flex", gap: 6 }}>
                    {["f", "in"].map((s) => (
                      <span key={s} style={{ width: 26, height: 26, background: "rgba(255,255,255,0.92)", borderRadius: 4, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 11, fontWeight: 700, color: "#333" }}>{s}</span>
                    ))}
                  </div>
                </div>
                <div style={{ padding: "14px 16px" }}>
                  <p style={{ fontWeight: 700, fontSize: 14, margin: "0 0 4px" }}>{member.name}</p>
                  <p style={{ fontSize: 12, color: "#aaa", margin: 0 }}>{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      
      <section style={{ padding: "80px 80px", background: "#fff" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", textAlign: "center" }}>
          <p style={{ color: "#FF4500", fontSize: 11, fontWeight: 700, letterSpacing: 2, marginBottom: 6, marginTop: 0 }}>TESTIMONIALS</p>
          <h2 style={{ fontSize: 38, fontWeight: 900, marginBottom: 40, marginTop: 0 }}>What our students say</h2>
          <div style={{ maxWidth: 680, margin: "0 auto", background: "#f9f9f9", borderRadius: 16, padding: "44px 52px" }}>
            <span style={{ fontSize: 52, color: "#FF4500", lineHeight: 1, display: "block", marginBottom: 16 }}>"</span>
            <p style={{ fontSize: 15, color: "#555", lineHeight: 1.8, marginBottom: 28 }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Justo, proin lectus aquam viverra mus tellus. Consequat in eu femod vulputate dictum etiam ante. Pulvinar magna pharetra diam consectetuer luctus laoreet.
            </p>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 14 }}>
              <img
                src="https://randomuser.me/api/portraits/women/25.jpg"
                alt="Student"
                style={{ width: 50, height: 50, borderRadius: "50%", objectFit: "cover" }}
              />
              <div style={{ textAlign: "left" }}>
                <p style={{ fontWeight: 700, fontSize: 14, margin: 0 }}>Dianne Paco</p>
                <p style={{ fontSize: 12, color: "#bbb", margin: 0 }}>Graphic Course</p>
              </div>
            </div>
            <div style={{ display: "flex", justifyContent: "center", gap: 6, marginTop: 24 }}>
              {[0, 1, 2, 3, 4].map((dot) => (
                <span key={dot} style={{ width: dot === 0 ? 22 : 8, height: 8, borderRadius: 4, background: dot === 0 ? "#FF4500" : "#ddd", display: "inline-block" }}></span>
              ))}
            </div>
          </div>
        </div>
      </section>

      
      <section style={{ padding: "80px 80px", background: "#f9f9f9" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: 36 }}>
            <div>
              <p style={{ color: "#FF4500", fontSize: 11, fontWeight: 700, letterSpacing: 2, marginBottom: 4, marginTop: 0 }}>OUR BLOG</p>
              <h2 style={{ fontSize: 38, fontWeight: 900, margin: 0 }}>Latest posts</h2>
            </div>
            <button style={{ background: "#FF4500", color: "#fff", border: "none", borderRadius: 6, padding: "10px 22px", fontSize: 13, fontWeight: 600, cursor: "pointer" }}>
              Go to Blog
            </button>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20 }}>
            {posts.map((post, i) => (
              <div key={i} style={{ background: "#fff", borderRadius: 12, overflow: "hidden", boxShadow: "0 2px 8px rgba(0,0,0,0.06)" }}>
                <div style={{ height: 180, overflow: "hidden" }}>
                  <img src={post.image} alt={post.title} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                </div>
                <div style={{ padding: 20 }}>
                  <span style={{ background: post.tagBg, color: "#fff", borderRadius: 4, padding: "2px 10px", fontSize: 11, fontWeight: 700 }}>{post.tag}</span>
                  <p style={{ fontWeight: 700, fontSize: 14, margin: "12px 0 16px", lineHeight: 1.4 }}>{post.title}</p>
                  <button style={{ background: "transparent", border: "none", color: "#FF4500", fontWeight: 700, fontSize: 13, cursor: "pointer", padding: 0 }}>
                    {post.action} →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      
      <section style={{ padding: "80px 80px", background: "#FFE8E0" }}>
        <div style={{ maxWidth: 560, margin: "0 auto", textAlign: "center" }}>
          <p style={{ color: "#FF4500", fontSize: 11, fontWeight: 700, letterSpacing: 2, marginBottom: 8, marginTop: 0 }}>DON'T MISS ANYTHING</p>
          <h2 style={{ fontSize: 32, fontWeight: 900, marginBottom: 28, marginTop: 0 }}>Subscribe to the Createx School announcements</h2>
          <div style={{ display: "flex", gap: 8 }}>
            <input
              type="email"
              placeholder="Your email here"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={{ flex: 1, padding: "13px 16px", borderRadius: 6, border: "1px solid #ddd", fontSize: 14, outline: "none" }}
            />
            <button style={{ background: "#FF4500", color: "#fff", border: "none", borderRadius: 6, padding: "13px 26px", fontSize: 14, fontWeight: 600, cursor: "pointer" }}>
              Subscribe
            </button>
          </div>
        </div>
      </section>

    
      <footer style={{ background: "#1a1a2e", color: "#fff", padding: "36px 80px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div style={{ fontWeight: 900, fontSize: 22 }}>
            <span>CREATE</span><span style={{ color: "#FF4500" }}>X</span>
          </div>
          <nav style={{ display: "flex", gap: 28 }}>
            {["About Us", "Courses", "Events", "Blog", "Contacts"].map((item) => (
              <a key={item} href="#" style={{ color: "#aaa", textDecoration: "none", fontSize: 13 }}>{item}</a>
            ))}
          </nav>
          <p style={{ color: "#666", fontSize: 12, margin: 0 }}>© 2024 Createx. All rights reserved.</p>
        </div>
      </footer>

    </div>
  )
}

