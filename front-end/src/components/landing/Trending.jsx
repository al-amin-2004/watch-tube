import { Plus } from "../icons/icons";
import { Button } from "../ui/Button";
import Card from "../ui/Card";
import SectionHead from "../ui/SectionHead";

export default function Trending() {
  return (
    <>
      <section>
        <div className="container mx-auto relative p-4 border-2 border-y-0 border-dashed border-border">
          <Plus className="absolute left-0 top-0 -translate-[50%]" />
          <Plus className="absolute right-0 top-0 -translate-y-[50%] translate-x-[50%]" />
          <Plus className="absolute left-0 bottom-0 -translate-x-[50%] translate-y-[50%]" />
          <Plus className="absolute right-0 bottom-0 translate-x-[50%] translate-y-[50%]" />
          <SectionHead children="Recently Trending🔥" />

          <div className="flex flex-wrap gap-10 justify-center py-5">
            <Card
              posterimgSrc="/poster/poster1.jpg"
              name="Tha Shadow"
              types="Action, Drama"
            />
            <Card
              posterimgSrc="/poster/poster2.jpg"
              name="Tha Shadow"
              types="Action, Drama"
            />
            <Card
              posterimgSrc="/poster/poster3.jpg"
              name="Tha Shadow"
              types="Action, Drama"
            />
            <Card
              posterimgSrc="/poster/poster4.jpg"
              name="Tha Shadow"
              types="Action, Drama"
            />
            <Card
              posterimgSrc="/poster/poster5.jpg"
              name="Tha Shadow"
              types="Action, Drama"
            />
            <Card
              posterimgSrc="/poster/poster4.jpg"
              name="Tha Shadow"
              types="Action, Drama"
            />
            <Card
              posterimgSrc="/poster/poster5.jpg"
              name="Tha Shadow"
              types="Action, Drama"
            />
            <Card
              posterimgSrc="/poster/poster1.jpg"
              name="Tha Shadow"
              types="Action, Drama"
            />
            <Card
              posterimgSrc="/poster/poster3.jpg"
              name="Tha Shadow"
              types="Action, Drama"
            />
            <Card
              posterimgSrc="/poster/poster2.jpg"
              name="Tha Shadow"
              types="Action, Drama"
            />
          </div>

          <div className="flex justify-center py-5">
            <Button children="VIEW MORE" />
          </div>
        </div>
      </section>
    </>
  );
}
