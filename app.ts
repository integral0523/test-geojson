import { writeFileSync } from "fs";
import { read } from "shapefile";

const shp = "./tokyo2020/r2ka13.shp";

read(shp, undefined, {
  encoding: "shift_jis",
})
  .then(function (geojson) {
    geojson.features.forEach((feature) => {
      if (!feature.properties) return;
      feature.properties["stroke"] = "#000";
      feature.properties["stroke-opacity"] = 0.8;
      feature.properties["stroke-width"] = 2;
      feature.properties["fill"] = "#ff0";
      feature.properties["fill-opacity"] = 0.5;
    });
    writeFileSync("result.geojson", JSON.stringify(geojson, null, "  "));
  })
  .catch(function (error) {
    console.log(error);
  });
