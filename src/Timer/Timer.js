import React, { Component } from "react";

class Timer extends Component {
    constructor (props) {
        super(props)
        this.state = {
            count: 1
        }
    }

    render() {
        const {count} = this.state
        return (
            <div>
                <div>
                    <h1>Timer component</h1>
                    <h2>Seconds: {count} </h2>
                </div>
                <div>
                    <button onClick={this.componentWillUnmount}>
                        Stop Timer Component
                    </button>
                </div>
            </div>
        )
    }

    componentDidMount = () => {
        const {startCount} = this.props
        this.setState({
            count: startCount
        })
        this.timerDidUpdate()
    }

    timerDidUpdate = () => {
        this.myInterval = setInterval(() => {
            console.log(this.state.count + 1);
            this.setState(prevState => ({
                count: prevState.count + 1
            }))
        }, 1000)
        
    }

    componentWillUnmount = () => {
        clearInterval(this.myInterval)
    }
}

export default Timer;