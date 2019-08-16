import React from 'react';
import { directive } from '@babel/types';
import './styles.css';

class Popover extends React.Component{
  constructor(props){
    super(props);
    this.state={
      isVisible: false,
    }
  }
  componentDidMount() {
    document.addEventListener('click', (e)=> {
      this.setState({
        isVisible: false
      });
    });
  }
  onHandleShowClick(e){
   // 阻止合成事件的冒泡
   e.stopPropagation();
   // 阻止与原生事件的冒泡
   e.nativeEvent.stopImmediatePropagation();
   this.setState({
    isVisible: true,
  })
  }
  onClose(e){
   e.stopPropagation();
    this.setState({
      isVisible: false,
    })
  }
  renderPopOver(){
    const {content} = this.props;
    return(
      <div className="popover-container">
        <span className="popover-close-x" onClick={this.onClose.bind(this)}>X</span>
        <div className="popover-arrow"></div>
        {content}
      </div>
    )
  }
  render(){
    return(
      <React.Fragment>
        <div 
          className="popover" 
           onClick={this.onHandleShowClick.bind(this)}
        >
          {this.props.children}
          {
            this.state.isVisible &&
            this.renderPopOver()
          }
        </div>
      </React.Fragment>  
    )
  }
}

export default Popover;