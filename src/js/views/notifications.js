function getContainer() {
  return document.querySelector('.notify-container');
}

function alertTemplate(message, className, index) {
  return `
    <div class="alert ${className}" style="max-width: 350px;" data-index="${index}">
      ${message}
    </div>
  `;
}

function notifyContainerTemplate() {
  return `
    <div class="notify-container" style="position: fixed; top: 10px; right: 10px; z-index: 99;"></div>
  `;
}

function createNotifyContainer() {
  const template = notifyContainerTemplate();
  document.body.insertAdjacentHTML('afterbegin', template);
}

function getAlertIndex() {
  return document.querySelectorAll('.notify-container .alert').length;
}

/**
 * Function notify. Show notification message
 * @param {Object} settings
 * @param {string} settings.message
 * @param {string} settings.className
 * @param {number} settings.timeout
 */
export function notify({
  message = 'Info message',
  className = 'alert-info',
  timeout = 2000,
} = {}) {
  
  if (!getContainer()) {
    createNotifyContainer();
  }

  const index = getAlertIndex();
  const template = alertTemplate(message, className, index);
  const container = getContainer();

  container.insertAdjacentHTML('beforeend', template);

  setTimeout(() => closeNotify(index), timeout);
}

export function closeNotify(index) {
  let alert;

  if (index === undefined) {
    alert = document.querySelector('.notify-container .alert');
  } else {
    alert = document.querySelector(
      `.notify-container .alert[data-index="${index}"]`,
    );
  }

  if (!alert) {
    console.warn('Alert not fount');
    return;
  }

  const container = getContainer();
  container.removeChild(alert);
}
