import React from 'react';
import './Clock.css';

class Clock extends React.Component {
	constructor(props){
  	super(props)
    this.state = {
    	time: new Date()
    }
  }
  
  componentDidMount(){
  	this.interval = setInterval(()=>{
    	this.setState({
      	time: new Date()
      })
    }, 1)
  }
  
  formatSet(data){
  	return data < 10 ? '0' + data : data;
  }
  
  formatMsSet(data){
  	return data < 100 ? (data < 10 ? '00' + data : '0'+data) : data;
  }
  
  render() {
  	const { time } = this.state;
    const { color } = this.props;
    
    const h = this.formatSet(time.getHours());
		const m = this.formatSet(time.getMinutes());
		const s =  this.formatSet(time.getSeconds());
    const ms = this.formatMsSet(time.getMilliseconds());
    const yyyy = time.getFullYear().toString();
    const mm = (time.getMonth() + 1).toString(); // 0-11을 반환
    const dd = time.getDate().toString();
    
		
		return (		
      <div className="clockBox" style={{ color }}>        
        <div>
          <div className="date">{yyyy}-{mm}-{dd}</div>
          <span className="time">{h}:{m}:{s}</span><span className="ms">{ms}</span>
        </div>        
      </div>
      )
  	}
}


class MyApp extends React.Component {
	constructor(props){
  	super(props)   
    this.state = {
    	changeColorCount: 0
    }
  }
  
  componentDidMount(){
  	this.interval = setInterval(()=>{
    	this.setState({
      	changeColorCount: this.state.changeColorCount + 1
      })
    }, 1000)
  }
  
  getRandomValue(min, max){
  	return Math.random() * (max - min) + min;
  }
  
  randomColor(){  	
  	return `rgb(${this.getRandomValue(0,256)},${this.getRandomValue(0,256)},${this.getRandomValue(0,256)})`
  }
  

	render(){
  	return (
    	<div className="app-main">
    	  <h1>My App</h1>
        <Clock color={this.randomColor()} />
        <Clock color={this.randomColor()} />
        <Clock color={this.randomColor()} />
        <Clock color={this.randomColor()} />
    	</div>
    )
  }
}

export default Clock;
//ReactDOM.render( < MyApp / > , document.querySelector("#app"))
