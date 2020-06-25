import React, { Component } from 'react'
import styled from 'styled-components';

export default class Backmenubar extends Component {
    render() {
        return (
            
            <Thing >
                 <div className="box-red"> 
                     <c>ซื้อน้ำเชื้อโคสินเชื่อ</c>
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
    font-family:"DB Adman X";
    font-size:3.4ch;
    font-weight: 550;
   
   
}
`;
