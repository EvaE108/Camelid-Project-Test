import { Model } from "./models.js";

// Keep this empty for now so the loader won't try to fetch any GLB files.
let bonesList = [];

export default new Model(
  "Camelid",
  bonesList,
  0.032,
  [0, 8, 0],
  "Camelid Model",
  "/img/models/preview/camelid.png"
);
