import React from 'react'
// Oybek
const posts = [
  {
    id: 1,
    category: "Podcast",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop",
    title: "What is traffic arbitrage and does it really make money?",
    desc: "Pharetra ullamcorper placerat urna purus sed at...",
    author: "Luna",
    date: "Sep 15, 2023",
  },
  {
    id: 2,
    category: "Article",
    image:
      "https://images.unsplash.com/photo-1496171367470-9ed9a91ea931?q=80&w=1200&auto=format&fit=crop",
    title: "How to choose the best programming language for a beginner",
    desc: "Turpis id sapien nunc amet feugiat morbi...",
    author: "Brad",
    date: "Sep 14, 2023",
  },
  {
    id: 3,
    category: "Video",
    image:
      "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=1200&auto=format&fit=crop",
    title: "Should you choose a creative profession if you are attracted to creativity?",
    desc: "Curabitur vestibulum non venenatis vestibulum...",
    author: "Robert",
    date: "Aug 20, 2023",
  },
  {
    id: 4,
    category: "Article",
    image:
      "https://images.unsplash.com/photo-1517336714739-489689fd1ca8?q=80&w=1200&auto=format&fit=crop",
    title: "HR statistics jobs: interviews, hiring and recruiting",
    desc: "Aenean sed mollis tristique aliquet nunc...",
    author: "Rusal",
    date: "Aug 18, 2023",
  },
  {
    id: 5,
    category: "News",
    image:
      "https://images.unsplash.com/photo-1516321165247-4aa89a48be28?q=80&w=1200&auto=format&fit=crop",
    title: "What to do and who to tell if you want to get feedback on the product",
    desc: "Nunc hac accumsan commodo ultricies...",
    author: "Martha",
    date: "Jul 30, 2023",
  },
  {
    id: 6,
    category: "Podcast",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1200&auto=format&fit=crop",
    title: "What are color profiles and how they work in graphic design",
    desc: "Aliquam vulputate fermentum sollicitudin...",
    author: "Amanda",
    date: "Jul 24, 2023",
  },
];

const Blog = () => {
  return (
    <div className="min-h-screen bg-white px-6 py-10">
      <div className="text-center mb-10">
        <p className="uppercase text-gray-400 text-sm tracking-widest">
          Our Blog
        </p>
        <h1 className="text-4xl font-bold mt-2">Createx School Journal</h1>
      </div>
      <div className="flex flex-wrap justify-between items-center gap-4 mb-10">
        <div className="flex gap-3 flex-wrap">
          <button className="px-4 py-2 rounded-full bg-red-500 text-white text-sm">
            All
          </button>
          <button className="px-4 py-2 rounded-full border text-sm">
            Article
          </button>
          <button className="px-4 py-2 rounded-full border text-sm">
            Video
          </button>
          <button className="px-4 py-2 rounded-full border text-sm">
            Podcast
          </button>
        </div>

        <div className="flex items-center gap-3">
          <select className="border px-3 py-2 rounded-lg text-sm">
            <option>Newest</option>
            <option>Oldest</option>
          </select>

          <input
            type="text"
            placeholder="Search..."
            className="border px-4 py-2 rounded-lg text-sm outline-none"
          />
        </div>
      </div>
      <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-8">
        {posts.map((post) => (
          <div
            key={post.id}
            className="bg-white rounded-2xl overflow-hidden hover:shadow-xl transition"
          >
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-56 object-cover"
            />

            <div className="p-5">
              <span className="text-xs bg-gray-100 px-3 py-1 rounded-full">
                {post.category}
              </span>

              <div className="flex gap-3 text-xs text-gray-400 mt-3">
                <span>{post.author}</span>
                <span>|</span>
                <span>{post.date}</span>
              </div>

              <h2 className="text-lg font-semibold mt-4 leading-7">
                {post.title}
              </h2>

              <p className="text-gray-500 text-sm mt-3">{post.desc}</p>

              <button className="mt-5 text-red-500 font-medium hover:underline">
                Read More →
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center gap-3 mt-12">
        <button className="w-10 h-10 rounded-full bg-red-500 text-white">
          1
        </button>
        <button className="w-10 h-10 rounded-full border">2</button>
        <button className="w-10 h-10 rounded-full border">3</button>
        <button className="w-10 h-10 rounded-full border">4</button>
      </div>
    </div>
  );
};

export default Blog;
