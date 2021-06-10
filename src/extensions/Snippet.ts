import * as vscode from 'vscode';
import { TextDocument, Position, CancellationToken } from 'vscode';

export default class MidoCompletionItemProvider
  implements vscode.CompletionItemProvider {
  public async provideCompletionItems (
    document: TextDocument,
    position: Position,
    token: CancellationToken
  ): Promise<any> {
    console.log(document, position);
    const {
      eol, // string
      fileName, // 路径 string
      getText, // 获取文档内容 function
      getWordRangeAtPosition, // 输入位置 function
      isClosed, // boolean
      isDirty, // boolean
      isUntitled, // boolean
      languageId, // 语言信息 string
      lineAt, // function 获取输入信息
      lineCount, // string
      offsetAt, // offset(position)
      positionAt, // positionAt(offset(position)) = position
      save, // function
      uri, // nodePath
      validatePosition, // validatePosition(position)
      validateRange, //
      version
    } = document;
    // 获取输入的字符
    let { text } = lineAt(position.line);
    
  }
}