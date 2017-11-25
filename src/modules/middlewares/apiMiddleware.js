import helpers from './../../utils/helpers';

const apiMiddleware = ({ dispatch, getState }) => next => async action => {
  if (action.type !== 'API') return next(action);

  const { success } = action.payload;
  const { apiEndpoint, filter } = action.meta;

  dispatch({ type: 'REQUEST_RESOURCE', payload: { filter } });

  let response = null;
  const nextPage = getState()[filter].page;
  try {
    if (nextPage) {
      response = await apiEndpoint(nextPage);
    } else {
      response = await apiEndpoint();
    }
    response = helpers.responseToObj(response);
  } catch (e) {
    response = new Error('Something goes wrong');
    return dispatch({
      type: 'REQUEST_RESOURCE_FAIL',
      payload: { filter, response },
    });
  }

  dispatch(success(response));
};

export default apiMiddleware;
