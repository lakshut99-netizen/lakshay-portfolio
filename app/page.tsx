export default function Home() {

  const projects = [
    {
      title: "Brand Identity Design",
      category: "Logo & Branding",
      image: "/projects/logo.jpg"
    },
    {
      title: "Social Media Campaign",
      category: "Poster Design",
      image: "/projects/poster.jpg"
    },
    {
      title: "Digital Product Design",
      category: "UI/UX Design",
      image: "/projects/poster.jpg"
    }
  ];


  const skills = [
    "Brand Identity",
    "Logo Design",
    "Social Media Design",
    "UI/UX Design",
    "Packaging Design",
    "Motion Graphics"
  ];


  const services = [
    {
      title:"Branding",
      desc:"Complete visual identity, logos and brand guidelines."
    },
    {
      title:"Social Media",
      desc:"Premium Instagram posts, ads and marketing creatives."
    },
    {
      title:"UI/UX Design",
      desc:"Modern interfaces and digital experiences."
    }
  ];


  return (

<main className="bg-[#07070a] text-white min-h-screen">


{/* Navbar */}

<nav className="fixed top-0 w-full z-50 backdrop-blur-xl bg-black/40 border-b border-white/10">

<div className="max-w-6xl mx-auto px-6 py-5 flex justify-between">

<h1 className="text-2xl font-bold tracking-widest">
LAKSHAY
</h1>


<div className="hidden md:flex gap-8 text-gray-300">

<a href="#about">About</a>
<a href="#work">Work</a>
<a href="#services">Services</a>
<a href="#contact">Contact</a>

</div>

</div>

</nav>




{/* Hero */}

<section className="min-h-screen flex items-center justify-center text-center px-6">


<div>

<p className="text-blue-400 text-xl">
Graphic Designer
</p>


<h1 className="text-6xl md:text-8xl font-bold mt-5">
Lakshay Thakur
</h1>


<p className="max-w-2xl mx-auto mt-6 text-gray-400 text-lg">

Creating premium brand identities, visual designs
and digital experiences that make brands memorable.

</p>


<div className="mt-8 flex justify-center gap-4">

<button className="px-8 py-4 rounded-full bg-white text-black font-semibold">
View Work
</button>


<button className="px-8 py-4 rounded-full border border-white/20">
Resume
</button>

</div>


</div>


</section>





{/* About */}

<section id="about" className="max-w-6xl mx-auto px-6 py-24">


<h2 className="text-5xl font-bold">
About Me
</h2>


<p className="mt-6 text-gray-400 text-xl max-w-3xl">

I am Lakshay Thakur, a graphic designer focused on creating
modern branding systems, digital graphics and user experiences
for businesses and creators.

</p>


</section>





{/* Skills */}

<section className="px-6 py-24">


<h2 className="text-5xl font-bold text-center">
Skills
</h2>



<div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto mt-12">


{skills.map(skill=>(

<div
key={skill}
className="p-8 rounded-3xl bg-white/5 border border-white/10 text-center hover:bg-white/10 transition"
>

{skill}

</div>

))}


</div>


</section>





{/* Projects */}


<section id="work" className="px-6 py-24">


<h2 className="text-5xl font-bold text-center">
Featured Work
</h2>



<div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mt-12">


{projects.map(project=>(


<div
key={project.title}
className="rounded-3xl overflow-hidden bg-white/5 border border-white/10"
>


<img
src={project.image}
alt={project.title}
className="h-72 w-full object-cover"
/>


<div className="p-6">

<h3 className="text-2xl font-bold">
{project.title}
</h3>


<p className="text-blue-400 mt-2">
{project.category}
</p>


</div>


</div>


))}


</div>


</section>






{/* Services */}

<section id="services" className="px-6 py-24">


<h2 className="text-5xl font-bold text-center">
Services
</h2>


<div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mt-12">


{services.map(service=>(

<div
key={service.title}
className="p-8 rounded-3xl bg-white/5 border border-white/10"
>

<h3 className="text-3xl font-bold">
{service.title}
</h3>


<p className="text-gray-400 mt-4">
{service.desc}
</p>


</div>

))}


</div>


</section>







{/* Case Study */}

<section className="px-6 py-24 max-w-5xl mx-auto">


<h2 className="text-5xl font-bold">
Project Case Study
</h2>


<div className="mt-8 text-gray-400 text-lg space-y-4">

<p>
<b className="text-white">Challenge:</b>
Create a modern visual identity.
</p>

<p>
<b className="text-white">Solution:</b>
Designed logo system, colors and digital assets.
</p>

<p>
<b className="text-white">Result:</b>
Premium and consistent brand presence.
</p>


</div>


</section>







{/* Contact */}

<section id="contact" className="text-center px-6 py-24">


<h2 className="text-6xl font-bold">
Let's Create Something Amazing
</h2>


<p className="text-gray-400 mt-6 text-xl">
Available for freelance projects
</p>


<button className="mt-8 px-10 py-4 rounded-full bg-blue-500">
Contact Me
</button>


</section>





<footer className="border-t border-white/10 py-8 text-center text-gray-500">

© 2026 Lakshay Thakur | Graphic Designer

</footer>



</main>

  );
}