function ShopCard(props) {
    
  return (
    <>
      <div className="shop-cards">
        <table>
          <tr>
            <td className="product-name" colspan="2">
              <h2>{props.product.name}</h2>
            </td>
          </tr>
          <tr>
            <td colspan="2">
              <h3>{props.product.color}</h3>
            </td>
          </tr>
          <tr>
            <td colspan="2">
              <img className="img-cards" src={props.product.img} />
            </td>
          </tr>
          <tr>
            <td className="price-cards" width="50%">
              <h2>{props.product.price}</h2>
            </td>
            <td width="50%">
              <button className="button-cards" onClick={() => console.log("ADD TO CARD")}>ADD TO CART</button>
            </td>
          </tr>
        </table>
      </div>
    </>
  );
}

export default ShopCard;