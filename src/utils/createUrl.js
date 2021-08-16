import { updateUrl } from "./updateUrl";

export const createUrl = (payload) => {
  const mainRoute = "planets";
  const queryParam = window.location.search.slice(1);
  let params = "";
  let final = "";

  const { colorFilter, sizeFilter, shapeFilter, searchFilter } = payload;
  if (colorFilter) {
    colorFilter.map((id) => {
      params += `&color=${id}`;
      return params;
    });
  }
  if (sizeFilter) {
    sizeFilter.map((id) => {
      params += `&size=${id}`;
      return params;
    });
  }
  if (shapeFilter) {
    shapeFilter.map((id) => {
      params += `&shape=${id}`;
      return params;
    });
  }
  if (searchFilter) {
    params += `&q=${searchFilter}`;
  }

  final =
    queryParam && params === ""
      ? mainRoute + "?" + queryParam
      : mainRoute + "?" + params;
  updateUrl(final);

  return final;
};
