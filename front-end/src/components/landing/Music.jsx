import { Plus } from "../icons/icons";
import Card from "../ui/Card";
import { Carousel } from "../ui/Carousel";
import SectionHead from "../ui/SectionHead";

export default function Music() {
  return (
    <>
      <section>
        <div className="container mx-auto relative p-4 border-2 border-y-0 border-dashed border-border">
          {/* <Plus className="absolute left-0 top-0 -translate-[50%]"/>
                <Plus className="absolute right-0 top-0 -translate-y-[50%] translate-x-[50%]"/> */}
          <Plus className="absolute left-0 bottom-0 -translate-x-[50%] translate-y-[50%]" />
          <Plus className="absolute right-0 bottom-0 translate-x-[50%] translate-y-[50%]" />
          <SectionHead children="Expected Music🎧" />

          <Carousel gap={2.5} autoscroll={3} indicator>
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
          </Carousel>
        </div>
      </section>
    </>
  );
}
