import React from 'react';

class LotteryBall extends React.Component {
    constructor(props){
        super(props)
        
    }
    render(){
        return(<div>
            {this.props.num}
        </div>)
    }
}

export default LotteryBall;