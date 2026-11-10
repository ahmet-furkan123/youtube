
function formatNumber(value) {
  return new Intl.NumberFormat("tr", {
    notation: "compact",
    compactDisplay: "short",
    maximumFractionDigits: 1,
  }).format(value);
}

export default formatNumber;