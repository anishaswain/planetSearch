export const updateUrl = (type) => {
  const nextURL = `http://localhost:3001/${type}`;
  const nextTitle = "My new page title";
  const nextState = { additionalInformation: "Updated the URL with JS" };
  window.history.pushState(nextState, nextTitle, nextURL);
  window.history.replaceState(nextState, nextTitle, nextURL);
};
