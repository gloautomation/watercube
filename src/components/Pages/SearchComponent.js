import { SearchEmbed } from "@thoughtspot/visual-embed-sdk/react";

export const SearchComp = () => {
  return (
    <SearchEmbed
      frameParams={{ height: "80vw" }}
      answerId={"YOUR-ANSWERID-HERE"}
    />
  );
};
