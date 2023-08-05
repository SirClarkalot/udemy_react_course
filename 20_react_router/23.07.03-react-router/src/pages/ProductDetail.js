import { useParams, Link } from 'react-router-dom'

function ProductDetail() {
  const params = useParams();

  console.log(params)

  return <>
  <p>{params.productId}</p>
<h1>Product Details! </h1>
<p><Link to=".." relative='path'>Back</Link></p>
</>
}

export default ProductDetail;
