import React from 'react';
import {connect} from 'react-redux';
function mapStateToProps(state){
    return{
        counter : state,
    }
}
class App extends React.Component{

    render(){
        return(
            <div>
                {this.props.counter}                
            </div>
        );
    }
}
export default connect(mapStateToProps)(App);