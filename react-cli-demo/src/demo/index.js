import React,{Component} from 'react';


class Index extends Component{

    constructor(props){
        super(props);
    }

    componentWillMount(){
        console.log('will mount');
    }

    componentDidMount(){
        console.log('did mount')
    }

    render(){
        return (
            <div>
                demo
            </div>
        );
    }
}

export default Index;