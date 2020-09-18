import { GET_HABITS } from "../constants/habitsConstants";

const initialState = {
    allHabits: [],
    currentHabits: [],
    doneHabits: [],
}


const habitsReducer = (state = { ...initialState }, action) => {
    switch (action.type) {
        case GET_HABITS:
            console.log('action=======================>', action.payload)
            return {...initialState, allHabits: [...action.payload]}
        default:
            return state;
    }

};
export default habitsReducer;