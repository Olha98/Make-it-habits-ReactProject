import quizInfoActions from "../actions/quizInfoActions";
import api from "../../api/api";

const addInfo = (info) => async (dispatch) => {
  dispatch(quizInfoActions.addInfoRequest());
  try {
    const { data, config } = await api.addInfoAPI(info);
    console.log(data, config);
    dispatch(
      quizInfoActions.addInfoSuccess({
        ...JSON.parse(config.data),
      })
    );
  } catch (error) {
    dispatch(quizInfoActions.getInfoError(error));
  }
};

const fetchInfo = () => async (dispatch) => {
  dispatch(quizInfoActions.getInfoRequest());
  try {
    const { data } = await api.getInfoAPI();
    console.log(data);
    dispatch(quizInfoActions.getInfoSuccess(data[0]));
  } catch (error) {
    dispatch(quizInfoActions.getInfoSuccess(error));
  }
};

export default { addInfo, fetchInfo };
