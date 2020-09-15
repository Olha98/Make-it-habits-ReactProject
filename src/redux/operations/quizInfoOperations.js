import quizInfoActions from "../actions/quizInfoActions";
import api from "../../api/api";

const addInfo = (info) => async (dispatch) => {
  dispatch(quizInfoActions.addInfoRequest());
  try {
    const { data } = await api.addInfoAPI(info);
    console.log(data);
    dispatch(quizInfoActions.addInfoSuccess(data));
  } catch (error) {
    dispatch(quizInfoActions.getInfoError(error));
  }
};

const fetchInfo = () => async (dispatch) => {
  dispatch(quizInfoActions.getInfoRequest());
  try {
    const { data } = await api.getInfoAPI();
    const { user } = data;
    console.log(user.quizInfo);
    dispatch(quizInfoActions.getInfoSuccess(user.quizInfo));
  } catch (error) {
    dispatch(quizInfoActions.getInfoSuccess(error));
  }
};

export default { addInfo, fetchInfo };
