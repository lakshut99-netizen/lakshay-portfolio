export default function Branding(){

return (

<main className="min-h-screen bg-[#07070a] text-white px-8 py-20">

<h1 className="text-5xl font-bold">
Brand Identity Projects
</h1>

<p className="text-gray-400 mt-5 text-xl">
Premium logo designs, posters and visual branding concepts.
</p>


<div className="grid md:grid-cols-3 gap-8 mt-12">


<img
src="/projects/logo.jpg"
className="rounded-3xl"
/>


<img
src="/projects/poster.jpg"
className="rounded-3xl"
/>


</div>


</main>

)

}