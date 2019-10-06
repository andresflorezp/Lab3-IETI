import React from 'react';
//import Avatar from '@material-ui/core/Avatar';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Login from './login'
import Register from './register'
class App extends React.Component {

    render() {
        return (
            <Router>
                <div className="App">
                    <div>
                        <Switch>
                            <Route exact path="/" component={Login}/>
                            <Route exact path="/register" component={Register}/>
                        </Switch>
                    </div>
                    
                </div>
            </Router>
        )

    }
}
export default App;