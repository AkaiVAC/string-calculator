import { describe, it, expect } from 'vitest';
import add from './add';

describe('String Calculator', () => {
    it('returns 0 when input is empty', () => {
        expect(add('')).toBe(0);
    });

    it('returns the number when input is a single value', () => {
        expect(add('1')).toBe(1);
    });

    it('returns sum for longer input sequences', () => {
        expect(add('1, 213, 32213, 123')).toBe(32550);
    });

    it('handles newline delimiters in addition to commas', () => {
        expect(add('1\n2,3')).toBe(6);
    });

    it('handles leading and trailing delimiters and whitespaces', () => {
        expect(add('1\n2,3,')).toBe(6);
        expect(add('1\n2,3\n')).toBe(6);
        expect(add('1\n2,3\n\n')).toBe(6);
        expect(add(' 1,2,3')).toBe(6);
        expect(add(' 1,2,3  ')).toBe(6);
    });

    it('handles custom delimiters', () => {
        expect(add('//;\n1;2;3;')).toBe(6);
        expect(add('//+\n1+2+3')).toBe(6);
    });

    it('prevents mixing delimiters when using custom delimiters', () => {
        expect(add('//;\n1,2,3;')).toBe(0);
        expect(add('//+\n1,2,3')).toBe(0);
    });

    it.todo('throws an exception when input contains negative numbers');
});
