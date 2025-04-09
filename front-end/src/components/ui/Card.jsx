import Image from "next/image";
import { Love, Play } from "../icons/icons";

export default function Card({ posterimgSrc, name, types }) {
  return (
    <div className="min-w-[15.5rem] h-[23rem] bg-surface rounded-lg border border-border">
      <div className="relative rounded-lg overflow-hidden h-[83%]">
        <div className="absolute size-full bg-surface/40 cursor-pointer opacity-0 hover:opacity-100 flex justify-center items-center transition-all">
          <Love className="absolute top-3 right-3 fill-white hover:fill-primary" />
          <div className="size-[3.5rem] bg-white rounded-full ring-6 ring-white/40 hover:ring-red-700 flex justify-center items-center duration-400">
            <Play />
          </div>
        </div>
        <Image
          className="size-full"
          src={posterimgSrc}
          alt="*"
          width={500}
          height={500}
        />
      </div>
      <div className="p-1.5">
        <h3 className="text-xl text-white">{name}</h3>
        <p className="text-primary text-xs mt-1">{types}</p>
      </div>
    </div>
  );
}


