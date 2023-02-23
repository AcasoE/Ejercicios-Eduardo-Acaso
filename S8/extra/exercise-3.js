async function traerPedidos() {
  const arrayPedidos = [];
  try {
    const pedidos = await fetch("http://localhost:3000/orders");
    const resultado = await pedidos.json();
    arrayPedidos.push(resultado);
  } catch (error) {
    console.log(error);
  }
  const pedidosOrdenados = arrayPedidos[0].sort(
    (a, b) => new Date(b.date) - new Date(a.date)
  );
  return pedidosOrdenados;
}
async function traerProductos() {
  try {
    const productos = await fetch("http://localhost:3000/products");
    const resultado = await productos.json();
    return resultado;
  } catch (error) {
    console.log(error);
  }
}

async function combinarProductos(arrayped, arrayprod) {
  const nuevoArray = [];
  for (const pedido of arrayped) {
    for (let producto1 of pedido.products) {
      for (const producto2 of arrayprod) {
        if (producto1.productId === producto2.id) {
          producto1.productId = producto2.name;
        }
      }
    }
    nuevoArray.push(pedido);
  }
  return nuevoArray;
}

const init = async () => {
  const pedidos = await traerPedidos();
  const productos = await traerProductos();
  const productosYPedidos = await combinarProductos(pedidos, productos);
  pintarPedidos(productosYPedidos)
};
init();


function pintarPedidos (array){
    const div$$ = document.getElementById("div")
    for (const pedido of array) {
     const divPedido$$ = document.createElement("div")
     const h3$$ = document.createElement("h3")
     h3$$.innerHTML = `Pedido nº: ${pedido.id}`
     const h4$$ = document.createElement("h4")
     h4$$.innerHTML = `Fecha: ${pedido.date}`
     divProductos$$ = document.createElement("div")
     h4Productos$$ = document.createElement("h4")
     h4Productos$$.innerHTML = "Productos"
     divProductos$$.appendChild(h4Productos$$)
     for(producto of pedido.products){
        const p$$ = document.createElement("p")
        p$$.innerHTML = `${producto.productId}: ${producto.quantity}` 
        divProductos$$.appendChild(p$$)
     }




     divPedido$$.appendChild(h3$$)
     divPedido$$.appendChild(h4$$)
     divPedido$$.appendChild(divProductos$$)
     div$$.appendChild(divPedido$$)
    }
}