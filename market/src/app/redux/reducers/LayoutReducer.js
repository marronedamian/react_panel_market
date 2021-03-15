import { merge } from "lodash"
import { SET_LAYOUT_SETTINGS } from "../actions/LayoutActions"

const initialState = {
  showBars: true,
  title: null,
  leftSidebar: {
    mode: "full", // full, close, compact, mobile,
  },
}

const LayoutReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_LAYOUT_SETTINGS:
      return merge({}, state, action.data)
    default:
      return state
  }
}

export default LayoutReducer
