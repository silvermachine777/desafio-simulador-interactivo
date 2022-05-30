let productName = prompt(
    "ingresa el numero del producto a comprar: 1.Aceites esecinales , 2.Velas aromaticas, 3.Desodorante natural "
);
if (productName != "") {
    let quantity = parseInt(prompt("ingrese cantidad de productos: "));
    let productValue;
    const TAX = 19;
    let city = prompt(
        "ingrese el numero que corresponde a la ciudad de envio: 1.Manizales, 2.Medllin, 3.Bogota"
    );
    let shippingCoste;
    let producTotalValue;

    function getProductValue(productName, quantity) {
        switch (productName) {
            case "1":
                productValue = 20000 * quantity;
                return productValue;
                break;
            case "2":
                productValue = 50000 * quantity;
                return productValue;
                break;

            case "3":
                productValue = 100000 * quantity;
                return productValue;
                break;
            default:
                return "no esta disponible";
        }
    }

    function getShippingCoste(city, shippingCoste) {
        switch (city) {
            case "1":
                shippingCoste = 2000;
                return shippingCoste;
                break;
            case "2":
                shippingCoste = 5000;
                return shippingCoste;
                break;
            case "3":
                shippingCoste = 8000;
                return shippingCoste;
                break;
            default:
                return "el valor ingresado no existe ";
        }
    }

    let totalValue = getProductValue(productName, quantity);
    let totalShipping = getShippingCoste(city, shippingCoste);

    function getProductTotalValue(totalValue, totalShipping, TAX) {
        producTotalValue = totalValue + totalValue * (TAX / 100) + totalShipping;
        return producTotalValue;
    }

    alert(
        "el total del producto con envio es: $" +
        getProductTotalValue(totalValue, totalShipping, TAX)
    );
} else {
    alert("¡ingrese un valor que se encuentre en la lista! ")
}