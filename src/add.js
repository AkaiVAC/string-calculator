import {
    customDelimiterFormat,
    inputPattern,
    negativeNumberPattern,
} from './regexPatterns';

const processInput = (input, delimiter = ',') => {
    if (!inputPattern(delimiter).test(input)) {
        return negativeNumberPattern.test(input)
            ? `negative numbers not allowed: ${input
                  .match(negativeNumberPattern)
                  .join(', ')}`
            : 0;
    }

    return input
        .trim()
        .replace(/[,\n\r]+$/g, '') // removes trailing commas and newlines
        .replaceAll('\n', delimiter)
        .split(delimiter)
        .reduce((acc, curr) => Number(acc) + Number(curr), 0);
};

const add = (input) => {
    switch (true) {
        case input.startsWith('//') && customDelimiterFormat.test(input):
            return processInput(input.slice(4), input[2]);
        default:
            return processInput(input);
    }
};

export default add;
