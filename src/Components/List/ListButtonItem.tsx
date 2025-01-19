import React from 'react';

interface ListButtonItemProps {
  children: React.ReactNode;
  className?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const ListButtonItem: React.FC<ListButtonItemProps> = ({children, className, onClick}) => {
    return (<button className={`block px-4 py-2 w-full text-sm text-left rounded-lg ${className}`} onClick={onClick}>{children}</button>)
}

export default ListButtonItem