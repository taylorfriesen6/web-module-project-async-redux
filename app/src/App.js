import {connect} from 'react-redux';

import {fetchData} from './actions';

import './App.css';

function App(props) {
  console.log(props);

  const handleClick = e => {
    e.preventDefault();
    props.fetchData();
  }

  return (
    <div className="App">
      <input type='button' value='Generate a person' onClick={handleClick}/>
      <div>
        {props.isFetching && 'fetching...'}
        {props.person && (props.person.name.first + ' ' + props.person.name.last)}
      </div>
    </div>
  );
}

const mapStateToProps = state => {
  return state;
}

export default connect(mapStateToProps, {fetchData})(App);
