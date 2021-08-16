export const setColorFilter = (type) => {
  return {
    type: "SET_COLOR_FILTER",
    payload: type,
  };
};

export const setShapeFilter = (type) => {
  return {
    type: "SET_SHAPE_FILTER",
    payload: type,
  };
};

export const setSizeFilter = (type) => {
  return {
    type: "SET_SIZE_FILTER",
    payload: type,
  };
};

export const setSearchFilter = (type) => {
  return {
    type: "SET_SEARCH_FILTER",
    payload: type,
  };
};
