import React from 'react';
import ReactDOM from 'react-dom';
import './Styles/index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

(function() {
    let cx = '015877985254590403594:gnbm1xum_mi';
    let gcse = document.createElement('script');
    gcse.type = 'text/javascript';
    gcse.async = true;
    gcse.src = 'https://cse.google.com/cse.js?cx=' + cx;
    let s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(gcse, s);
})();

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
