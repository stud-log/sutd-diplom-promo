import { FC } from 'react';
import { classNames } from '@/shared/lib/helpers/classNames/classNames';
import cls from './HeaderMenu.module.scss';

interface HeaderMenuProps {
  className?: string;
}

export const HeaderMenu: FC<HeaderMenuProps> = ({ className }) => {

  return (
    <div className={classNames(cls.HeaderMenu, {}, [ className ])}> </div>
  );
};