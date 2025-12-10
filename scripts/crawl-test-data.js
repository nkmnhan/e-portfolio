const imgSrcs = [...document.images]
  .filter(img => !img.src.startsWith("data:image/"))
  .map(img => img.src);

console.log(imgSrcs);