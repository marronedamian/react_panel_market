import { combineReducers } from "redux"
import LoginReducer from "./LoginReducer"
import UserReducer from "./UserReducer"
import LayoutReducer from "./LayoutReducer"
import ScrumBoardReducer from "./ScrumBoardReducer"
import EcommerceReducer from "./EcommerceReducer"
import NavigationReducer from "./NavigationReducer"
import NotificationReducer from "./NotificationReducer"

const RootReducer = combineReducers({
  login: LoginReducer,
  user: UserReducer,
  layout: LayoutReducer,
  scrumboard: ScrumBoardReducer,
  ecommerce: EcommerceReducer,
  navigations: NavigationReducer,
  notifications: NotificationReducer,
})

export default RootReducer
