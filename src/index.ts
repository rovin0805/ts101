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

class Blockchain {
  private blocks: Block[];
  constructor() {
    this.blocks = [];
  }

  private getPrevHash() {
    if (this.blocks.length === 0) {
      return '';
    } else {
      const lastBlock = this.blocks[this.blocks.length - 1];
      return lastBlock.hash;
    }
  }

  public addBlock(data: string) {
    const prevHash = this.getPrevHash();
    const height = this.blocks.length + 1;
    const newBlock = new Block(prevHash, height, data);
    this.blocks.push(newBlock);
  }

  public getBlocks() {
    return [...this.blocks];
  }
}

const blockchain = new Blockchain();

blockchain.addBlock('1st one');
blockchain.addBlock('2nd one');
blockchain.addBlock('3rd one');

console.log(blockchain.getBlocks());
