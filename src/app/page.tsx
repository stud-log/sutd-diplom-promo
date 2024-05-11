import { AboutUs, HeaderBlock, RoadMap } from "@/widgets/Blocks";

import Head from "next/head";
import { VideoPlayer } from "@/widgets/VideoPlayer";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Stud.log</title>
      </Head>
      <HeaderBlock />
      <VideoPlayer />
      <AboutUs />
      <RoadMap />
    </div>
  );
}
