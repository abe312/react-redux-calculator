import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Calculator.css';

import {
  keypress,
  keyclick,
  clear,
  clearPress,
  operator,
  operatorPress,
  equals,
  equalsPress,
} from '../store/actions';

class Calculator extends Component {
  componentDidMount() {
    document.addEventListener('keydown', this.handleKeys);
  }
  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeys);
  }

  handleKeys = e => {
    const numpad = [48, 49, 50, 51, 52, 53, 54, 55, 56, 57];
    const operators = [111, 106, 107, 109, 110];
    const equals = [187, 13];
    const clear = 27;
    if (numpad.includes(e.keyCode)) {
      this.props.keypress(e);
    }
    if (operators.includes(e.keyCode)) {
      this.props.operatorPress(e);
    }
    if (equals.includes(e.keyCode)) this.props.equalsPress();
    if (e.keyCode === clear) this.props.clearPress();
  };

  handleKeypress = e => {
    const operators = '/*+-';
    if (e === 'clear') this.props.clear();
    else if (operators.includes(e)) this.props.operator(e);
    else if (e === 'equals') this.props.equals();
    else this.props.keyclick(e);
    console.log(e);
    // console.log('key pressed!', e.keyCode);
  };
  render() {
    // const { calculation } = this.props;
    // console.log(calculation);
    // let calculation = { formula: '', total: 0 };
    const { total, formula } = this.props;
    console.log(this.props);
    return (
      <div className='container'>
        <div className='calc'>
          <div className='display secondary__display scrollable-content'>
            {formula}
          </div>
          <div className='display primary__display' id='display'>
            {total}
          </div>
          <div
            className='item wide__key ac'
            id='clear'
            onClick={() => this.handleKeypress('clear')}
          >
            AC
          </div>
          <div
            className='item'
            id='divide'
            onClick={() => this.handleKeypress('/')}
          >
            /
          </div>
          <div
            className='item'
            id='multiple'
            onClick={() => this.handleKeypress('*')}
          >
            *
          </div>
          <div
            className='item'
            id='seven'
            onClick={() => this.handleKeypress('7')}
          >
            7
          </div>
          <div
            className='item'
            id='eight'
            onClick={() => this.handleKeypress('8')}
          >
            8
          </div>
          <div
            className='item'
            id='nine'
            onClick={() => this.handleKeypress('9')}
          >
            9
          </div>
          <div
            className='item'
            id='subtract'
            onClick={() => this.handleKeypress('-')}
          >
            -
          </div>
          <div
            className='item'
            id='four'
            onClick={() => this.handleKeypress('4')}
          >
            4
          </div>
          <div
            className='item'
            id='five'
            onClick={() => this.handleKeypress('5')}
          >
            5
          </div>
          <div
            className='item'
            id='six'
            onClick={() => this.handleKeypress('6')}
          >
            6
          </div>
          <div
            className='item'
            id='add'
            onClick={() => this.handleKeypress('+')}
          >
            +
          </div>

          <div
            className='item'
            id='one'
            onClick={() => this.handleKeypress('1')}
          >
            1
          </div>
          <div
            className='item'
            id='two'
            onClick={() => this.handleKeypress('2')}
          >
            2
          </div>
          <div
            className='item'
            id='three'
            onClick={() => this.handleKeypress('3')}
          >
            3
          </div>
          <div
            className='item tall__key'
            id='equals'
            onClick={() => this.handleKeypress('equals')}
          >
            =
          </div>
          <div
            className='item wide__key'
            id='zero'
            onClick={() => this.handleKeypress('0')}
          >
            0
          </div>
          <div
            className='item'
            id='decimal'
            onClick={() => this.handleKeypress('.')}
          >
            .
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ calculation }) => ({
  total: calculation.total,
  formula: calculation.formula,
});

const mapDispatchToProps = dispatch => ({
  keypress: e => dispatch(keypress(e)),
  keyclick: str => dispatch(keyclick(str)),
  clear: () => dispatch(clear()),
  operator: op => dispatch(operator(op)),
  equals: () => dispatch(equals()),
  clearPress: () => dispatch(clearPress()),
  equalsPress: () => dispatch(equalsPress()),
  operatorPress: e => dispatch(operatorPress(e)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Calculator);
