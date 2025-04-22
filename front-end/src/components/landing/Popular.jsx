import { Plus } from "../icons/icons";
import { Button } from "../ui/Button";
import Card from "../ui/Card";
import SectionHead from "../ui/SectionHead";
import musicData from "@/lib/testdata.json";

export default function Popular() {
  return (
    <>
      <section>
        <div className="container mx-auto relative p-4 border-2 border-t-0 border-dashed border-border">
          <Plus className="absolute left-0 top-0 -translate-[50%]" />
          <Plus className="absolute right-0 top-0 -translate-y-[50%] translate-x-[50%]" />
          <Plus className="absolute left-0 bottom-0 -translate-x-[50%] translate-y-[50%]" />
          <Plus className="absolute right-0 bottom-0 translate-x-[50%] translate-y-[50%]" />
          <SectionHead children="Most Popular" />

          <div className="flex flex-wrap gap-10 justify-center py-5">
            {musicData.map((music) => (
              <Card
                key={music.id}
                posterimgSrc={"/poster/" + music.poster}
                name={music.title}
                types={music.type.join(" ")}
              ></Card>
            ))}
          </div>

          <div className="flex justify-center py-5">
            <Button children="VIEW MORE" />
          </div>
        </div>
      </section>
    </>
  );
}
