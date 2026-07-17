{/* Work */}
<section id="work" className="px-8 py-20">

  <h2 className="text-4xl font-bold text-center mb-10">
    Selected Work
  </h2>

  <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">

    {[
      {
        title: "Poster Design",
        image: "/projects/poster.jpg"
      },
      {
        title: "Logo Design",
        image: "/projects/logo.jpg"
      }

    ].map((project) => (

      <div
        key={project.title}
        className="rounded-3xl overflow-hidden bg-white/5 border border-white/10"
      >

        <img
          src={project.image}
          alt={project.title}
          className="w-full h-72 object-cover"
        />

        <div className="p-5">
          <h3 className="text-2xl font-bold">
            {project.title}
          </h3>

          <p className="text-gray-400">
            Graphic Design Project
          </p>
        </div>

      </div>

    ))}

  </div>

</section>