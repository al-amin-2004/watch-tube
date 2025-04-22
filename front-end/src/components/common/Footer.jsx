import Link from "next/link";
import { Facebook, GooglePlus, RSS, Twitter, Vimeo } from "../icons/icons";
import { Logo } from "../ui/Logo";
import { categories, serieses, Supportes } from "@/lib/footerdata";

export default function Footer() {
  const socialIconStyle =
    "flex items-center gap-1.5 cursor-pointer hover:bg-surfac py-2 px-3 rounded border hover:border-primary duration-300";
  return (
    <section className="mt-10">
      <div className="container mx-auto">
        <div className="flex justify-between py-5 border-b-2 border-border">
          <Logo />

          <div className="flex gap-3 fill-white text-text-secondary text-sm">
            <Link href="#" className={`${socialIconStyle}`}>
              <Facebook />
              <p>Facebook</p>
            </Link>
            <Link href="#" className={`${socialIconStyle}`}>
              <Twitter />
              <p>Twitter</p>
            </Link>
            <Link href="#" className={`${socialIconStyle}`}>
              <GooglePlus />
              <p>Google+</p>
            </Link>
            <Link href="#" className={`${socialIconStyle}`}>
              <Vimeo />
              <p>Vimeo</p>
            </Link>
            <Link href="#" className={`${socialIconStyle}`}>
              <RSS />
              <p>RSS</p>
            </Link>
          </div>
        </div>

        <div className="flex justify-around text-text-secondary py-14">
          <div>
            <h4 className="text-2xl font-medium text-white">All Categories</h4>
            <ul className="grid grid-cols-2 gap-y-1 gap-x-16 mt-5">
              {categories.map((categ, idx) => (
                <li key={idx}>{categ}</li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-2xl font-medium text-white">TV Series</h4>
            <ul className="grid grid-cols-2 gap-y-1 gap-x-16 mt-5">
              {serieses.map((series, idx) => (
                <li key={idx}>{series}</li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-2xl font-medium text-white">Support</h4>
            <ul className="space-y-1 mt-5">
              {Supportes.map((support, idx) => (
                <li className="cursor-pointer" key={idx}>
                  {support}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <footer className="text-text-secondary text-center py-2.5 bg-surface">
        © Copyright 2025 | All right reserved
      </footer>
    </section>
  );
}
