hexToRGB = function (hex) {
  hex = parseInt(hex.slice(1), 16);
  let r = hex >> 16;
  let g = hex >> 8 & 0xFF;
  let b = hex & 0xFF;
  return `rgb(${r},${g},${b})`
};

export default hexToRGB;