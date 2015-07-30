(function () {

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
    containerEl.setAttribute('style', 'position: fixed; display: block; width: 100%; height: 100%; left: 0px; top: 0px; z-index: 65539; pointer-events: none; background-color: rgba(255, 255, 0, 0.12);');

    // Inject the elements into the system app
    document.body.appendChild(containerEl);
  }
  
}());
