function responseToObj(response) {
  return response.reduce((obj, item) => {
    return {
      ...obj,
      [item.id]: item,
    };
  }, {});
}

export default {
  responseToObj,
};
