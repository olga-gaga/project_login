/**
 * Function inputErrorTemplate
 * @param {String} message
 */
function inputErrorTemplate(message) {
  return `
    <div class="invalid-feedback">${message}</div>
  `;
}

/**
 * Function showInputError. Add input error
 * @param {HTMLInputElement} element
 */
export function showInputError(element) {
  const parent = element.parentElement;
  const message = element.dataset.invalidMessage || 'Invalid input';
  const template = inputErrorTemplate(message);
  element.classList.add('is-invalid');
  parent.insertAdjacentHTML('beforeend', template);
}

/**
 * Function removeInputError. Remove input error
 * @param {HTMLInputElement} element
 */
export function removeInputError(element) {
  const parent = element.parentElement;
  const error = parent.querySelector('.invalid-feedback');
  if (!error) return;

  element.classList.remove('is-invalid');
  parent.removeChild(error);
}

export async function addAutocomplite(id, list) {
  const optionContainer = getContainer(id);
  optionContainer.innerHTML = '';

  const fragment = Object.keys(list)
    .reduce( (acc, key) => {
      acc += optionTemplate(key);
      return acc;
    }, '' );
    optionContainer.insertAdjacentHTML('afterbegin', fragment);
}


function optionTemplate(value){
  return `<option data-id="">${value}</option>`;
}

function getContainer(id) {
  const container = document.getElementById(id);
  container.innerHTML = '';
  return container;
}