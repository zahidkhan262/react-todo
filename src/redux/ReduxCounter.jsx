import React from 'react'
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { increment,decrement } from './CounterAction';
// import { connect } from 'react-redux';



const CounterContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;
`;
const CounterBox = styled.div`
width:300px;
margin:100px auto;
color: #F1F1F1;
height: 300px;
padding:10px;
position:relative;
background: radial-gradient(#03a9f4 150px, #e91e63 10px);
box-shadow:0px 0px 20px rgba(0,0,0,0.3);
border-radius: 5px;
overflow:hidden;
transition:0.4s;


}
`;
const CounterLabel = styled.div`
width:100px;
margin:30px auto;
background: #e91e63;
box-shadow:0px 0px 20px rgba(0,0,0,0.3);
border-radius: 5px;
color: #F1F1F1;
height: 30px;
line-height:30px;
text-align:center;
font-size:16px;
`
const CounterButton = styled.div`
margin: 50px auto;

`
const Button = styled.button`
margin:0px 40px ;
background:#131313;
box-shadow:0px 0px 20px rgba(0,0,0,0.3);
border-radius:5px;
color: #F1F1F1;
padding:10px;
&:hover{
    background:rgba(0,0,0,0.7);  
}

`



const ReduxCounter = () => {

    const count=useSelector((state)=> state.CounterReducer);
   const dispatch = useDispatch()

    return (
        <>
            <CounterContainer>
                <CounterBox>
                    <CounterButton>
                        <Button onClick={()=>dispatch(increment())} >Plus</Button>
                        <Button onClick={()=>dispatch(decrement(2))} >Minus</Button>
                    </CounterButton>
                    <CounterLabel>Count:{count}</CounterLabel>
                </CounterBox>
            </CounterContainer>

        </>
    )
}

// const mapStateToProps=state=>{
//     return{
//         count:state.count
//     }
// }

// const mapDispatchProps=dispatch=>{
//     return{
//         increment:()=> dispatch(increment()),
//         decrement:()=> dispatch(decrement())
//     }  
// }

export default ReduxCounter
//  connect(mapStateToProps,mapDispatchProps)(ReduxCounter)