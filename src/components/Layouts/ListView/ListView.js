import ShopItem from "./ShopItem";

function ListView(props) {
    
  return (
    <>
      <div className="card-view">
        {props.product.map(item => 
          <ShopItem product={item}/>
        )}
      </div>
    </>
  );
}

export default ListView;