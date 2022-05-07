interface IConfig {
  url: string;
}

declare module 'myPackage' {
  function init(config: IConfig): boolean;
  function add(num: number): number;
}
