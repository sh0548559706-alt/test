function finalPrice(price, discount) {
    let final = price - (price * discount / 100);
    return final;
}