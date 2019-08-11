const fs = require('fs');
const path = require('path');

const counts = {
  'b_b.png': 1,
  'b_w.png': 1,
  'k_b.png': 1,
  'k_w.png': 1,
  'n_b.png': 1,
  'n_w.png': 1,
  'p_b.png': 1,
  'p_w.png': 1,
  'q_b.png': 1,
  'q_w.png': 1,
  'r_b.png': 1,
  'r_w.png': 1,
};

fs.readdir('./pieces/', (err, folders) => {
  folders.forEach(folder => {
    fs.readdir(`./pieces/${folder}`, (err, files) => {
      if (err) console.log(err);
      files.forEach(file =>
        fs.copyFile(
          `./pieces/${folder}/${file}`,
          `./image-set/${file}_${counts[file]++}.png`,
          error => console.log(error),
        ),
      );
    });
  });
});
