import { showInputError} from '../views/form';
const regExpDic = {
  email: /^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{1,5}|[0-9]{1,3})(\]?)$/,
  phone: /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/,
  password: /^[0-9a-zA-Z]{4,}$/,
  last_name: /^[а-яА-Я\-]+$/,
  first_name: /^[а-яА-Я\-]+$/,
  nickname: /^[0-9a-zA-Z]{4,}$/, 
};

/**
 * Function validate. Check Input on RegExp provided in regExpDic by input data-required type
 * @param {HTMLInputElement} element
 * @returns {Boolean} - Return true if input valid or doesn't has data-required attr
 */
export function validate(element) {
  const regExpName = element.dataset.required;
  if (!regExpDic[regExpName]) return true;
  return regExpDic[regExpName].test(element.value);
}

export function validForm(inputs){
  const isValidForm = inputs.every(element => {
    //debugger;
    const isValidInput = validate(element) && element.value;
    if (!isValidInput) {
      showInputError(element);
    }
    return isValidInput;
  });
  return isValidForm;
}