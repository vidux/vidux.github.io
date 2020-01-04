const actions = {
  GET_NASA_DATA_FETCH_START: 'GET_NASA_DATA_FETCH_START',
  GET_NASA_DATA_FETCH_DONE: 'GET_NASA_DATA_FETCH_DONE',
  GET_NASA_DATA_FETCH_ERROR: 'GET_NASA_DATA_FETCH_ERROR',


  getNasaAstroidJson: (data) => {
    return (dispatch, getState) => {
      
      dispatch({
        type: actions.GET_NASA_DATA_FETCH_START,
        payload: data
      });
    };
  },

};
export default actions;
