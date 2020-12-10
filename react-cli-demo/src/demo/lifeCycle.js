import React,{Component} from 'react';


class MyLife extends Component{
    constructor(props){
        super(props);
    }
    componentWillMount() {
        console.log('componentWillMount','组件将要被挂载，此时还没有渲染虚拟DOM')
    }

    render(){
        console.log('render', '开始渲染虚拟DOM，render函数执行完，也就渲染完成了虚拟DOM')
        return (
            <div>
                生命周期函数
            </div>
        );
    }
    componentDidMount(){
        console.log('componentDidMount','组件已经完成了渲染，当这个方法执行完，组件进入到运行状态')
    }
    componentWillReceiveProps(nextProps,nextContext){
        console.log('componentWillReceiveProps', '父组件为当前组件传递了新的参数')
    }
    shouldComponentUpdate(nextProps,nextState,nextContext){
        console.log('shouldComponentUpdate', '组件是否需要更新，此时尚未更新，但是props和state是最新的了')
    }
    componentWillUpdate(nextProps,nextState,nextContext){
        console.log('componentWillUpdate','组件即将更新，此时DOM树还是旧的')
    }
    // render() {
    //     console.log('render', '重新渲染DOM树，调用完成后内存中的DOM树被替换了，但页面没有发生变化')
    // }
}

export default MyLife;