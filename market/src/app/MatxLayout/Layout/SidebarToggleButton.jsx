import React from "react"
import { Icon, IconButton } from "@material-ui/core"
import { connect } from "react-redux"
import { setLayoutSettings } from "app/redux/actions/LayoutActions"
import PropTypes from "prop-types"
import { isMdScreen } from "utils"

const SidebarToggleButton = ({ layout, setLayoutSettings }) => {
  const handleSidebarToggle = () => {
    let mode
    if (isMdScreen()) {
      mode = layout.leftSidebar.mode === "close" ? "mobile" : "close"
    } else {
      mode = layout.leftSidebar.mode === "full" ? "close" : "full"
    }

    setLayoutSettings({ leftSidebar: { mode } })
  }

  return (
    <IconButton onClick={handleSidebarToggle} className="hide-on-pc">
      <Icon>menu</Icon>
    </IconButton>
  )
}

const mapStateToProps = (state) => ({
  setLayoutSettings: PropTypes.func.isRequired,
  layout: state.layout,
})

export default connect(mapStateToProps, { setLayoutSettings })(
  SidebarToggleButton,
)
