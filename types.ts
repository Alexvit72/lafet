import { StaticImageData } from "next/image";

export type Item = {
  id: string,
  image: StaticImageData,
  title: string,
  description: string,
  price: string,
};
