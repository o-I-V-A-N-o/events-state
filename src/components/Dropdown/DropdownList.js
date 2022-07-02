import { useState } from 'react';

function DropdownList(props) {
  
  const items = ["Profile information", "Change Password", "Become PRO", "Help", "Log Out"]
  
  const [selectItem, setSelectItem] = useState ()
  
  return (
    <>
      {props.view == "visible" ? 
        <div className="dropdown-item">
          {items.map(item => 
            <div>
              {item == selectItem ?
                <button className="dropdown-select-item" onClick={() => setSelectItem(item)}>{item}</button>
                : <button onClick={() => setSelectItem(item)}>{item}</button>
              }
            </div>
          )}
        </div>
      : null}
    </>
  );
}

export default DropdownList;