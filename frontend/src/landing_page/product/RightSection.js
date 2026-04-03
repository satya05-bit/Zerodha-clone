import React from 'react';

function RightSection({imageUrl, productName,
    productDescription,learnMore
}) {
    return ( 
       <div className='container'>
            <div className='row p-5'>
                
                <div className='col-6 p-5 mt-2'>
                    <h1>{productName}</h1>
                    <p>{productDescription}</p>
                    <a href={learnMore} >Learn More
                        <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
                    </a>
                    
                </div>
                <div className='col-6 p-5'>
                    <img src={imageUrl} style={{width:"80%"}} />
                </div>
            </div>
        </div>
     );
}

export default RightSection;