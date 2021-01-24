/**
 * Function inputErrorTemplate
 * @param {String} msg
 */
function inputErrorTemplate(msg) {
  return `
    <div class="invalid-feedback">${msg}</div>
  `;
}

/**
 * Function showInputError. Add input error
 * @param {HTMLInputElement} el
 */
export function showInputError(el) {
  const parent = el.parentElement;
  const msg = el.dataset.invalidMessage || 'Invalid input';
  const template = inputErrorTemplate(msg);
  el.classList.add('is-invalid');
  parent.insertAdjacentHTML('beforeend', template);
}
/**
 * Function removeInputError. Remove input error
 * @param {HTMLInputElement} el
 */
export function removeInputError(el) {
  const parent = el.parentElement;
  const err = parent.querySelector('.invalid-feedback');
  if (!err) return;

  el.classList.remove('is-invalid');
  parent.removeChild(err);
}

export async function addAutocomplite(id, list) {
  const optionContainer = document.getElementById(id);
  optionTemplate.innerHTML = '';
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