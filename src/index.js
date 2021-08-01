import React from 'react';
import ReactDom from 'react-dom';
import Navbar from './navbar';
import Footer from './footer';
import Football from './card';
import Click from './click';


const App = () => {
    return(
        <div>
            <Navbar />
            <Football />
            <Click />
            <Footer />

            
        </div>
        

    )
}

ReactDom.render(
    <App />,
    document.getElementById('root')
);
