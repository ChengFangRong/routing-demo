import Image from "next/image";
import catImages, {CatImage} from "../cats";


export default async function PhotoPage({
    params,
}: {
    params: {id: string};
}) {

    // console.log(params.id)
    const id= decodeURIComponent(params.id);
    const photo: CatImage = catImages.find((p) => p.id === id)!;

    return (
        <div className="container nx-auto my-10">
            <div className="w-1/2 mx-auto">
                <div>
                    <h1 className="text-center text-3xl font-bold my-4">{photo.name}</h1>
                </div>
                <Image
                    alt={photo.name}
                    src={photo.src}
                    className="w-full object-cover aspect-square"
                    width={500}
                    height={500}
                />

                <div>
                    <h3>{photo.name}</h3>
                </div>

            </div>
        </div>
    );
}