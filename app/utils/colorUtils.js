hexToRGB = function (hex) {
  const rgbHex = parseInt(hex.slice(1), 16);
  const r = rgbHex >> 16;
  const g = rgbHex >> 8 & 0xFF;
  const b = rgbHex & 0xFF;
  return `rgb(${r},${g},${b})`;
};

export default hexToRGB;
