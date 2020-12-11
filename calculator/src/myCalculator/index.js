import React,{Component} from 'react';
import IndexCss from './index.module.css'
import MyButton from './calculatorButton/index'
import ZeroButton from './zeroButton/index'


class Index extends Component{
    constructor(props){
        super(props);
        this.state = {
            myList: [
                {name: 'AC', color: 'rgb(165,165,165)', src: '', fzcolor: 'black'},
                {name: '+/-', color: 'rgb(165,165,165)', src: '', fzcolor: 'black'},
                {name: '%', color: 'rgb(165,165,165)', src: '', fzcolor: 'black'},
                {name: '÷', color: 'rgb(254,158,9)', src: '', fzcolor: 'white'},
                {name: '7', color: 'rgb(51,51,51)', src: '', fzcolor: 'white'},
                {name: '8', color: 'rgb(51,51,51)', src: '', fzcolor: 'white'},
                {name: '9', color: 'rgb(51,51,51)', src: '', fzcolor: 'white'},
                {name: 'X', color: 'rgb(254,158,9)', src: '', fzcolor: 'white'},
                {name: '4', color: 'rgb(51,51,51)', src: '', fzcolor: 'white'},
                {name: '5', color: 'rgb(51,51,51)', src: '', fzcolor: 'white'},
                {name: '6', color: 'rgb(51,51,51)', src: '', fzcolor: 'white'},
                {name: '-', color: 'rgb(254,158,9)', src: '', fzcolor: 'white'},
                {name: '1', color: 'rgb(51,51,51)', src: '', fzcolor: 'white'},
                {name: '2', color: 'rgb(51,51,51)', src: '', fzcolor: 'white'},
                {name: '3', color: 'rgb(51,51,51)', src: '', fzcolor: 'white'},
                {name: '+', color: 'rgb(254,158,9)', src: '', fzcolor: 'white'},
            ], // 计算器上的部分值
            expression: '0', // 需要显示出的表达式，默认为0
            res: 0, // 最终展示出的结果
            // beforeEle: null // 计算器上次的值
        }
    }
    // 把计算器的部分按钮展示出来
    shouButton() {
        let myList = this.state.myList
        // console.log(myList)
        let res = myList.map((v, i) => {
            // console.log(v.name, v.color)
            return (
                <MyButton funFather={this.funFather} key={i} name={v.name} color={v.color} bgc={v.src} fzcolor={v.fzcolor} />
            )
        })
        // console.log(res)
        return res
    }
    // 父组件接收子组件函数拿到的表达式和值
    funFather = (myname) => {
        // let pointmap = ['.', '+', '-', 'X', '÷'] // 符号字典，不允许连续输入两次. + - * /
        // if(pointmap.includes(this.state.beforeEle)) return
        let mymap = [1,2,3,4,5,6,7,8,9] // 数字字典
        if(String(myname) === '+/-' || String(myname) === '%') return
        let expression = this.state.expression // 需要展现在页面上的内容
        if(String(myname) === '=') {
            let res = this.state.res
            res = expression
            res = res.replace(/÷/g, "/")
            res = res.replace(/X/g, "*")
            res = eval(res)
            if(typeof res === 'number') {
                if(res === NaN) {
                    alert('书写有问题，请重写')
                    this.setState({
                        expression: '',
                    })
                } else {
                    this.setState({
                        expression: res
                    })
                }
            }
            return
        }
        if((Number(expression) === 0 && Number(myname) === 0) || (myname === 'AC')) {
            expression = 0
        } else if(Number(expression) === 0 && mymap.includes(Number(myname))) {
            expression = Number(myname)
        } else {
            expression = String(expression) + String(myname)
        }
        this.setState({
            expression: expression,
            // beforeEle: myname
        }, () => {
            // console.log(this.state.expression)
        })
    }
    render(){
        return (
            <div className={IndexCss.page}>
            {/*    头部运算部分*/}
            <div className={IndexCss.title}>
                {this.state.expression}
            </div>
            {/*        计算器按钮内容部分*/}
            <div className={IndexCss.content}>
                { this.shouButton() }
                <ZeroButton funFather={this.funFather} name={0} color={'rgb(51,51,51)'} src={''}/>
                <MyButton funFather={this.funFather} name={'.'} color={'rgb(51,51,51)'} src={''} />
                <MyButton funFather={this.funFather} name={'='} color={'rgb(254,158,9)'} src={''}/>
            </div>
            </div>
        );
    }
}

export default Index