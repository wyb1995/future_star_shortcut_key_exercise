import React from 'react';
import superAgent from 'superagent';

require('../css/shortcut.css');

class Shortcut extends React.Component {

    constructor() {
        super();
        this.state = {
            userName: "",
            shortcutDescription: "",
            shortcutId: "",
            userId: "",
            shortcutKey: " "
        }

    }

    check() {
        superAgent.get('/api/shortcut/' + this.state.shortcutId)
            .end((err, res)=> {
                console.log(res.body);
                this.setState({
                    shortcutKey: res.body.shortcut_key
                });
            })
    }

    static refreshPage() {
        location.reload(true);
    }

    componentDidMount() {
        superAgent.get('/api/shortcut')
            .end((err, res)=> {
                if(err){
                    throw err;
                }
                this.setState({
                    userName: res.body.userName,
                    shortcutDescription: res.body.shortcutDescribe,
                    shortcutId: res.body.shortcutId,
                    userId: res.body.userId
                });
            })
    }

    render() {
        return(
            <div className="jumbotron">
                <h1 className="display-3">future-star shortcut system</h1>
                <h3 className="display-3">congratulations {this.state.userName} !!!</h3>
                <h3 className="display-3">the shortcut description is: {this.state.shortcutDescription} </h3>
                <p className="lead">
                    <a className="btn btn-primary btn-lg" role="button" onClick={this.check.bind(this)}>check</a>
                    <a className="btn btn-primary btn-lg" role="button" onClick={Shortcut.refreshPage}>draw again!</a>
                </p>
                <h3 className="display-3">{this.state.shortcutKey}</h3>
            </div>
        )
    }
}

export default Shortcut;