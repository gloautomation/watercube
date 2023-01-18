import { LiveboardEmbed } from "@thoughtspot/visual-embed-sdk/react";

export const LiveboardComp = () => {
  return (
    <LiveboardEmbed
      frameParams={{ height: "80vw" }}
      liveboardId={"a2055789-d632-4570-8b40-f70afd3e4b43"}
    />
  );
};
