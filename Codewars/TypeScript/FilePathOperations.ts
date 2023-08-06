/*
  https://www.codewars.com/kata/5844e0890d3bedc5c5000e54/train/typescript
*/

class FileMaster {
  private path: string

  constructor(filepath: string) {
    this.path = filepath
  }

  extension(): string | null {
    const extensionMatch = this.path.match(/\.(.+)$/)
    return extensionMatch ? extensionMatch[1] : null
  }

  filename(): string | null {
    const filenameMatch = this.path.match(/\/(\w+)\./)
    return filenameMatch ? filenameMatch[1] : null
  }

  dirpath(): string | null {
    const dirpathMatch = this.path.match(/^\/?.+\//)
    return dirpathMatch ? dirpathMatch[0] : null
  }
}
