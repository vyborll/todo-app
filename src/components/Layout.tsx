import { FC } from 'react';

const Layout: FC = ({ children }) => {
  return (
    <div className="max-w-5xl mx-auto mt-14 lg:px-2 px-10">{children}</div>
  );
};

export default Layout;
