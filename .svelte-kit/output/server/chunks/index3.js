import { s as svgs } from "./svgs.js";
const svgsData = svgs.map((svg, index) => {
  return { id: index, ...svg };
});
export {
  svgsData as s
};
