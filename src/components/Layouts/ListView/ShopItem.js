function ShopItem(props) {
    
  return (
    <>
      <div className="shop-item">
        <table width="100%">
          <tr>
            <td>
              <img className="img-item" src={props.product.img} />
            </td>
            <td className="product-name">
              <h2>{props.product.name}</h2>
            </td>
            <td>
              <h3>{props.product.color}</h3>
            </td>
            <td className="price-cards">
              <h2>{props.product.price}</h2>
            </td>
            <td>
              <button className="button-cards" onClick={() => console.log("ADD TO CARD")}>ADD TO CART</button>
            </td>
          </tr>
        </table>
      </div>
    </>
  );
}

export default ShopItem;