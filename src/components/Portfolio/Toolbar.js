import { useState } from 'react';
import ProjectList from './ProjectList';

function Toolbar(props) {

  const [sekectFilter, setFilter] = useState (props.selected)

  return (
    <>
      <div className="portfolio-menu">
        {props.filters.map(item => 
          <div className="portfolio-filter">
            <button onClick={() => setFilter(item)}>{item}</button>
          </div>
        )}
      </div>
      
      <ProjectList filter={sekectFilter} />
    </>
  );
}
  
export default Toolbar;