'use client';

import { useAppDispatch, useAppSelector } from '@/app/providers/ReduxProvider';

import { FC } from 'react';
import LogoBlack from '@/shared/assets/img/logoblack.svg';
import { burgerMenuActions } from '@/app/providers/ReduxProvider/slices/burgerMenu';
import { classNames } from '@/shared/lib/helpers/classNames/classNames';
import cls from './HeaderMenu.module.scss';
import { handleClickScroll } from '@/shared/lib/helpers/handleClickScroll';

interface HeaderMenuProps {
  className?: string;
}

export const menuOpt = [
  { label: 'Презентация', href: 'presentation' },
  { label: 'О Studlog', href: 'about' },
  { label: 'Наши цели', href: 'purposes' },
];

export const HeaderMenu: FC<HeaderMenuProps> = ({ className }) => {
  const burger = useAppSelector(state => state.burgerMenu);
  const dispatch = useAppDispatch();
  return (
    <div className={classNames(cls.HeaderMenu, {}, [ className ])}>
      <div className={cls.mobileBlock}>
        <div className={cls.logo}><LogoBlack /> </div>
        <button className={classNames(cls.burger, { [cls.open]: burger.isOpen }, [ className ])} onClick={() => dispatch(burgerMenuActions.toggleModal(!burger.isOpen))}>
          <span className={cls.line}></span>
          <span className={cls.line}></span>
          <span className={cls.line}></span>
        </button>
      </div>
      <div className={cls.desktopMenu}>
        {menuOpt.map((item, idx) => <span className={cls.linkItem} onClick={e => handleClickScroll(e, item.href)} key={idx}>{item.label}</span>)}
      </div>
    </div>
  );
};