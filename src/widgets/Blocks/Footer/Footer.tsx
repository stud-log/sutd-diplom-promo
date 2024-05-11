import ArrowIcon from '@/shared/assets/img/arrow-r.svg';
import { FC } from 'react';
import FooterImage from '@/shared/assets/img/Group 41294.png';
import Image from 'next/image';
import TGIcon from '@/shared/assets/img/socials2.svg';
import VKIcon from '@/shared/assets/img/socials.svg';
import { classNames } from '@/shared/lib/helpers/classNames/classNames';
import cls from './Footer.module.scss';

interface FooterProps {
  className?: string;
}

export const Footer: FC<FooterProps> = ({ className }) => {

  return (
    <div className={classNames(cls.Footer, {}, [ className ])}>
      <div className={cls.header}>
        БУДУЩЕЕ СТУДЕНЧЕСКОГО <br />
        СООБЩЕСТВА С STUDLOG
      </div>

      <div className={cls.btn}>
        <a href="https://studlog.ru/reg" target='_blank'>Вступить <ArrowIcon /></a>
      </div>

      <div className={cls.socials}>
        <div className={cls.title}>Социальные сети</div>
        <div className={cls.links}>
          <a className={cls.link} href='https://vk.com/studlog' target='_blank'><VKIcon /></a>
          <a className={cls.link} href='https://t.me/studlogblog' target='_blank'><TGIcon /></a>
        </div>
        <div className={cls.image}><Image src={FooterImage} height={480} width={717} alt='img'/></div>
      </div>
    </div>
  );
};