/*
 * logService.js module is used for loging service
 * Used in: index.js, httpService.js
 */
//import Raven from "raven-js";

function init() {
  /* Raven.config("https://6f2af33d749f41cdb801e3cb5d848c8d@sentry.io/1843356", {
    release: "1-0-0",
    environment: "development-test"
  }).install();
  */
}

function log(error) {
  //Raven.captureException(error);
  console.error(error);
}

export default {
  init,
  log
};
