import { Map } from 'immutable';
import actions from './actions';

const initState = new Map({
 
});

export default function reducer(state = initState, action) {
 
  switch (action.type) {
    case actions.GET_NASA_DATA_FETCH_START:
      return state
        .set('loading', true);

    case actions.GET_NASA_DATA_FETCH_DONE:
      
      return state
        .set('nasa_iotd_data', action.payload)
        .set('loading', false);

    case actions.GET_NASA_DATA_FETCH_ERROR:
      return state
        .set('nasa_iotd_data', {})
        .set('loading', false);
    default:
      return state;
  }
}
