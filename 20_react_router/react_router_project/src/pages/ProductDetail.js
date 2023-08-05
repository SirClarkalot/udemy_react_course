import { useParams, Link } from "react-router-dom"


const ProductDetail = () => {
  const params = useParams();


  return (
    <>
      <h1>Product Details</h1>
      <p>{params.id}</p>
      <Link to={'..'} relative="path"><p>Back</p></Link>
    </>
  )
}

export default ProductDetail
