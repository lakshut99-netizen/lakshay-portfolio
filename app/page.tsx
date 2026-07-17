export default function Home() {
  return (
    <main className="min-h-screen bg-[#0b0b0f] text-white">

      {/* Hero */}
      <section className="min-h-screen flex flex-col items-center justify-center text-center px-6">

        <p className="uppercase tracking-[8px] text-yellow-400 text-sm">
          Graphic Designer
        </p>

        <h1 className="text-6xl md:text-8xl font-black mt-6">
          Lakshay Thakur
        </h1>

        <p className="text-gray-400 max-w-2xl mt-6 text-lg">
          I create premium branding, logo designs, social media creatives,
          UI designs and modern visual identities.
        </p>

        <div className="flex gap-5 mt-10">
          <button className="bg-yellow-400 text-black px-8 py-4 rounded-xl font-bold hover:scale-105 transition">
            Hire Me
          </button>

          <button className="border border-white/30 px-8 py-4 rounded-xl hover:bg-white hover:text-black transition">
            View Portfolio
          </button>
        </div>

      </section>export default function Home() {
  return (
    <main className="min-h-screen bg-[#0b0b0f] text-white">

      {/* Hero */}
      <section className="min-h-screen flex flex-col items-center justify-center text-center px-6">

        <p className="uppercase tracking-[8px] text-yellow-400 text-sm">
          Graphic Designer
        </p>

        <h1 className="text-6xl md:text-8xl font-black mt-6">
          Lakshay Thakur
        </h1>

        <p className="text-gray-400 max-w-2xl mt-6 text-lg">
          I create premium branding, logo designs, social media creatives,
          UI designs and modern visual identities.
        </p>

        <div className="flex gap-5 mt-10">
          <button className="bg-yellow-400 text-black px-8 py-4 rounded-xl font-bold hover:scale-105 transition">
            Hire Me
          </button>

          <button className="border border-white/30 px-8 py-4 rounded-xl hover:bg-white hover:text-black transition">
            View Portfolio
          </button>
        </div>

      </section>      {/* Portfolio */}
      <section className="max-w-6xl mx-auto px-6 py-24">
        <h2 className="text-4xl font-bold mb-10">
          Portfolio
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-zinc-900 rounded-2xl p-6">
            <h3 className="text-xl font-bold">Logo Design</h3>
            <p className="text-gray-400 mt-3">
              Premium logo & brand identity.
            </p>
          </div>

          <div className="bg-zinc-900 rounded-2xl p-6">
            <h3 className="text-xl font-bold">Social Media</h3>
            <p className="text-gray-400 mt-3">
              Creative Instagram posts and ads.
            </p>
          </div>

          <div className="bg-zinc-900 rounded-2xl p-6">
            <h3 className="text-xl font-bold">UI/UX</h3>
            <p className="text-gray-400 mt-3">
              Modern website and app design.
            </p>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="max-w-6xl mx-auto px-6 py-24 text-center">
        <h2 className="text-4xl font-bold">Contact Me</h2>

        <p className="text-gray-400 mt-6">
          Email: lakshut99@gmail.com.com
        </p>

        <button className="mt-8 bg-yellow-400 text-black px-8 py-4 rounded-xl font-bold">
          Hire Me
        </button>
      </section>

    </main>
  );
}