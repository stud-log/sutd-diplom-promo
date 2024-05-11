'use client';

import { FC } from 'react';
import { classNames } from '@/shared/lib/helpers/classNames/classNames';
import cls from './HeaderMenu.module.scss';
import { handleClickScroll } from '@/shared/lib/helpers/handleClickScroll';

interface HeaderMenuProps {
  className?: string;
}

const menuOpt = [
  { label: 'Презентация', href: 'presentation' },
  { label: 'О Studlog', href: 'about' },
  { label: 'Наши цели', href: 'purposes' },
];

export const HeaderMenu: FC<HeaderMenuProps> = ({ className }) => {

  return (
    <div className={classNames(cls.HeaderMenu, {}, [ className ])}>
      <div className={cls.desktopMenu}>
        {menuOpt.map((item, idx) => <span className={cls.linkItem} onClick={e => handleClickScroll(e, item.href)} key={idx}>{item.label}</span>)}
      </div>
      <div className={cls.mobileMenu}>
        {menuOpt.map((item, idx) => <span className={cls.linkItem} onClick={e => handleClickScroll(e, item.href)} key={idx}>{item.label}</span>)}
      </div>
    </div>
  );
};