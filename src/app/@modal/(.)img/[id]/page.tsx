import { Modal } from "~/app/@modal/(.)img/[id]/modal";
import FullPageImageView from "~/components/full-image-page";

export default function ImgModal({
  params: { id: photoId },
}: {
  params: { id: string };
}) {
  return (
    <Modal>
      <FullPageImageView id={photoId} />
    </Modal>
  );
}
