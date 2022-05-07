/**
 * Simple Block Chain
 */
import crypto from 'crypto';

interface IBlock {
  hash: string;
  prevHash: string;
  height: number;
  data: string;
}

class Block implements IBlock {
  public hash: string;
  constructor(
    public prevHash: string,
    public height: number,
    public data: string
  ) {
    this.hash = Block.calculateHash(prevHash, height, data);
  }
  static calculateHash(prevHash: string, height: number, data: string) {
    const toHash = `${prevHash}${height}${data}`;
    return crypto.createHash('sha256').update(toHash).digest('hex');
  }
}
