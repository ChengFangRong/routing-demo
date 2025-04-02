import { StaticImageData } from "next/image";
import photo1 from "./photos/cat1.jpg";
import photo2 from "./photos/cat2.jpg"; 
import photo3 from "./photos/cat3.jpg";
import photo4 from "./photos/cat4.jpeg";

export type CatImage = {
    id: string;
    name: string;
    src: StaticImageData;
};

const catImages: CatImage[] = [
    {
        id: "1",
        name: "jack",
        src: photo1,
    },
    {
        id: "2",
        name: "gio",
        src: photo2,
    },
    {
        id: "3",
        name: "meow",
        src: photo3,
    },
    {
        id: "4",
        name: "woof",
        src: photo4,
    }
]    

export default catImages;