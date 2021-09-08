import data from '../db.json';
export const initalState = {
    surveyInfo : data
}

const QuestionReducer =(state = initalState, action)=>{
    switch (action.type) {
        case  'UPDATE_ANSWER':
            state.surveyInfo.questionBank.forEach((value, index)=>{
                if(value.currentSelection){
                    value.userSelectedAnswers = action.payload;
                    value.userProvidedAnswer= true;
                }
            })
            return {
                ...state
            }
            break;
        case 'NEXT_QUESTON':
            state.surveyInfo.questionBank.forEach((value, index)=>{
                if(action.payload === index){
                    value.currentSelection= false;
                }
                if(action.payload + 1 === index){
                    value.currentSelection= true;
                }
            })
            return {
                ...state
            }
            break;
            case 'PREV_QUESTON':
            state.surveyInfo.questionBank.forEach((value, index)=>{
                if(action.payload === index){
                    value.currentSelection= false;
                }
                if(action.payload -1 === index){
                    value.currentSelection= true;
                }
            })
            return {
                ...state
            }
            break;
         default:
                return { ...state };
    }

}

export default QuestionReducer;