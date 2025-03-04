/**
 * A regex pattern that matches strings composed of numbers separated by commas with optional whitespace:
 * `/^` - Start of string
 * `\s*` - One or more leading whitespaces
 * `\d+` - One or more numbers (single digit or larger)
 * `(?:(?:,\s*|\n\s*)\d+)*` - A non-capturing group for a comma or a newline with optional trailing whitespace, followed by one or more digits
 * `(?:[,\n]\s*)*` - Another non-capturing group for zero or more trailing delimiters (a comma or newline) optionally followed by whitespace.
 * `\s*` - One or more trailing whitespaces
 * `$/` - End of string
 * 
 * @example
    "123"
    "123,456"
    "123, 456"
    "123,456, 789"
    " 123,456\n789"
    " 123,456,789\n\n,"
 */
const inputPattern = new RegExp(
    /^\s*\d+(?:(?:,\s*|\n\s*)\d+)*(?:[,\n]\s*)*\s*$/
);

const add = (input) => {
    switch (true) {
        case inputPattern.test(input):
            return input
                .trim()
                .replace(/[,\n\r]+$/g, '')
                .replaceAll('\n', ',')
                .split(',')
                .reduce((acc, curr) => Number(acc) + Number(curr), 0);
        default:
            return 0;
    }
};

export default add;
