import { AppEmbed, Page } from "@thoughtspot/visual-embed-sdk/react";

export const FullAppComp = () => {
  return (
    <AppEmbed
      frameParams={{ height: "80vw" }}
      fullHeight="true"
      pageId="Page.Home"
    />
  );
};
