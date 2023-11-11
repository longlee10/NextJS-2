import Image from "next/image";
import pea from "@/public/img/pea.jpg";
import { Metadata } from "next";

const ImagePage = () => {
  return (
    <div className="relative h-screen">
      {/* <Image src={pea} alt="chickpea" /> */}
      <Image
        src="https://bit.ly/react-cover"
        alt="React"
        fill
        className="object-contain"
        sizes="(max-width: 480px) 100vw, (max-width: 768px) 50vw, 33vw"
        quality={100}
        priority
      />
    </div>
  );
};

export default ImagePage;

export async function generateMetadata(): Promise<Metadata> {
  const product = await fetch("");

  return {
    title: "product.title",
    description: "product.description",
  };
}
