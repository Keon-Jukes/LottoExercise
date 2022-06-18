import React from 'react';
import LotteryBall from './LotteryBall';

class Lottery extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            nums: 6,
            title: 'Lotto',
            maxNum: 10
        }
        this.generateNums = this.generateNums.bind(this);
    }

    generateNums(){
        const newMax = Math.floor(Math.random() * this.state.maxNum);

        this.setState({nums: newMax});
    }
    render(){
        return(<div>
            {this.state.nums.map((num) => {
                <LotteryBall title={this.state.title} num={num} maxNum={10} />
            })}

            <button onClick={generateNums()}>Generate</button>
        </div>)
    }
}

export default Lottery;