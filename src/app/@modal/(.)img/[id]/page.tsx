import { Modal } from "~/app/@modal/(.)img/[id]/modal"
import FullPageImageView from "~/components/full-image-page"

export default function ImgModal({
    params: {id: photoId}
} : {
    params: {id: string}
}) {
    const idAsNumber = Number(photoId)
    if (isNaN(idAsNumber)) throw new Error("Invalid photo id")

    return <Modal><FullPageImageView id={idAsNumber} /></Modal> 
}