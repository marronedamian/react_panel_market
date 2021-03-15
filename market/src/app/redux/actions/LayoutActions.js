export const SET_LAYOUT_SETTINGS = "LAYOUT_SET_SETTINGS"

export const setLayoutSettings = (data) => (dispatch) => {
  dispatch({
    type: SET_LAYOUT_SETTINGS,
    data: data,
  })
}
