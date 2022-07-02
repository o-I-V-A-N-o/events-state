import DropdownList from './DropdownList';
import { useState } from 'react';

function Dropdown() {
  
  const [view, setView] = useState("hidden")

  const handleClicked = evt => {
    if (view == "visible") {
      setView("hidden")
    } 
    if (view == "hidden") {
      setView("visible")
    }
  }

  return (
    <>
      <div className="dropdown-container">
        <button onClick={() => handleClicked()}>
          ACCOUNT SETTINGS
        </button>
        <DropdownList view={view} />
      </div>
    </>
  );
}

export default Dropdown;