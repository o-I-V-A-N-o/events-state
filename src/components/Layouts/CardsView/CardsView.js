import ShopCard from "./ShopCard";

function CardsView(props) {
    
  return (
    <>
      <div className="card-view">
        {props.product.map(item => 
          <ShopCard product={item}/>
        )}
      </div>
    </>
  );
}

export default CardsView;