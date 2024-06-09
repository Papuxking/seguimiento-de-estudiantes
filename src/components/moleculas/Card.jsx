import React from 'react';
import styled, { keyframes } from 'styled-components';

export function Card() {
    return (
      <CardContainer>
        <CardLoad />
        <CardLoadExtremeTitle />
        <CardLoadExtremeDescription />
      </CardContainer>
    );
  }
  
  const CardContainer = styled.div`
    width: 190px;
    height: 90px;
    background: #ffff;
    box-shadow: 0 1px 25px rgba(0, 0, 0, 0.2);
    position: absolute;
    transform: translate(-50%, -50%);
    top: 50%;
    left: 50%;
    padding: 12px 10px;
  `;
  
  const loadAnimation = keyframes`
    100% {
      background-position: -100% 0;
    }
  `;
  
  const CardLoad = styled.div`
    width: 70px;
    height: 70px;
    position: relative;
    float: left;
    background: linear-gradient(120deg, #e5e5e5 30%, #f0f0f0 38%, #f0f0f0 40%, #e5e5e5 48%);
    border-radius: 50%;
    background-size: 200% 100%;
    background-position: 100% 0;
    animation: ${loadAnimation} 2s infinite;
  `;
  
  const CardLoadExtremeTitle = styled.div`
    width: 90px;
    height: 10px;
    position: relative;
    float: right;
    border-radius: 5px;
    background: linear-gradient(120deg, #e5e5e5 30%, #f0f0f0 38%, #f0f0f0 40%, #e5e5e5 48%);
    background-size: 200% 100%;
    background-position: 100% 0;
    animation: ${loadAnimation} 2s infinite;
  `;
  
  const CardLoadExtremeDescription = styled.div`
    width: 90px;
    height: 47px;
    position: relative;
    float: right;
    border-radius: 5px;
    background: linear-gradient(120deg, #e5e5e5 30%, #f0f0f0 38%, #f0f0f0 40%, #e5e5e5 48%);
    margin-top: 10px;
    background-size: 200% 100%;
    background-position: 100% 0;
    animation: ${loadAnimation} 2s infinite;
  `;