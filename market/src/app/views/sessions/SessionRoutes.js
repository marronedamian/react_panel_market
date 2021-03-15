import SignUp from "./SignUp"
import SignIn from "./SignIn"
import NotFound from "./NotFound"
import ForgotPassword from "./ForgotPassword"
import PasswordResetSent from "./PasswordResetSent"
import ResetPassword from "./ResetPassword"
import PasswordResetSuccess from "./PasswordResetSuccess"

const layout = {
  showBars: false,
}

const sessionRoutes = [
  {
    path: "/session/signup",
    component: SignUp,
    exact: true,
    layout,
  },
  {
    path: "/session/signin",
    component: SignIn,
    exact: true,
    layout,
  },
  {
    path: "/session/forgot-password",
    component: ForgotPassword,
    exact: true,
    layout,
  },
  {
    path: "/session/password-reset-sent",
    component: PasswordResetSent,
    exact: true,
    layout,
  },
  {
    path: "/session/reset-password",
    component: ResetPassword,
    exact: true,
    layout,
  },
  {
    path: "/session/reset-password-success",
    component: PasswordResetSuccess,
    exact: true,
    layout,
  },
  {
    path: "/session/404",
    component: NotFound,
    exact: true,
    layout,
  },
]

export default sessionRoutes
