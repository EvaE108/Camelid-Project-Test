// Camelid.js
import { Model } from "./models.js";

// keep the same bonesList as Canine (you can leave the big list exactly as is)

export default new Model(
  "Camelid",            // <- name shown in-app and used for model folder
  bonesList,            // same list as Canine
  0.032,                // same scale
  [0, 8, 0],            // same center
  "Camelid Model",      // label under the button
  "/img/models/preview/camelid.png" // (you can reuse the canine image for now)
);
