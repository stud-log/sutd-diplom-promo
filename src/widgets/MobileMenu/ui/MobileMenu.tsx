'use client';

import { useAppDispatch, useAppSelector } from '@/app/providers/ReduxProvider';

import { FC } from 'react';
import { burgerMenuActions } from '@/app/providers/ReduxProvider/slices/burgerMenu';
import { classNames } from '@/shared/lib/helpers/classNames/classNames';
import cls from './MobileMenu.module.scss';
import { handleClickScroll } from '@/shared/lib/helpers/handleClickScroll';
import { menuOpt } from '@/widgets/HeaderMenu/ui/HeaderMenu';

interface MobileMenuProps {
  className?: string;
}

export const MobileMenu: FC<MobileMenuProps> = ({ className }) => {
  const burger = useAppSelector(state => state.burgerMenu);
  const dispatch = useAppDispatch();
  const scrollTo = (e: any, element: string) => {
    e.preventDefault();
    dispatch(burgerMenuActions.closeModal());
    setTimeout(() => {
      handleClickScroll(e, element);
    }, 200);
  };
  return (
    <div className={classNames(cls.MobileMenu, { [cls.open]: burger.isOpen }, [ className ])}>
      <div className={cls.menuList}>
        {menuOpt.map((item, idx) => <span className={cls.linkItem} onClick={e => scrollTo(e, item.href)} key={idx}>{item.label}</span>)}
      </div>
    </div>
  );
};