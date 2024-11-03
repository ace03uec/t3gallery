import { clerkClient } from "@clerk/nextjs/server";
import { getImage, deleteImage } from "~/server/queries";
import { Button } from "./ui/button";
import { redirect, RedirectType } from "next/navigation";

export default async function FullPageImageView(props: { id: string }) {
  const idAsNumber = Number(props.id);
  if (isNaN(idAsNumber)) throw new Error("Invalid photo id");

  const image = await getImage(idAsNumber);
  const client = await clerkClient();
  const ulinfo = await client.users.getUser(image.userId);

  return (
    <div className="flex h-full w-full min-w-0">
      <div className="flex flex-shrink items-center justify-center">
        <img className="object-contain" src={image.url} alt={image.name} />
      </div>
      <div className="flex w-48 flex-shrink-0 flex-col border-l">
        <div className="border-b p-2 text-center text-lg">{image.name}</div>

        <div className="flex flex-col p-2">
          <span>Uploaded By</span>
          <span>{ulinfo.fullName}</span>
        </div>
        <div className="flex flex-col p-2">
          <span>Created On</span>
          <span>{new Date(image.createdAt).toLocaleDateString()}</span>
        </div>
        <div className="flex flex-col p-2">
          <form
            action={async () => {
              "use server";
              await deleteImage(idAsNumber);
              redirect("../");
            }}
          >
            <Button type="submit" variant="destructive">
              Delete
            </Button>
          </form>
        </div>
        <div className="flex flex-col p-2">
          <form
            action={async () => {
              "use server";
              console.log("touched go home");
              redirect("/");
            }}
          >
            <Button type="submit" variant="default">
              Go Home
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}
