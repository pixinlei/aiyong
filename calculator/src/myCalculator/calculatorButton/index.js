import React,{Component} from 'react';
import BottonCss from './index.module.css'
class Index extends Component{
    constructor(props){
        super(props);
        this.state = {
            myname: props.name, // 希望父组件传一个name
            mycolor: props.color, // 希望父组件传一个颜色
            mybgc: props.bgc, // 父组件传过来一张背景图
            fzcolor: props.fzcolor, // 父组件传一个文字颜色
            funFather: props.funFather //父组件的方法
        }
    }
    // 每个按钮点击功能
    funCalculator(e) {
        this.props.funFather(e.target.innerHTML)
    }
    render(){
        let mybgc = this.state.mybgc
        let innercss = {
            background: this.state.mycolor,
            backgroundImage:  `url(${mybgc})`,
            color: this.state.fzcolor
        }
        return (
            <div>
                <div className={BottonCss.page} style={innercss} onClick={this.funCalculator.bind(this)}>
                    {this.state.myname}
                </div>
            </div>

        );
    }
}

export default Index