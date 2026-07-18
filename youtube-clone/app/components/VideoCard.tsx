type VideoCardProps = {
  title: string;
  image: string;
  thumbImg: string;
  author: string;
  views: string;
  timestamp: string;
};

export function VideoCard({
  title,
  image,
  thumbImg,
  author,
  views,
  timestamp,
}: VideoCardProps) {
  return (
    <div className="w-80">
      <img className="rounded-xl" src={image} alt={title} />

      <div className="grid grid-cols-12 gap-2 mt-3">
        <div className="col-span-2">
          <img
            className="w-10 h-10 rounded-full"
            src={thumbImg}
            alt={author}
          />
        </div>

        <div className="col-span-10">
          <p className="font-semibold">{title}</p>

          <p className="text-gray-600 text-sm">{author}</p>

          <p className="text-gray-600 text-sm">
            {views} • {timestamp}
          </p>
        </div>
      </div>
    </div>
  );
}