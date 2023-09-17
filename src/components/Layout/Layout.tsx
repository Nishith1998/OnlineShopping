import { Fragment, JSXElementConstructor, ReactElement, ReactNode, ReactPortal } from 'react';
import Header from './Header';

const Layout = (props: { children: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | null | undefined; }) => {
  return (
    <Fragment>
      <Header />
      <main>{props.children}</main>
    </Fragment>
  );
};

export default Layout;
