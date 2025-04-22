import Image from "next/image";
import { Countdown } from "../ui/Countdown";
import { Play } from "../icons/icons";


export default function ComingSoon() {
  return (
    <>
      <section className="py-7 border-y border-border">

        <div className="relative max-h-[52rem] overflow-hidden">
          <Image
            src="/banner/chainsaw-man-banner.jpg"
            width={3000}
            height={3000}
            alt="Banner"
          />

          <div className="absolute top-0 size-full bg-linear-to-r from-black/70 to-transparent">
            <div className="h-full p-[7.5rem] flex gap-10">
              {/* poster */}
              <div className="w-[400px] h-full rounded-3xl bg-amber-50">
                {/* <Image /> */}
              </div>

              {/* poster content */}
              <div className="text-white max-w-[700px] flex flex-col justify-between items-start">
                <div className="space-y-5">
                  <h2 className="text-5xl font-bold">Chainsawman</h2>
                  <p className="text-xl text-text-secondary font-medium">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Reprehenderit magnam enim nam debitis expedita magnam enim
                    nam debitis expedita.
                  </p>
                  <ul className="text-xl text-text-secondary font-medium border border-gray-500 rounded-lg py-2 px-4 inline-flex gap-3">
                    <li>Action</li> <span className="bg-gray-500 w-[1px]" />
                    <li>2025</li> <span className="bg-gray-500 w-[1px]" />
                    <li>EP-24</li> <span className="bg-gray-500 w-[1px]" />
                    <li>8.5</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-2xl font-semibold">Characters:</h3>
                  <ul className="mt-2 text-xl font-medium flex gap-6">
                    <li>Makima</li>
                    <li>Denji</li>
                    <li>Pochita</li>
                    <li>Power</li>
                    <li>Himeno</li>
                    <li>Aki Hayakawa</li>
                  </ul>
                </div>

                <div>
                  <button className="bg-primary py-3 px-7 rounded-xl text-xl font-bold text-black cursor-pointer flex items-center fill-black hover:translate-x-1 transition-all">
                    <Play/>
                    Watch Trailer
                  </button>
                </div>

                <Countdown comingDate="2025-06-01" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
