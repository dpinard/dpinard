import * as React from 'react'

export default class Timer extends React.Component {
    
    constructor(props){
        super(props);
        this.state = {
            date: new Date(),
        };
    }
    
    componentDidMount(props) {
        setInterval(() => {
            this.setState({date: new Date()})
        }, 1000);
    }

    render() {
        return <div>
            {this.state.date.toLocaleTimeString()}
        </div>
    }
}