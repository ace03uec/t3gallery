import { clerkClient } from "@clerk/nextjs/server";
import { getImage } from "~/server/queries"

export default async function FullPageImageView(props: {id: number}) {
    const image = await getImage(props.id)

    const client = await clerkClient()
    const ulinfo = await client.users.getUser(image.userId)

    return <div className="flex w-full h-full min-w-0">
            <div className="flex-shrink flex justify-center items-center">
            <img className="object-contain" src={image.url} alt={image.name} />
            </div>
            <div className="w-48 flex flex-col flex-shrink-0 border-l ">
                <div className="border-b text-lg text-center p-2 ">{image.name}</div>

                <div className="flex flex-col p-2 ">
                    <span>Uploaded By</span>
                    <span>{ulinfo.fullName}</span>
                </div>
                <div className="flex flex-col p-2 ">
                    <span>Created On</span>
                    <span>{new Date(image.createdAt).toLocaleDateString()}</span>
                </div>
            </div>
        </div>
}