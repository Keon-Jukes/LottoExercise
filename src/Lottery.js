import React from 'react';
import LotteryBall from './LotteryBall';

class Lottery extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            nums: [1, 2, 3, 4, 5 ,6],
            title: 'Lotto'
        }
        this.generateNums = this.generateNums.bind(this);
    }

    generateNums(){

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