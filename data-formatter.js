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
  b_b: 'blackbishop',
  b_w: 'whitebishop',
  k_b: 'blackking',
  k_w: 'whiteking',
  n_b: 'blackknight',
  n_w: 'whiteknight',
  p_b: 'blackpawn',
  p_w: 'whitepawn',
  q_b: 'blackqueen',
  q_w: 'whitequeen',
  r_b: 'blackrook',
  r_w: 'whiterook',
};

fs.readdir(`./image-set`, (err, files) => {
  if (err) console.log(err);
  files.forEach(file => {
    fs.rename(
      `./image-set/${file}`,
      `image-set/${file.replace(/\.png/, '')}`,
      err => console.log(err),
    );
    // fs.rename(
    //   `./image-set/${file}`,
    //   `image-set/${file.replace(/^._./, file[rename])}`,
    //   err => console.log(err),
    // );
  });
});
