import { AboutUs, HeaderBlock, RoadMap } from "@/widgets/Blocks";

import { VideoPlayer } from "@/widgets/VideoPlayer";

export default function Home() {
  return (
    <div>
      <HeaderBlock />
      <VideoPlayer />
      <AboutUs />
      <RoadMap />
    </div>
  );
}
