Redux integrate with react :
Steps :
--------
index.js
important imports :

import {Provider} from 'react-redux';


Use Provider in "ReactDOM.render"

ReactDOM.render(
                <Provider store={store}>
                    <div>
                    <App/>
                    </div>
                </Provider>
                ,document.getElementById('root')
                );
