export default function Home() {
  return (
    <main className="min-h-screen bg-[#0b0b0f] text-white">

      {/* Navbar */}
      <nav className="fixed top-0 w-full backdrop-blur-md bg-black/30 border-b border-white/10 px-8 py-5 flex justify-between items-center z-50">
        <h1 className="text-2xl font-bold tracking-wider">
          LAKSHAY
        </h1>

        <div className="hidden md:flex gap-8 text-gray-300">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#work">Work</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>


      {/* Hero */}
      <section className="min-h-screen flex items-center justify-center px-6 text-center">

        <div>
          <p className="text-blue-400 text-lg mb-4">
            Graphic Designer
          </p>

          <h1 className="text-5xl md:text-7xl font-bold">
            Lakshay Thakur
          </h1>

          <p className="mt-6 text-gray-400 max-w-xl mx-auto text-lg">
            Creating premium visual identities, branding designs
            and digital experiences that make brands memorable.
          </p>

          <button className="mt-8 px-8 py-3 rounded-full bg-white text-black font-semibold">
            View My Work
          </button>

        </div>

      </section>


      {/* About */}
      <section id="about" className="px-8 py-20 max-w-5xl mx-auto">

        <h2 className="text-4xl font-bold mb-6">
          About Me
        </h2>

        <p className="text-gray-400 text-lg">
          I am Lakshay Thakur, a Graphic Designer specializing
          in branding, social media design, UI/UX and creative
          visual solutions.
        </p>

      </section>


      {/* Skills */}
      <section id="skills" className="px-8 py-20">

        <h2 className="text-4xl font-bold text-center mb-10">
          Skills
        </h2>

        <div className="grid md:grid-cols-4 gap-5 max-w-5xl mx-auto">

          {[
            "Photoshop",
            "Illustrator",
            "Figma",
            "CorelDRAW"
          ].map((skill)=>(
            <div
              key={skill}
              className="p-6 rounded-2xl bg-white/5 border border-white/10 text-center"
            >
              {skill}
            </div>
          ))}

        </div>

      </section>


      {/* Work */}
      <section id="work" className="px-8 py-20">

        <h2 className="text-4xl font-bold text-center mb-10">
          Selected Work
        </h2>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">

          {[1,2,3].map((item)=>(
            <div
              key={item}
              className="h-64 rounded-3xl bg-gradient-to-br from-gray-800 to-black border border-white/10 flex items-center justify-center"
            >
              Project {item}
            </div>
          ))}

        </div>

      </section>


      {/* Contact */}
      <section id="contact" className="py-20 text-center">

        <h2 className="text-4xl font-bold">
          Let's Create Something Amazing
        </h2>

        <p className="text-gray-400 mt-4">
          Available for freelance projects
        </p>

      </section>


      <footer className="border-t border-white/10 py-6 text-center text-gray-500">
        © 2026 Lakshay Thakur | Graphic Designer
      </footer>

    </main>
  );
}