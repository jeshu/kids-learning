import React from 'react';
import Header from './components/Header'
import Dashboard from './components/Dashboard';

const props = {
  data:[{
      title:"title-1",
      path:"path-1",
      desc:"desc-1",
      id:"id-1"
  },{
      title:"title-2",
      path:"path-2",
      desc:"desc-2",
      id:"id-2"
  },{
      title:"title-3",
      path:"path-3",
      desc:"desc-3",
      id:"id-3"
  }]
}
function App() {
  return (
    <div className="App">
      <Header />
      <Dashboard  {...props}/>
    </div>
  );
}

export default App;
