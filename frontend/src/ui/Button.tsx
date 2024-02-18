import { ComponentPropsWithoutRef, type PropsWithChildren } from 'react';
import { Link } from 'react-router-dom';

type ButtonProps = PropsWithChildren<{
  to?: never;
  mode: string;
  onClick?: any;
  className: string;
  disabled?: boolean;
}> &
  ComponentPropsWithoutRef<'button'>;

type LinkProps = PropsWithChildren<{
  to?: string;
  mode: string;
  onClick?: never;
  className?: string;
  disabled?: never;
}> &
  ComponentPropsWithoutRef<'a'>;

// const Button: FC<ButtonProps> = ({children, disabled, ..}) => {}
// ? Predictis type like 'props is LinkProps'
function isLinkProps(props: ButtonProps | LinkProps): props is LinkProps {
  return 'to' in props;
}

function Button(props: ButtonProps | LinkProps) {
  const { children, disabled, to, mode, className, onClick } = props;
  const base =
    'flex sm:h-[50px] h-[45px]  items-center justify-center rounded tracking-wide transition-colors duration-300 px-5 font-bold  disabled:cursor-not-allowed ' +
    className;

  const styles: { [key: string]: string } = {
    success: base + ' bg-green text-white',
    danger: base + ' bg-red text-white',
    black: base + ' bg-black text-white',
    small: base + ' px-4 py-2 md:px-5 md:py-2.5 text-xs text-white',
    info: base + ' border border-gray-200 bg-white text-[#566879]',
    light:
      'inline-block text-sm rounded-full border-2 border-stone-300 font-semibold uppercase tracking-wide text-stone-400 transition-colors duration-300 hover:bg-stone-300 hover:text-stone-800 focus:bg-stone-300 focus:text-stone-800 focus:outline-none focus:ring focus:ring-stone-200 focus:ring-offset-2 disabled:cursor-not-allowed px-4 py-2.5 md:px-6 md:py-3.5',
  };

  if (isLinkProps(props)) {
    return (
      <Link to={to as string} className={styles[mode]}>
        {children}
      </Link>
    );
  }

  if (onClick) {
    return (
      <button onClick={onClick} disabled={disabled} className={styles[mode]}>
        {children}
      </button>
    );
  }

  return (
    <button disabled={disabled} className={styles[mode]}>
      {children}
    </button>
  );
}

export default Button;
