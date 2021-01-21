/**
 * Function inputErrorTemplate
 * @param {String} message 
 * @returns {String} - Return input error template
 */
function inputErrorTemplate(message) {
    return `
        <div class="invalid-feedback"> ${message} </div>
    `;
}

/**
 * Function showInputError. Add input error
 * @param {HTMLInputElement} element 
 */
export function showInputError(element){
    const parent = element.parentElement;
    const message = element.dataset.invalidMessage || 'Invalid data';
    const template = inputErrorTemplate(message);
    element.classList.add('is-invalid');
    parent.insertAdjacentHTML('beforeEnd', template);
}

/**
 * Function removeInputError. Remove input error
 * @param {HTMLInputElement} element 
 */

export function removeInputError(element) {
    const parent = element.parentElement;
    const error = parent.querySelector('.invalid-feedback');
    if(!error) return;
    
    element.classList.remove('is-invalid');
    parent.removeChild(error);
}