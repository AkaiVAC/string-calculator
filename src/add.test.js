import { describe, it, expect } from 'vitest';
import add from './add';

describe('String Calculator', () => {
    it('returns 0 when input is empty', () => {
        expect(add('')).toBe(0);
    });
    it.todo('returns 1 when input is "1"');
    it.todo('returns 6 when input is "1,5"');
    it.todo('returns sum for longer input sequences');
    it.todo('handles newline delimiters in addition to commas');
    it.todo('handles custom delimiters');
    it.todo('throws an exception when input contains negative numbers');
});
