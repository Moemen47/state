import React, { Component } from 'react'
import Profile from './component/Profile'


class App extends Component {
    
   state = {
imgSrc: '/m.JPG',
fullName: 'Moemen Jebali',
bio: 'Customer Service Representative ',
Profession: 'Customer Service Representative',
show: false,
   };
   render(){
     const { show } = this.state;
     const showMe = show ? ('cacher profil') : ('afficher profil');
     return(
       <div className='text-center'>
         <button className='btn btn-danger mt-5' onClick={() => this.setState ({show: !show})}>{ showMe }</button>
         {show && <Profile info={this.state} />}
       </div>
     )
   }
  }
  export default App