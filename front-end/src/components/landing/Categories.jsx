import Image from "next/image";

export default function Categories() {
  return (
    <section className="py-12">
      <div className="w-[90%] mx-auto p-10 grid gap-x-5 grid-cols-3 bg-surface/55 rounded-3xl">
        <div className="flex flex-col justify-center gap-y-5">
          <h2 className="text-3xl font-bold text-white">Popular Categories</h2>
          <p className="text-text-secondary leading-5">
            At Visuals, you'll find a diverse range of content that's been
            neatly categorized to help you navigate.
          </p>
        </div>

        <div className="col-span-2 grid grid-cols-5 justify-items-center gap-6">
          {Array.from(Array(15).keys()).map((el) => (
           <div key={el}
           className="size-[12rem] rounded-xl bg-white/10">
           <div className="relative rounded-xl hover:translate-1.5 size-full transition-all bg-red-500">
           <h4 className="absolute bottom-3 left-4 text-lg text-white font-medium">
             Family
           </h4>
           </div>
         </div>
          ))}
        </div>
      </div>
    </section>
  );
}
