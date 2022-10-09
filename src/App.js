import React, { Component } from 'react';

class App extends Component {

  constructor(props) {
    super(props);
    this.state={
      items: [],
      isLoaded: false,
    }
  }
  componentDidMount(){
    fetch('https://tree.flexcodelabs.com/api/familyTree?')
    .then(res => res.json())
    .then(json => {
      this.setState({
        isLoaded: true,
        items: json,
      })
    });

  }
  render() {
    var{isLoaded,items} = this.state;
    if(!isLoaded){
      return <div><p>Wait Still Family Data is Loading ..</p></div>;
    }
    else{
      return (
        <div className='App'>
          Data has been loaded
        </div>
      );

  }
}
}
export default App;
