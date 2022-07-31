import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes ,Route, Link } from 'react-router-dom';
import {Test1,Test2} from './tests/test1';

const App = ()=> (<Router>
    <h1>💖 Hello World!</h1>
    <p>Welcome to your Electron application.</p>
    <Link to={'/test1'}>link1</Link>
    <br />
    <Link to={'/test2'}>link2</Link>
    <br />
    <Routes>
        <Route path="/test1" element={<Test1/>}/>
        <Route path="/test2" element={<Test2/>}/>
    </Routes>
</Router>)

ReactDOM.render(<App />, document.getElementById('root'));