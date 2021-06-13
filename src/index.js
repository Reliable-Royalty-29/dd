import React from 'react';
import ReactDom from 'react-dom';
import Card from './Card';
import './index.css';
//import './App.css';
import Sdata from './Sdata';

console.log(Sdata);

function ncard(val){
    console.log(val);
        return(
            <Card img={val.img}
            title={val.title} 
            sname={val.sname} 
            link={val.link}


    />
        );
}

ReactDom.render(
    <>
   
   <h1 className="heading_style">Welcome to My Netflix Website @Dheeman</h1>
    <h3 className="heading_style">List of Top 6 Netflix Series</h3>
    

   {Sdata.map(ncard)};
    </>,
   document.getElementById('root')
    
   
);