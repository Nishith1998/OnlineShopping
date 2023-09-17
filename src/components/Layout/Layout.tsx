import {
  Fragment,
  JSXElementConstructor,
  ReactElement,
  ReactNode,
  ReactPortal,
} from "react";
import Header from "./Header";
import { useSelector } from "react-redux";
import { GlobalState } from "../../store";
import Notification from "../UI/Notification";

const Layout = (props: {
  children:
    | string
    | number
    | boolean
    | ReactElement<any, string | JSXElementConstructor<any>>
    | Iterable<ReactNode>
    | ReactPortal
    | null
    | undefined;
}) => {
  const notification = useSelector(
    (state: GlobalState) => state.ui.notification
  );
  return (
    <Fragment>
      {notification && (
        <Notification
          message={notification.message}
          title={notification.title}
          status={notification.status}
        />
      )}
      <Header />
      <main>{props.children}</main>
    </Fragment>
  );
};

export default Layout;
