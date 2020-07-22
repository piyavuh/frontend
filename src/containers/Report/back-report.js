import React, { Component } from 'react'
import styled from 'styled-components';




export default class Backedit extends Component {
    render() {
        return (
            
            <Thing >
                 <div className="box-red"> 
                     <c>การออกรายงาน</c>
                 </div> 
            </Thing>
                   
        )
    }
}

  const Thing = styled.div`
   .box-red {
    width: 150px;
    height:60px;
    background-color: #DA4453; 
    color:white;
    text-align:center;
    border-radius: 0.5em ;
    font-style:normal;
    font-size: 3ch;
    font-weight: 550;
   
}
`;
