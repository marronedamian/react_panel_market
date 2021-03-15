import React from "react"
import PropTypes from "prop-types"
import { Icon, IconButton } from "@material-ui/core"
import { connect } from "react-redux"
import { setLayoutSettings } from "app/redux/actions/LayoutActions"
import { withRouter } from "react-router-dom"
import Brand from "../SharedCompoents/Brand"

const SidenavHeader = ({ mode, setLayoutSettings }) => {
  const sidenavToggle = () => {
    setLayoutSettings({
      leftSidebar: { mode: mode === "mobile" ? "close" : "mobile" },
    })
  }

  return (
    <Brand>
      <IconButton onClick={sidenavToggle} className="hide-on-pc">
        <Icon>close</Icon>
      </IconButton>
    </Brand>
  )
}

const mapStateToProps = (state) => ({
  setLayoutSettings: PropTypes.func.isRequired,
  mode: state.layout.leftSidebar.mode,
})

export default withRouter(
  connect(mapStateToProps, { setLayoutSettings })(SidenavHeader),
)
