import ProductCard from "../components/ProductCard"
const PopularProducts = () => {
  return (
    <>
      <div className="flex xl:flex-row  flex-col flex-wrap content-center xl:justify-center gap-3">
        <ProductCard product="Pace X Series PCX-89" content="" btn="Buy" />
        <ProductCard product="Pace Y Series PCY-91" content="" btn="Coming Soon" />
        <ProductCard product="Pace Z Series PCZ-99" content="" btn="Coming Soon" />

      </div>
    </>
  )
}

export default PopularProducts
