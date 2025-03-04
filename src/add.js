/**
 * A regex pattern that matches strings composed of numbers separated by commas with optional whitespace:
 * @example
    "123"
    "123,456"
    "123, 456"
    "123,456, 789"
 */
const inputPattern = new RegExp(/^\d+(?:(?:,\s*|\n\s*)\d+)*$/);

const add = (input) => {
    switch (true) {
        case inputPattern.test(input):
            return input
                .replaceAll('\n', ',')
                .split(',')
                .reduce((acc, curr) => Number(acc) + Number(curr), 0);
        default:
            return 0;
    }
};

export default add;
