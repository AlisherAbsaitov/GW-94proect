import React, { useEffect, useState } from 'react'
//Nurmuhammad
export default function About() {
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    const root = document.documentElement

    if (darkMode) {
      root.setAttribute('data-theme', 'dark')
    } else {
      root.setAttribute('data-theme', 'light')
    }
  }, [darkMode])

  const features = [
    'Творческие курсы',
    'Опытные преподы',
    'Гибкое обучение',
    'Сертификаты',
  ]

  const courses = [
    {
      title: 'Курс креативного дизайна',
      image:
        'https://habrastorage.org/getpro/habr/upload_files/955/449/eb3/955449eb31e01aeb53062625bd4a5658.png',
    },
    {
      title: 'Курс веб-разработки',
      image:
        'https://siimtuni.edu.gh/wp-content/uploads/2023/11/Diploma-in-Web-Development-by-SIIMT.png',
    },
    {
      title: 'Курс цифрового маркетинга',
      image:
        'https://grndigitalacademy.com/wp-content/uploads/2025/06/Digital-Marketing-for-Students-Course-770x450.jpg',
    },
    {
      title: 'Курс UI/UX дизайна',
      image:
        'https://skillfloor.com/blog/uploads/images/202501/image_870x580_678f83c3e83bb.jpg',
    },
  ]

  const teachers = [
    {
      image:
        'https://www.shutterstock.com/image-photo/portrait-asian-old-man-wearing-260nw-2504971497.jpg',
    },
    {
      image:
        'https://www.shutterstock.com/image-photo/smiling-africanamerican-man-glasses-blue-260nw-2439457557.jpg',
    },
    {
      image:
        'https://www.shutterstock.com/image-photo/young-smiling-happy-teacher-smart-260nw-2509373949.jpg',
    },
    {
      image:
        'https://www.shutterstock.com/image-photo/happy-man-shows-laptop-front-260nw-2714478385.jpg',
    },
    {
      image:
        'https://www.shutterstock.com/shutterstock/photos/1120827725/display_1500/stock-photo-portrait-of-a-smiling-young-blonde-girl-holding-laptop-computer-and-showing-ok-gesture-isolated-1120827725.jpg',
    },
    {
      image:
        'https://img.freepik.com/premium-photo/strict-teacher-girl-with-glasses-yellow-background-makes-note-with-pen-notebook_102583-1197.jpg',
    },
    {
      image:
        'https://www.shutterstock.com/image-photo/excited-happy-senior-woman-typing-260nw-2410523443.jpg',
    },
    {
      image:
        'https://www.shutterstock.com/image-photo/happy-senior-man-laptop-on-260nw-2372595717.jpg',
    },
    
  ]

  return (
    <div className="min-h-screen bg-base-100 text-base-content transition-all duration-300">

      <header className="bg-base-100 border-b border-base-300 sticky top-0 z-50 backdrop-blur">

        <div className="container mx-auto px-4 py-4 flex items-center justify-between">

          <h1 className="text-2xl font-bold text-orange-500">
            Creative School
          </h1>

          <label className="swap swap-rotate">

            <input
              type="checkbox"
              checked={darkMode}
              onChange={() => setDarkMode(!darkMode)}
              className="toggle border-sky-400 bg-amber-300 [--tglbg:var(--color-sky-500)] checked:border-blue-800 checked:bg-blue-300 checked:[--tglbg:var(--color-blue-900)]"
            />

          </label>

        </div>
      </header>



      <section className="py-20">

        <div className="container mx-auto px-4 max-w-6xl">

          <div className="grid lg:grid-cols-2 gap-12 items-center">

            <div>

              <p className="text-xs uppercase tracking-[0.3em] text-orange-500 font-semibold mb-4">
                Добро пожаловать в Creative School
              </p>

              <h1 className="text-5xl font-bold leading-tight mb-6">
                Создай своё будущее в IT с нами
              </h1>

              <p className="leading-8 opacity-70 mb-8">
                С нашими курсами вы сможете освоить востребованные IT навыки
                и построить успешную карьеру в сфере технологий.
              </p>

              <button className="btn btn-warning rounded-full px-8">
                Подать заявку
              </button>

            </div>

            <img
              src="https://img.freepik.com/premium-vector/man-works-computer-illustration_333239-259.jpg"
              alt="Hero"
              className="w-full rounded-3xl shadow-2xl"
            />

          </div>

        </div>
      </section>

      <section className="py-20 bg-base-200">

        <div className="container mx-auto px-4 max-w-6xl text-center">

          <h2 className="text-3xl font-bold mb-14">
            Наши ключевые ценности
          </h2>

          <div className="grid md:grid-cols-4 gap-8">

            {features.map((item, i) => (
              <div
                key={i}
                className="card bg-base-100 shadow-xl"
              >
                <div className="card-body items-center text-center">

                  <div className="w-14 h-14 rounded-full bg-orange-200 mb-4"></div>

                  <h3 className="font-bold text-lg">
                    {item}
                  </h3>

                  <p className="opacity-70 text-sm">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </p>

                </div>
              </div>
            ))}

          </div>

        </div>
      </section>

      <section className="py-20">

        <div className="container mx-auto px-4 max-w-6xl">

          <h2 className="text-3xl font-bold text-center mb-14">
            Наши курсы
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">

            {courses.map((course, index) => (
              <div
                key={index}
                className="card bg-base-100 shadow-xl hover:scale-105 transition duration-300"
              >

                <figure>
                  <img
                    src={course.image}
                    alt={course.title}
                    className="w-full h-52 object-cover"
                  />
                </figure>

                <div className="card-body">

                  <h3 className="card-title text-base">
                    {course.title}
                  </h3>

                </div>

              </div>
            ))}

          </div>

        </div>
      </section>

      <section className="py-20 bg-base-200">

        <div className="container mx-auto px-4 max-w-6xl">

          <h2 className="text-3xl font-bold text-center mb-14">
            Наши учителя
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">

            {teachers.map((teacher, index) => (
              <div
                key={index}
                className="card bg-base-100 shadow-xl hover:scale-105 transition duration-300"
              >

                <figure>
                  <img
                    src={teacher.image}
                    alt="Teacher"
                    className="w-full h-56 object-cover"
                  />
                </figure>

              </div>
            ))}

          </div>

        </div>
      </section>
      <section className="bg-neutral text-neutral-content">

        <div className="container mx-auto px-4 py-20 text-center">

          <h2 className="text-3xl font-bold mb-6">
            Присоединяйтесь к нам сегодня!
          </h2> 
          <p className="max-w-2xl mx-auto opacity-800">
            Мы — креативная школа, посвященная предоставлению
            лучшего онлайн-обучения.
          </p>
          <button className="btn btn-primary mt-6">Записаться на курс </button>
        </div>
      </section>
      <footer className="bg-neutral text-neutral-content">

        <div className="container mx-auto px-2 py-8 text-center">
        </div>

      </footer>

    </div>
  )
}