import { window, Position, Range } from 'vscode';
import { ToastType, BarItem } from './constants/utils';

/**
 * 获取输入的字符
 * @param {object} position
 * @returns {string}
 */
export const getInputText = (position: any) => {
  let editor: any = window.activeTextEditor;
  let { line, character } = position;
  let start = new Position(line, character - 1);
  let range = new Range(start, position);
  return editor.document.getText(range);
};

/**
 * vscode Toast
 * @param content
 */
export const toast = (content: string, type?: string) => {
  if (!content) {
    return;
  }

  switch (type) {
    case ToastType.warning:
      window.showWarningMessage(content);
      break;
    case ToastType.error:
      window.showErrorMessage(content);
      break;
    default:
      window.showInformationMessage(content);
      break;
  }
};

/**
 *  创建bar
 */
export const createBar = (
  direction?: 'left' | 'rigth',
  priority?: number,
  text?: string
) => {
  const status = window.createStatusBarItem(BarItem[direction = 'left'] as number, priority);
  if (!text) {
    return status;
  }
  status.text = text as string;
  status.show();

  return status;
};