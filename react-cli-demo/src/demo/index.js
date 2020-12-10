import React,{Component} from 'react';


class Index extends Component{

    constructor(props){
        super(props);
    }
    //
    // componentWillMount(){
    //     console.log('will mount');
    // }
    //
    // componentDidMount(){
    //     console.log('did mount')
    // }

    render(){
        let name = 'hello world'
        let element = <p>{ name }</p>
        return (
            <div>
                element
            </div>
        );
    }
}

export default Index;