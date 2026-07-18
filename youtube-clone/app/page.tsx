import Image from "next/image";
import {VideoCard} from "./components/VideoCard";

export default function Home() {
  return (
   <div>
<VideoCard
  title="Learn English with Suits"
  image="/photo.png"
  thumbImg="/logo.jpg"
  author="Learn English with TV Series"
  views="2.6M views"
  timestamp="3 years ago"
/>

   </div>
  );
}
