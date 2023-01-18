import React from "react";
import { init, AuthType } from "@thoughtspot/visual-embed-sdk";
import { Search } from "./Search";
import { SearchComp } from "./SearchComponent";
import { FullAppComp } from "./FullAppComponent";
import { LiveboardComp } from "./LiveboardComponent";


init({
  thoughtSpotHost: "https://my1.thoughtspot.cloud",
  authType: AuthType.None
});

export const Home = () => {
  return (
    <div>
      <FullAppComp />
    </div>
  );
};
