import fs from "fs";

const folderName: string = process.argv[2] || "HTML";

fs.mkdir("Dogs", { recursive: true }, (err: any) => {
  console.log("IN THE CALLBACK!!");
  if (err) throw err;
});
try {
  fs.mkdirSync(folderName);
  fs.writeFileSync(`${folderName}/index.html`);
  fs.writeFileSync(`${folderName}/app.js`);
  fs.writeFileSync(`${folderName}/styles.css`);
} catch (e) {
  console.log("SOMETHING WENT WRONG!!!");
  console.log(e);
}
