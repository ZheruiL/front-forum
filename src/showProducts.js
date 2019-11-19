import React from 'react'
import logo from './logo.svg'
import './App.css'
import ReactDOM from 'react-dom'
import App from './App'

const products = []
products.push({ _id: 'product1', name: 'apple', price: 2 })
products.push({ _id: 'product2', name: 'tree', price: 3 })
products.push({ _id: 'product3', name: 'caonima', price: 4 })

function ProductTable (props) {
  const products = props.products
  return (
    <table>
      <thead>
        <tr>
          <th>
            NAME
          </th>
          <th>
            PRICE
          </th>
        </tr>
      </thead>
      <tbody>
        {products.map((product) =>
          <tr
            key={product._id}
          >
            <td>
              {product.name}
            </td>
            <td>
              {product.price}
            </td>
          </tr>

        )}
      </tbody>
    </table>
  )
}
function ShowProducts () {
  const productTable = <ProductTable products={products} />
  const element = <h1>hello World</h1>
  // ReactDOM.render(element, document.getElementById('root'))
  /* return (
    <a
      className='App-link'
      href='http://localhost/landen'
      rel='noopener noreferrer'
    >
      草泥马..
    </a>
  ) */
}
export default ProductTable
// export default ShowProducts
