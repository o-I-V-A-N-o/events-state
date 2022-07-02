import Toolbar from './Toolbar';

function Portfolio() {
    
  return (
    <Toolbar
      filters={["All", "Websites", "Flayers", "Business Cards"]}
      selected="All"
      onSelectFilter={(filter) => {console.log(filter);}}/>
  );
}

export default Portfolio;