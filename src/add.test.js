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

    it.todo('handles newline delimiters in addition to commas');
    it.todo('handles custom delimiters');
    it.todo('throws an exception when input contains negative numbers');
});
