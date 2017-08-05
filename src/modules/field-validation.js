//UK postcode validation
const errorPrefix = 'errors.formFields.';

const normalizeUkPostcode = value => {
  if (!value) {
    return value;
  }
  const parts = value.toUpperCase().match(/^([A-Z]{1,2}\d{1,2}[A-Z]?)\s*(\d[A-Z]{2})/);
  if (parts) {
    parts.shift();
    return parts.join(' ');
  }
  return value.toUpperCase();
};

const ukPostcode = (value, field) => {
  const pattern = /^([Gg][Ii][Rr] 0[Aa]{2})|((([A-Za-z][0-9]{1,2})|(([A-Za-z][A-Ha-hJ-Yj-y][0-9]{1,2})|(([A-Za-z][0-9][A-Za-z])|([A-Za-z][A-Ha-hJ-Yj-y][0-9]?[A-Za-z])))) [0-9][A-Za-z]{2})$/;

  const normalizedPostcode = normalizeUkPostcode(value);
  if (normalizedPostcode !== value) {
    field.setValue(normalizedPostcode); //todo: consider alternatives to changing state here. Next validation would use the previous state
  }

  if (!(pattern.test(normalizedPostcode))) {
    return errorPrefix + 'postalCode';
  }
};

//MaxLength validation
const maxLength = max => { // Returns a function (closure) that captures max and uses for validation
  return value => {
    return value && value.trim().length > max ? [errorPrefix + 'maxlength', max] : undefined;
  };
};

//Required validation
const requiredErrorKey = 'errors.formFields.required';

const required = value => {
  if (typeof value === 'boolean') {
    return value ? undefined : requiredErrorKey;
  }
  if (value === undefined || value.trim().length === 0) {
    return requiredErrorKey;
  }
};

module.exports = {
  ukPostcode: ukPostcode,
  maxLength: maxLength,
  required: required
};
