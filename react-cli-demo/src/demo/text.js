import React,{Component} from 'react';

class Text extends React.Component {
    constructor(props){
        super(props);
        this.state = {

        }
        this.firstref = React.createRef()
    }
    fun = () => {
        // console.log(this.refs.getInputValue.value)
        // console.log(this.inputval.value)
        console.log(this.firstref.current.value)
    }
    render(){
        return (
            <div>
                <h1>三种拿到ref的方式</h1>
                <input type="text" placeholder='请输入' ref={this.firstref} />
                <button onClick={this.fun}>获取input框中的内容</button>
            </div>
        )
    }

}

export default Text