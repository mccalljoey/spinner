const positions = ["|", "/", "-", "\\", "|", "/", "-", "\\", "|"];
let ms = 100;

for (let position of positions) {
  setTimeout(() => {
    process.stdout.write('\r' + position)
  }, ms);
  ms += 200;
};