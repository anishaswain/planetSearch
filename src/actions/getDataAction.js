export const getFullDataAction = (payload) => {
  return {
    type: "FETCH_FULL_DATA",
    payload: payload,
  };
};

export const getColors = (payload) => {
  return {
    type: "FETCH_COLORS",
    payload: payload,
  };
};

export const getShapes = (payload) => {
  return {
    type: "FETCH_SHAPES",
    payload: payload,
  };
};

export const getSizes = (payload) => {
  return {
    type: "FETCH_SIZES",
    payload: payload,
  };
};
