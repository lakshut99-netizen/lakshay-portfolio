export default function Home() {

  const projects = [
    {
      title: "AI Brand Identity Design",
      category: "Logo & Branding",
      image: "/projects/branding.png"
    },
    {
      title: "Social Media Campaign",
      category: "Instagram Post Design",
      image: "/projects/post social media.jpg"
    },
    {
      title: "Poster Advertisement",
      category: "Creative Poster Design",
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
      desc:"Premium Instagram posts and marketing creatives."
    },
    {
      title:"UI/UX Design",
      desc:"Modern interfaces and digital experiences."
    }
  ];

  return (
    <main className="bg-[#07070a] text-white min-h-screen">

      <h1 className="text-6xl text-center pt-40">
        Lakshay Thakur
      </h1>

    </main>
  );
}