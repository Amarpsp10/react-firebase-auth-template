import './Home.css'
import React,{useContext} from 'react'

import {AuthContext} from '../contexts/AuthContext'

const Home = () => {
    const {currentUser,loginWithGoogle,logout} = useContext(AuthContext);

    return (
        <div className={'home-page'}>
            <div>
                <h2 style={{color:'white'}}>User Detail</h2>
                <div className='user-text'>
                   <text>{currentUser==null ? 'null' : currentUser}</text>
                </div>
            </div>
            <div>
                <div onClick={()=>loginWithGoogle()} className='button'>
                    <img src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg' alt='google' />
                    <text>Sign In With Google</text>
                </div>
            </div>
            <div>
                <div className='button' onClick={()=>logout()}>
                    <text>Log Out !</text>
                </div>
            </div>
        </div>
    )
}

export default Home;