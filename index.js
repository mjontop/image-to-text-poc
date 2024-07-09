import pkg from "tesseract.js";
const { recognize } = pkg;

recognize("image.png", "eng", {
  logger: (m) => console.log(m),
})
  .then(({ data: { text } }) => {
    console.log("Extracted Text:", text);
  })
  .catch((err) => {
    console.error("Error:", err);
  });
