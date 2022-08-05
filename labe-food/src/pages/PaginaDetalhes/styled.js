import styled from 'styled-components';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

export const RecipeCardContainer = styled(Card)`
  width: 250px;
  margin: 0 auto;
  font-family: 'Roboto', sans-serif;
`

export const RecipeCardContent = styled(CardContent)`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 40px;
  padding: 10px;
  border: 1px solid gray;
`

export const Place = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between; 
  padding: 30px;
`

export const DivFooter = styled.div`
 position: fixed;
 width: 100%;
 bottom: 0;  
`