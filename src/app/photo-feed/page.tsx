import Link from "next/link";
import cats from "./cats";
import Image from "next/image";

export default function Home() {
    return (
        <main className="container mx-auto">
            <h1 className="text-center text-3xl font-bold my-4">
                kitties!!
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                {cats.map(({id , name, src }) => (
                    <Link key={id} href={`/photo-feed/${id}`}>
                        <Image
                            alt={name}
                            src={src}
                            className="w-full object-cover aspect-square"
                        />
                    </Link>
                ))}
            </div>
        </main>
    );         
}

