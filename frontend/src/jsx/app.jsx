import React, {Component} from 'react';
import superAgent from 'superagent';


export default class App extends Component {

    componentDidMount() {
        superAgent.get('/api/shortcut')
            .end((err, res)=> {
                console.log(res);
            })
    }

    render() {
        return (<div>{this.props.children}
            <h1>dsjdkhakd</h1>
        </div>);
    }
}
