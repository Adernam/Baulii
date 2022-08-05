import styled from 'styled-components';

export const App = styled.div`
    width: 100vw;
    height: 100vh;

    h4{
        margin: 0 21px;
    }
`

export const Hr = styled.div`
    background: lightgray;
    width: 100%;
    height: 1px;
`

export const DivLogo = styled.div`
    width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const EditUser = styled.div`
    width: 100vw;
    display: flex;
    justify-content: space-between;

    img{
        width: 35px;
        height: 35px;
        margin: 13px;
    }
`

export const DivUserStats = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 15px;

    p{
        margin: 5px;
    }
`

export const EditAddress = styled.div`
    width: 100vw;
    display: flex;
    justify-content: space-between;
    
    img{
        width: 35px;
        height: 35px;
        margin: 13px;
    }
`

export const DivUserAddress = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 15px;

    h4{
        margin: 5px;
    }

    p{
        margin: 5px;
    }
`

export const Hr2 = styled.div`
    background: black;
    width: 90%;
    height: 1px;
    margin: 5px auto;
`

export const DivFooter = styled.div`
    position: fixed;
    width: 100%;
    bottom: 0;
`

export const ContainerCardHistory = styled.div`
border: solid black 1px;
margin: 3vh; 
box-shadow: 1px;
`

export const StyledTextHistory = styled.div`
margin: 8px;
`