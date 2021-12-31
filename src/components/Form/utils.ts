// errors with given status codes are in valid format to be used as parseErrorStringToInfoObject arg
// [field] [error message]
export const STATUS_CODES_TO_MAP_FIELDS = [
  400, // bad input
  409, // conflict
];

export const parseErrorStringToInfoObject = (
  message: string
): { field: string; message: string } => ({
  message: message.charAt(0).toUpperCase() + message.slice(1),
  // field name comes first
  field: message.split(" ")[0],
});

export const mapErrorStringsToInfoObjects = (errors: string[]) =>
  errors.map(parseErrorStringToInfoObject);
