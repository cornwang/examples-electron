import { ActionType, FileViewItem } from '../Types'

/**
 * Select an item.
 * @returns Action result.
 */
export const selectItem = (item: FileViewItem) => ({
  type: ActionType.RequestSelectItem as ActionType.RequestSelectItem,
  payload: {
    item
  }
})
