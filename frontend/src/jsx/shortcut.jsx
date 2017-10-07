import React from 'react';
import superAgent from 'superagent';

class Shortcut extends React.Component {

    constructor() {
        super();
        this.state = {
            userName: "",
            shortcutDescription: "",
            shortcutId: "",
            userId: ""
        }

    }

    submit() {
        superAgent.get('/api/shortcut/' + this.state.shortcutId)
            .end((err, res)=> {
                console.log(res.body);
            })
    }

    componentDidMount() {
        superAgent.get('/api/shortcut')
            .end((err, res)=> {
                if(err){
                    throw err;
                }
                console.log(res.body);
                this.setState({
                    userName: res.body.userName,
                    shortcutDescription: res.body.shortcutDescribe,
                    shortcutId: res.body.shortcutId,
                    userId: res.body.userId
                });
                console.log(this.state);
            })
    }

    render() {
        return(
            <div className="jumbotron">
                <h1 className="display-3">future-star shortcut system</h1>
                <h3 className="display-3">congratulations {this.state.userName} !!!</h3>
                <h3 className="display-3">the shortcut description is: {this.state.shortcutDescription} </h3>
                <p className="lead">
                    <a className="btn btn-primary btn-lg" role="button" onClick={this.submit()}>check</a>
                    <a className="btn btn-primary btn-lg" href="/#/shortcut" role="button">draw again!</a>
                </p>
            </div>
        )
    }
}

export default Shortcut;