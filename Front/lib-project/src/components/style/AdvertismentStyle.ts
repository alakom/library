import styled from "styled-components";

export const Gallery = styled.section`
  display: grid;
  grid-gap: 15px;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-auto-rows: 120px;
  grid-auto-flow: dense;
  margin-top: 10px;
  margin-left: 20px;
  margin-right: 20px;
  margin-bottom: 25px;
  pointer-events: none;
  -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -o-user-select: none;
    user-select: none;
`;
export const BigTile = styled.div`
  grid-column: span 4;
  grid-row: span 2;
  flex-shrink: 0;
  border-radius: 5px;
  box-shadow: -1px 3px 4px 0px rgba(0, 0, 0, 0.25);
  
`;
export const SmallTile = styled.div`
  grid-column: span 2;
  grid-row: span 1;
  background: #C680C6;
  flex-shrink: 0;
  border-radius: 5px;
  box-shadow: -1px 3px 4px 0px rgba(0, 0, 0, 0.25);
`;