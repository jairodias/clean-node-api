export interface Encrypter {
  encrypt: (valiue: string) => Promise<string>
}
