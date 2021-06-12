import { FC, ComponentProps, forwardRef } from 'react';

interface Props extends ComponentProps<'input'> {
  label: string;
}

const Input: FC<Props> = ({ label, type = 'text', ...props }) => {
  return (
    <label>
      <input className="bg-white text-gray-400 w-full rounded-md px-4 py-2" type={type} {...props} />
    </label>
  );
};

export default Input;
