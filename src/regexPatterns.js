/**
 * A regex pattern that matches strings composed of numbers separated by delimiters with optional whitespace:
 * - `/^` - Start of string
 * - `\s*` - One or more leading whitespaces
 * - `\d+` - One or more numbers (single digit or larger)
 * - `(?:(?:<delimiter>\s*|\n\s*)\d+)*` - A non-capturing group for a delimiter or a newline with optional trailing whitespace, followed by one or more digits
 * - `(?:[<delimiter>\n]\s*)*` - Another non-capturing group for zero or more trailing delimiters (a delimiter or newline) optionally followed by whitespace.
 * - `\s*` - One or more trailing whitespaces
 * - `$/` - End of string
 * 
 * @example
    "123"
    "123,456"
    "123, 456"
    "123,456, 789"
    " 123,456\n789"
    " 123,456,789\n\n,"
 */
export const inputPattern = (customDelimiter = ',') => {
    const escapedDelimiter = customDelimiter.replace(
        /[.*+?^${}()|[\]\\]/g,
        '\\$&'
    );

    return new RegExp(
        `^\\s*\\d+(?:(?:${escapedDelimiter}\\s*|\\n\\s*)\\d+)*(?:[${escapedDelimiter}\\n]\\s*)*\\s*$`
    );
};

/**
 * A regex pattern that represents the "//<character><newline>" format:
 * - `/^` - Start of string
 * - `\/\/` - The "//" pattern
 * - `(?:[A-Za-z!-/:-@[-`{-~])` - A non-capturing group for any alphabetic or single punctuation character
 * - `\n` - Mandatory newline
 * 
 * @example
    "//f\n"
    "//@\n"
    "//;\n"
 */
export const customDelimiterFormat = new RegExp(
    /^\/\/(?:[A-Za-z!-/:-@[-`{-~])\n/
);

/**
 * A regex that matches all numbers in the string with a hyphen in front
 * @example
 * "-123"
 * "123,-123,312"
 */
export const negativeNumberPattern = new RegExp(/-[0-9]+/g);
