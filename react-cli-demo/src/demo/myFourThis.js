import React,{Component} from 'react';

class MyFourThis extends Component {
    constructor(props){
        super(props);
        this.fun3 = this.fun3.bind(this)
    }

    fun1() {
        console.log(this)
    }
    fun2 = () => {
        console.log(this)
    }
    fun3() {
        console.log(this)
    }
    fun4() {
        console.log(this)
    }
    render(){
        return (
            <div>
                <h1>四种this</h1>
                <button onClick={this.fun1.bind(this)}>bind绑定</button>
                <button onClick={this.fun2}>箭头函数绑定</button>
                <button onClick={this.fun3}>提前绑定</button>
                <button onClick={() => {this.fun4()}}>调用方式为箭头函数</button>
            </div>

        )
    }
}

export default MyFourThis