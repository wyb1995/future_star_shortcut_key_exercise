import React from 'react';

class Shortcut extends React.Component {

    render() {
        return (
            <div className="jumbotron">
                <h1 className="display-3">future-star shortcut system</h1>
                <p className="lead">This system is a very simple system to test the IntelliJ shortcut keys.</p>
                <hr className="my-4" />
                <p>You can click the start button, then, the will see a random user and shortcutDescription</p>
                <p className="lead">
                    <a className="btn btn-primary btn-lg" href="/#/shortcut" role="button">start draw!</a>
                </p>
            </div>
        )
    }
}

export default Shortcut;