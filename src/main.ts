import fs        from 'node:fs/promises';
import { Lexer } from './lexer.js';

const source = await fs.readFile('main.c', {
  encoding: 'utf-8',
});

const lexer = new Lexer(source);
