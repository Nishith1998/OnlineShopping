import { ReactElement, JSXElementConstructor, ReactNode, ReactPortal } from 'react';
import classes from './Card.module.css';

const Card = (props: { className?: any; children: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | null | undefined; }) => {
  return (
    <section
      className={`${classes.card} ${props.className ? props.className : ''}`}
    >
      {props.children}
    </section>
  );
};

export default Card;
