import { capitalize } from "utils/common";
import { ERROR_CODES } from "utils/const/error-codes";

// errors with given status codes are in valid format to be used as parseErrorStringToInfoObject arg
// [field] [error message]
export const STATUS_CODES_TO_MAP_FIELDS = [
  ERROR_CODES.BAD_INPUT,
  ERROR_CODES.CONFLICT,
];

export const parseErrorStringToInfoObject = (
  message: string
): { field: string; message: string } => ({
  message: capitalize(message),
  // field name comes first
  field: message.split(" ")[0],
});

export const mapErrorStringsToInfoObjects = (errors: string[]) =>
  errors.map(parseErrorStringToInfoObject);
