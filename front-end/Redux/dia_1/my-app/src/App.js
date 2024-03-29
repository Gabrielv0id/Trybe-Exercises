import './App.css';
import React from 'react';
import { connect } from 'react-redux';
import { actionCreator, clickCounter } from './redux/actions';

class App extends React.Component {
  render() {
    const { countState, dispatch, clicksCount } = this.props;

    const dispatchAll = (add = 1) => {
      dispatch(actionCreator(add));
      dispatch(clickCounter());
    }
    return (
      <div className="App">
        <h1>Contador</h1>
        <h2>{ countState }</h2>
        <button onClick={() => dispatchAll()}>Incrementa 1</button>
        <button onClick={() => dispatchAll(5)}>Incrementa 5</button>
        <h3>Número de Clicks: { clicksCount }</h3>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  countState: state.counterReducer.count,
  clicksCount: state.counterReducer.clicks,

});

export default connect(mapStateToProps)(App);
