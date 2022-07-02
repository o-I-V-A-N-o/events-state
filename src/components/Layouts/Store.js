import CardsView from './CardsView/CardsView'
import ListView from './ListView/ListView'
import IconSwitch from './IconSwitch'
import { useState } from 'react';

function Store(props) {
  
  const [icon, setIcon] = useState ("view_list")
  
  const handleClicked = evt => {
    if (icon == "view_list") {
      setIcon("view_module")
    } 
    if (icon == "view_module") {
      setIcon("view_list")
    }
  }

  const products = [{
      name: "Nike Metcon 2",
      price: "130",
      color: "red",
      img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/1.jpg"
    }, {
      name: "Nike Metcon 2",
      price: "130",
      color: "green",
      img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/2.jpg"
    }, {
      name: "Nike Metcon 2",
      price: "130",
      color: "blue",
      img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/3.jpg"
    }, {
      name: "Nike Metcon 2",
      price: "130",
      color: "black",
      img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/4.jpg"
    }, {
      name: "Nike free run",
      price: "170",
      color: "black",
      img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/7.jpg"
    }, {
      name: "Nike Metcon 3",
      price: "150",
      color: "green",
      img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/5.jpg"
  }]

  return (
    <>
      <button onClick={() => handleClicked()}>
        <IconSwitch icon={icon} />
      </button>
      <div className="store-container">
        {icon == "view_list" ? 
            <CardsView product={products} />
          : <ListView product={products} />
        }
      </div>
    </>
  );
}
//
export default Store;