import React from 'react';

class UserList extends React.Component{
    constructor(props){
        super(props);
        console.log("constructor: ",this);
        this.state={
            isLoaded: false
        };
    }

    componentDidMount(){
        console.log("componentDidMount: ",this);
        setTimeout(()=>{
            this.setState({
                isLoaded: true
            })
        }, 2000);
    }

    componentDidUpdate(){
        console.log("componentDidUpdate: ", this);
    }

    componentWillUpdate(){
        console.log("componentWillUpdate: ", this);
    }

    render(){
        const { isLoaded } = this.state;
        return isLoaded ?
        <ul>
            <li>test1</li>
            <li>test2</li>
            <li>test3</li>
        </ul>
        :
        <div>로딩중</div>
    }
}

export default UserList;