import { Button } from "../ui/Button";

export default function Hero() {
  return (
    <>
      <section className="py-7 border-b border-border">
        <div className="container mx-auto h-[42rem] bg-[url('/banner/banner1.jpg')] bg-cover bg-no-repeat rounded-lg p-24">
          <div className="w-[50%] space-y-7 text-white">
            <h2 className="text-5xl font-semibold">Movie Name</h2>

            <p className="text-text-secondary">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
              maxime inventore amet, magnam impedit quis dicta sunt et! Dicta
              est numquam tempora, pariatur enim distinctio, rerum voluptatibus
              quaerat quis optio unde voluptatem fuga repudiandae incidunt
              molestiae aperiam harum animi! Adipisci obcaecati perspiciatis hic
              a ut mollitia? Atque, beatae eaque? Nemo.
            </p>

            <p className="text-primary text-lg font-semibold mb-10">
              Action, Roamntic, Comedy
            </p>

            <Button>WATCH NOW</Button>
          </div>
        </div>
      </section>
    </>
  );
}
