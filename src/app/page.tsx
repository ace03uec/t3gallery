import { SignedIn, SignedOut } from "@clerk/nextjs";
import Image from "next/image";
import { getMyImages } from "~/server/queries";

export const dynamic = "force-dynamic";

async function Images() {
  const images = await getMyImages();

  return (
    <>
          <div className="flex flex-wrap justify-center gap-4">
      {images.map((image) => (
          <div key={image.id} className="w-48 h-48 flex flex-col">
            <Image src={image.url} style={{objectFit: "contain"}} alt={image.name} className="object-contain" width={480} height={480}/>
            <div>{image.name}</div>
          </div>
      ))}
      </div>
    </>
  )
}

export default function HomePage() {
  return (
    <main className="font-sans">
      <SignedOut>
        <div className="w-full h-full text-2xl text-center">Please sign in above!</div>
      </SignedOut>
      <SignedIn>
        <Images />
      </SignedIn>
    </main>
  );
}
