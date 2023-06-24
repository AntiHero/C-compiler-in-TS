export class Lexer {
  private source: string[] = [];

  private row = 0;

  private col = 0;

  private bol = 0;

  private prepare(text: string) {
    this.source = text.trim().split('\n');
  }

  public constructor(text: string) {
    this.prepare(text);
  }

  public next() {}
}
