
/****** Screenshots FUNCTION  ************************************************/

function initScreenshotsSameExension() {

  // sameInsertModal("bella la vita ... ");

  let screenshotValue = prompt('Enter a name for your screenshot?','');
  if (screenshotValue != null) {

      alert("initScreenshotsSameExension");

      sameDeActiveScreenshot();
      const options = {operation:"sameGetScreenshots", user:sameGetUser(), idmeeting:sameGetIdMeeting(), value:screenshotValue };

      alert(options);
      alert(same_id_extension);

      // v2
      chrome.runtime.sendMessage( same_id_extension , options );

  }

}

function sameActiveScreenshot() {
    /* viene riattivato da una funzione nel content.js dell'extension chrome */
}
function sameDeActiveScreenshot() {

    sameGetScreenshot();
    sameDisplayCommon("same_panel_base","none");
}
