import React from 'react';

function Team() {
    return ( 
        <div className='container'>
          <div className='row p-3 mt-5 border-top'>
            <h1 className='text-center '>People
            </h1>
          </div>
           <div className='row p-3  text-muted ' style={{lineHeight:"1.8",fontSize:"1rem"}}>
             <div className='col-6 p-5 text-center '>
               <img src='media/images/founder.png' style={{borderRadius:"100%",width:"90%"}}/>
               <h4 className='mt-5'>Satyabrata Das & Sudipta Bal</h4>
               <h6>Developers</h6>
             </div>
             <div className='col-6 p-3 mt-5'>
                <p>
            Satya and sudipta bootstrapped and developed Sigma in 2026 to overcome the
            hurdles they faced during their decade long stint as a trader. Today,
            Sigma has changed the landscape of the Indian broking industry.
          </p>
          <p>
            They are the members of the SEBI Secondary Market Advisory Committee
            (SMAC) and the Market Data Advisory Committee (MDAC).
          </p>
          <p>Playing cricket is their zen.</p>
          <p>
            Connect on <a href="">Homepage</a> / <a href="">TradingQnA</a> /{" "}
            <a href="">Twitter</a>
          </p>
             </div>
          </div>
        </div>
     );
}

export default Team;