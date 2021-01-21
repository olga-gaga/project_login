const regExpDictionary = {
    email: /^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{1,5}|[0-9]{1,3})(\]?)$/,
    password: /^[0-9a-zA-Z]{4,}$/,
};

/**
 * Function validate. Check Input on RegExp provided in regExpDictionary by input data-required type
 * @param {HTMLInputElement} element 
 * @returns {Boolean} - Return true if valid or doesn`t have data-required attr
 */

export function validate(element) {
    const regExpName = element.dataset.required;
    console.log(regExpName);
    if(!regExpDictionary[regExpName]) {
        return true;
    }

    return regExpDictionary[regExpName].test(element.value);

}