let filterPrice = (price) => {
  if(typeof price !== "number") {
    return 0
  }

  return "￥" + price.toFixed(2)
}