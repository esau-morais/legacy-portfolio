const requiredFieldMessage = '// this field is required!'
const validEmailMessage = '// this field must have a valid e-mail!'

const emailRegEx = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,4}$/ig

export { requiredFieldMessage, validEmailMessage, emailRegEx }
