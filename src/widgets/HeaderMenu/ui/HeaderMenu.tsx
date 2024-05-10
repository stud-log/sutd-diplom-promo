'use client';

import { FC } from 'react';
import Link from 'next/link';
import { classNames } from '@/shared/lib/helpers/classNames/classNames';
import cls from './HeaderMenu.module.scss';

interface HeaderMenuProps {
  className?: string;
}

const menuOpt = [
  { label: 'Презентация', href: '#presentation' },
  { label: 'О Studlog', href: '#about' },
  { label: 'Наши цели', href: '#purposes' },
];

export const HeaderMenu: FC<HeaderMenuProps> = ({ className }) => {

  return (
    <div className={classNames(cls.HeaderMenu, {}, [ className ])}>
      <div className={cls.desktopMenu}>
        {menuOpt.map((item, idx) => <Link className={cls.linkItem} href={item.href} key={idx}>{item.label}</Link>)}
      </div>
      <div className={cls.mobileMenu}>
        {menuOpt.map((item, idx) => <Link className={cls.linkItem} href={item.href} key={idx}>{item.label}</Link>)}
      </div>
    </div>
  );
};