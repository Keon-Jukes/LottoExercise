import React from 'react';
import LotteryBall from './LotteryBall';
import './Lottery.css';

class Lottery extends React.Component {
    static defaultProps = {
        title: 'Lottery',
        maxBalls: 6,
        maxNum: 40
    }
    constructor(props){
        super(props)
        this.state = {
            nums: Array.from({length: this.props.maxBalls})
        }
        // this.generateNums = this.generateNums.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    generateNums(){
        this.setState(currState => ({
            nums: currState.nums.map(n =>  Math.floor(Math.random() * this.props.maxNum) + 1)
        }));
    }

    handleClick(){
        this.generateNums()
    }


    render(){
        return(
            <section className="Lottery">
            <h1>{this.props.title}</h1>
            <div>
            {this.state.nums.map(n => ( <LotteryBall num={n} />
            ))}
            </div>

            <button onClick={this.handleClick}>Generate</button>
            </section>
        )
    }
}

export default Lottery;