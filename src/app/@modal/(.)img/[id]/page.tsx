import { getImage } from "~/server/queries"

export default async function ImgModal({
    params: {id: photoId}
} : {
    params: {id: string}
}) {
    const idAsNumber = Number(photoId)
    if (isNaN(idAsNumber)) throw new Error("Invalid photo id")

    const image = await getImage(idAsNumber)

    return <div className="w-96"><img src={image.url} alt={image.name} /></div>
}