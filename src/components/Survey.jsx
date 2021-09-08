import { useStateValue } from "../context/DataContext";
import styled from 'styled-components';

const Survey =()=>{

    const [prevState, dispatch]= useStateValue();
    const questions = [...prevState.surveyInfo.questionBank];
    console.log(questions);
    const selectionChange =(e)=>{
        dispatch({type:'UPDATE_ANSWER', payload: e.target.value});
    }
    const nextClick= index =>{
        dispatch({type:'NEXT_QUESTON', payload:index});
    }
    const prevClick= index =>{
        dispatch({type:'PREV_QUESTON', payload:index});
    }
    const questionBank = questions => questions.map((value,index)=>{
        if(value.currentSelection){
            return   <>

            <Container>
  
            <QuestionContainer>
                <Questions>
                <p>{value.question}</p>
                </Questions>
         
        
               {value.answers.map((v,i)=>(
                   <>
                   <AnswerContainer>
                   <input type="radio"  name="Radio"  value={v}  onChange={selectionChange} checked={value.userSelectedAnswers === v}/>
                   <AnswerLabel>
                   <label>{v}</label>
                   </AnswerLabel>
                   </AnswerContainer>
                   
                   
                   </>
               ))}
                 </QuestionContainer>
                <NavigationSection>
                    <Buttons onClick={(e)=>prevClick(index, e)}> PREV</Buttons>
                    <Buttons onClick={(e)=>nextClick(index, e)}>Next</Buttons>
                </NavigationSection>
                
            </Container>
              
            </>
        }
      
    })

    return <>   
        {questionBank(questions)}
    </>


}

export default Survey;

const NavigationSection = styled.div`
display:inline-flex;
justify-content:center;
align-items :center;
flex-wrap: wrap;
gap:12px;
`

const Buttons = styled.button`
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
  color: tomato;
  border-color: tomato;
  background-color:white;
  cursor:pointer;

`


const QuestionContainer = styled.div`
display:flex;
flex-direction:column;
color:black;
`
const Questions = styled.span`
align-items : flex-start;
display:flex;
padding:12px;
`

const Container = styled.div`
border: 1px solid palevioletred;
margin-left:40px;
margin-right:40px;
`

const AnswerContainer = styled.div`
 display:flex;
 justify-content:flex-start;
padding :12px;
margin-left:18px;

`
const AnswerLabel = styled.span`
margin-left:5px;
`