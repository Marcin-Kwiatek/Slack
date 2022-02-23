import React from 'react';
import '../styles/mainPage.css'



function MainPage() {

    return (
        <>
            <div className='navbar'></div>
            <div className='sidebar'>
                <div className='current_user'>Marcin</div>
                <div className='sidebar_options'></div>
            </div>
            <div className='content'></div>
        </>
    )
}

export default MainPage;
