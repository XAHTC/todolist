import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Todos from './routes/Todos';
import About from './routes/About/About';

const App: React.FC = () => {

    return (
        <Switch>
            <Route path={'/'} exact component={Todos}/>
            <Route path={'/about'} component={About} />
        </Switch>
    );
};

export default App;
