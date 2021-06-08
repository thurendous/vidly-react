import React, { Component } from 'react'


class Counter extends Component {
    componentDidUpdate(prevProps, prevState) {
        console.log('prevProps', prevProps)
        console.log('prevState', prevState)
        if (prevProps.counter.value !== this.props.counter.value) {
            // ajax call here
        }
    }
    // constructor () {
    //     super();
    //     this.handleIncrement = this.handleIncrement.bind(this);
    //     console.log("Clicked", this.handleIncrement.bind(this));
    // }
    componentWillUnmount() {
        console.log("Counter - Unmount");
    }


    // renderTags() {
    //     if (this.state.tags.length === 0) return <p>There are no tags! </p>;
    //     return <ul>{this.state.tags.map(tag => <li key={tag}>{tag}</li>)}</ul>
    // }


    render() { 
        // console.log(this.props)
        console.log("Counter - rendered")
        return (
        <React.Fragment>
            <div className="row">
                <div className="col-1 m-2">
                    <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
                </div>
                <div className="col">
                <button onClick={()=> this.props.onIncrement(this.props.counter)} className="btn btn-secondary btn-sm">+</button>
                <button onClick={()=> this.props.onDecrement(this.props.counter)} className="btn btn-secondary btn-sm m-2" 
                disabled={this.props.counter.value === 0 ? "disabled" : ""}
                >
                -
                </button>
                <button 
                onClick = {() => this.props.onDelete(this.props.counter.id)}
                className="btn btn-danger btn-sm">Delete</button>

                </div>
            {/* {this.props.children} */}
            </div>
        </React.Fragment>
    );
    }

    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += this.props.counter.value ===0 ? "warning" : "primary";
        return classes;
    }

    formatCount() {
        const { value } = this.props.counter;
        return value ===0 ? "Zero" : value;
    }

}

export default Counter;