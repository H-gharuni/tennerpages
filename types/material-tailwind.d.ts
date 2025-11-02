declare module "@material-tailwind/react" {
  import { ComponentProps, ReactNode } from "react";

  export interface TypographyProps {
    variant?: any;
    color?: any;
    className?: string;
    children?: ReactNode;
    as?: any;
  }

  export function Typography(props: TypographyProps): JSX.Element;
  export function Button(props: any): JSX.Element;
  export function Card(props: any): JSX.Element;
  export function CardBody(props: any): JSX.Element;
}
