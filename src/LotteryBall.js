import React from 'react';
import './LotteryBall.css';

class LotteryBall extends React.Component {
    constructor(props){
        super(props)
        
    }
    render(){
        return(<div className="LotteryBall">
            {this.props.num}
        </div>)
    }
}

export default LotteryBall;