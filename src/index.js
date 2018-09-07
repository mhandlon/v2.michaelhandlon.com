import React from 'react';
import ReactDOM from 'react-dom';

//import './css/index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

/*
//import "./styles.css";
import SideBar from "./components/sidebar";

function App() {
    return (
        <div id="App">
            <SideBar />

            <div id="page-wrap">
                <h1>Cool Restaurant </h1>
                <h2>Check out our offerings in the sidebar!</h2>
            </div>
        </div>
    );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
*/