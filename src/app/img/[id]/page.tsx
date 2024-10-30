import FullPageImageView from "~/components/full-image-page";

export default function ImgPage({
  params: { id: photoId },
}: {
  params: { id: string };
}) {
  return <FullPageImageView id={photoId} />;
}
