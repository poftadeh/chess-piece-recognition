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

const rename = {
  'b_b.png': 'blackbishop',
  'b_w.png': 'whitebishop',
  'k_b.png': 'blackking',
  'k_w.png': 'whiteking',
  'n_b.png': 'blackknight',
  'n_w.png': 'whiteknight',
  'p_b.png': 'blackpawn',
  'p_w.png': 'whitepawn',
  'q_b.png': 'blackqueen',
  'q_w.png': 'whitequeen',
  'r_b.png': 'blackrook',
  'r_w.png': 'whiterook',
};

fs.readdir(`./image-set`, (err, files) => {
  if (err) console.log(err);
  files.forEach(file => {
    fs.rename(
      `./images/${file}`,
      `images/${file.replace(/^._./, file[rename])}`,
      err => console.log(err),
    );
  });
});
