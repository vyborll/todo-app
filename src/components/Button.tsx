import { ComponentProps, FC } from 'react';
import clsx from 'clsx';

type ButtonProps = ComponentProps<'button'>;

interface Props extends ButtonProps {
  variant?: 'primary' | 'secondary' | 'danger';
  fullWidth?: boolean;
}

const Button: FC<Props> = ({ variant = 'primary', fullWidth = false, children, ...props }) => {
  return (
    <button
      className={clsx(
        'flex items-center justify-center px-6 py-3 rounded font-medium focus:outline-none disabled:opacity-60 disabled:pointer-events-none hover:bg-opacity-80',
        {
          'bg-blue-500 text-white': variant === 'primary',
          'bg-gray-200 text-gray-900': variant === 'secondary',
          'bg-red-500 text-white': variant === 'danger',
          'w-full': !!fullWidth,
        }
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
