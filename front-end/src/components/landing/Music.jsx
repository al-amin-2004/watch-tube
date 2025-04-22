import { Plus } from "../icons/icons";
import Card from "../ui/Card";
import { Carousel } from "../ui/Carousel";
import SectionHead from "../ui/SectionHead";
import musicData from "@/lib/testdata.json";

export default function Music() {
  return (
    <>
      <section>
        <div className="container mx-auto relative p-4 border-2 border-t-0 border-dashed border-border">
          {/* <Plus className="absolute left-0 top-0 -translate-[50%]"/>
                <Plus className="absolute right-0 top-0 -translate-y-[50%] translate-x-[50%]"/> */}
          <Plus className="absolute left-0 bottom-0 -translate-x-[50%] translate-y-[50%]" />
          <Plus className="absolute right-0 bottom-0 translate-x-[50%] translate-y-[50%]" />
          <SectionHead children="Expected Music🎧" />

          <Carousel gap={2.5} autoscroll={3} indicator>
            {musicData.map((music) => (
              <Card key={music.id} posterimgSrc={"/poster/"+music.poster} name={music.title} types={music.type.join(" ")}></Card>
            ))}
          </Carousel>
        </div>
      </section>
    </>
  );
}
