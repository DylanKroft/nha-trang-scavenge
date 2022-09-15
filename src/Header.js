import React, { useState } from 'react'
import styled from 'styled-components'
import logo from './logo.png'



const Header = ({}) => {

  return (
    <>
    <Top/>
    <Container>
        <img src={logo} className="logo" alt="Logo" />
        <Left>
            <TopText>
                Nha Trang Mini-Global Round 2022
            </TopText>
            <BottomText>
                Scavenge Tasks
            </BottomText>
        </Left>
    </Container>   
    <Top/>  
    </>
  )
  
}

export default Header

const Padding = styled.div`
    padding-right: 10px;    
`

const Container = styled.div`

    background-color: #F5E3AD;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='735' height='88.2' viewBox='0 0 1000 120'%3E%3Cg fill='none' stroke='%23F5E5B3' stroke-width='6.3' %3E%3Cpath d='M-500 75c0 0 125-30 250-30S0 75 0 75s125 30 250 30s250-30 250-30s125-30 250-30s250 30 250 30s125 30 250 30s250-30 250-30'/%3E%3Cpath d='M-500 45c0 0 125-30 250-30S0 45 0 45s125 30 250 30s250-30 250-30s125-30 250-30s250 30 250 30s125 30 250 30s250-30 250-30'/%3E%3Cpath d='M-500 105c0 0 125-30 250-30S0 105 0 105s125 30 250 30s250-30 250-30s125-30 250-30s250 30 250 30s125 30 250 30s250-30 250-30'/%3E%3Cpath d='M-500 15c0 0 125-30 250-30S0 15 0 15s125 30 250 30s250-30 250-30s125-30 250-30s250 30 250 30s125 30 250 30s250-30 250-30'/%3E%3Cpath d='M-500-15c0 0 125-30 250-30S0-15 0-15s125 30 250 30s250-30 250-30s125-30 250-30s250 30 250 30s125 30 250 30s250-30 250-30'/%3E%3Cpath d='M-500 135c0 0 125-30 250-30S0 135 0 135s125 30 250 30s250-30 250-30s125-30 250-30s250 30 250 30s125 30 250 30s250-30 250-30'/%3E%3C/g%3E%3C/svg%3E");
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`

const Top = styled.div`
    height: 20px;
    background-color: #f7d559;
`
const Left = styled.div`
    flex: 3;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-direction: column;
`

const TopText = styled.div`
    color: #3e0f09;
    font-weight: 600;
    font-size: 1.25em;
`

const BottomText = styled.div`
    color: #3e0f09;
    font-weight: 600;
    font-size: 2.5em;
    padding-bottom: 10px;
`

const SwitchContainer = styled.div`
    padding: 10px;
    background-color: #f7d559;
    display: flex;
    overflow: scroll;
`
