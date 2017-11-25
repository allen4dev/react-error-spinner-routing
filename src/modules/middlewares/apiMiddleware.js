import helpers from './../../utils/helpers';

const apiMiddleware = ({ dispatch, getstate }) => next => async action => {
  console.log('ACTION', action);
  if (action.type !== 'API') return next(action);

  const { success } = action.payload;
  const { apiEndpoint, filter } = action.meta;

  dispatch({ type: 'REQUEST_RESOURCE', payload: { filter } });

  let response = null;

  try {
    response = await apiEndpoint();
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
