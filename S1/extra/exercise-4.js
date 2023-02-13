const products = [
  { name: "Gorra de rodilla", sellCount: 10 },
  { name: "Pantalón de pana", sellCount: 302 },
  { name: "Reloj de papel albal", sellCount: 23 },
  { name: "Inpar de zapatos", sellCount: 6 },
];
let totalSellCount = 0
for (const product of products) {
    totalSellCount = totalSellCount + product.sellCount     
}
console.log(totalSellCount);