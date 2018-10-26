import { CHANGE_INPUT_VALUE, CHANGE_LIST_ITEM, DELETE_LIST_ITEM } from './actionTypes'
const getChangeListInputVal = (value) => ({
  type: CHANGE_INPUT_VALUE,
  value
});
const getChangeList = () => ({
  type: CHANGE_LIST_ITEM
});
const getDeleteListItem = (index) => ({
  type: DELETE_LIST_ITEM,
  value: index
})
export { getChangeListInputVal, getChangeList, getDeleteListItem };