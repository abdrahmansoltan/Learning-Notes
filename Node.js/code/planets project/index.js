const { parse } = require("csv-parse");
const fs = require("fs");

// Helpers
const parser = parse({
  // options
  comment: "#",
  columns: true, // now each row will be treaded as a js-object (key-value)
});
const isHabitable = (planet) => {
  return (
    planet.koi_disposition === "CONFIRMED" &&
    planet.koi_insol > 0.36 &&
    planet.koi_insol < 1.11 &&
    planet.koi_prad < 1.6
  );
};

const results = [];

// createReadStream --> deal with each row (stream) alone so that we can deal with scalable size --> using streams to handle data as it comes-in
fs.createReadStream("kepler_data.csv")
  .pipe(parser)
  .on("data", (data) => {
    if (isHabitable(data)) {
      results.push(data); // results are RAW-Buffers of Bytes so we need to parse it
    }
  })
  .on("error", () => console.log("found an error 🤦‍♀️"))
  .on("end", () => {
    const planetNames = results.map((planet) => planet.kepler_name);
    console.log(
      `found ${results.length} planets that are habitable they are : ${planetNames}`
    );
    console.log("done processing files");
  });
