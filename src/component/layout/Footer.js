import React, { Component } from 'react'
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookSquare } from '@fortawesome/free-brands-svg-icons'
export default class Footer extends Component {
    render() {
        return (
            <Barfooter>
                   <div className='footer'>
                        <c className='box-footer'>Copyright &copy;{new Date().getFullYear()} | Development Team | Contact</c>
                         <div>
                             <c className='box-footer'  > By Computer Engineering University of Phayao <a href='https://www.facebook.com/WeLove_ICTUP-428166490572641' style={{color:'white'}} >  
                             <FontAwesomeIcon style={{color:'white'}} icon={faFacebookSquare} /> </a>
                             </c>
 
                         </div>
                        
                    </div>
               </Barfooter>
                    
        )
    }
}



const Barfooter = styled.div`
.box-footer {
    color:white;
    font-size:2.8ch;
   
}
.footer{
    background-color: #003271;
    padding-top: 1rem;
    padding-bottom: 1rem;
    padding-left: 2rem;
}
`;

