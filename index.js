(function () {
  //var MANIFEST_URL = 'app://262f1d31-7c43-054d-85cd-c64786ce1cfc/manifest.webapp';
  var MANIFEST_URL = 'https://elin-moco.github.io/fxos-addon-yellow-mask/manifest.webapp';

  // If injecting into an app that was already running at the time
  // the app was enabled, simply initialize it.
  if (document.documentElement) {
    initialize();
  }

  // Otherwise, we need to wait for the DOM to be ready before
  // starting initialization since add-ons are usually (always?)
  // injected *before* `document.documentElement` is defined.
  else {
    window.addEventListener('DOMContentLoaded', initialize);
  }

  function initialize() {

    // Just a small shortcut to repeat myself less
    var $$ = document.getElementById.bind(document);

    // Remove existing control, for when this addon is re-run.
    var existingContainerEl = $$('yellow-mask');
    if (existingContainerEl) {
      existingContainerEl.parentNode.removeChild(existingContainerEl);
    }

    // Build the brightness control elements.
    var containerEl = document.createElement('div');
    containerEl.setAttribute('id', 'yellow-mask');
    containerEl.setAttribute('data-time-inserted', Date.now());

    // Inject the elements into the system app
    document.body.appendChild(containerEl);
  }

  function uninitialize() {
    var $$ = document.getElementById.bind(document);
    var existingContainerEl = $$('yellow-mask');
    existingContainerEl.parentNode.removeChild(existingContainerEl);
  }

  navigator.mozApps.mgmt.onenabledstatechange = function(event) {
    var app = event.application;
    if (app.manifestURL === MANIFEST_URL && !app.enabled) {
      uninitialize();
    }
  };

}());
