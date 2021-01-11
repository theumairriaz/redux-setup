import { Component } from 'react';
import { connect } from 'react-redux';
import { incrementAction, decrementAction } from './redux/action/counter';
import './App.css';

class App extends Component {
  render () {
    return (
      <div className="App">
        <button onClick={() => this.props.incrementAction()}>Increase</button>
          <p>{this.props.counter}</p>
        <button onClick={() => this.props.decrementAction()}>Decrease</button>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    counter: state.counterReducer.counter
  }
}

export default connect(mapStateToProps, {incrementAction, decrementAction})(App);
