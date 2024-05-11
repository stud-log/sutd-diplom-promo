import ArrowIcon from '@/shared/assets/img/arrow-r.svg';
import BtnRowIcon from '@/shared/assets/img/button.svg';
import { FC } from 'react';
import FirstRowIcon from '@/shared/assets/img/new.svg';
import FirstRowIconMobile from '@/shared/assets/img/Group 41297.svg';
import OktElementIcon from '@/shared/assets/img/oct.svg';
import OktRedElementIcon from '@/shared/assets/img/Polygon 3.svg';
import SecondRowIcon from '@/shared/assets/img/second.svg';
import SecondRowIconMobile from '@/shared/assets/img/Star 55.svg';
import StarElementIcon from '@/shared/assets/img/Star 2.svg';
import StarOrangeElementIcon from '@/shared/assets/img/Star 1.svg';
import ThirdRowIconMobile from '@/shared/assets/img/Group 41298.svg';
import { classNames } from '@/shared/lib/helpers/classNames/classNames';
import cls from './HeaderBlock.module.scss';

interface HeaderBlockProps {
  className?: string;
}

export const HeaderBlock: FC<HeaderBlockProps> = ({ className }) => {

  return (
    <div className={classNames(cls.HeaderBlock, {}, [ className ])}>
      <div className={cls.oct1}><OktElementIcon /></div>
      <div className={cls.oct2}><StarElementIcon /></div>
      <div className={cls.oct3}><OktRedElementIcon /></div>
      <div className={cls.oct4}><StarOrangeElementIcon /></div>
      
      <div className={classNames(cls.firstBlock, {}, [ cls.block ])}>
        <div className={cls.text}>НОВОЕ</div>
        <div className={cls.image}><FirstRowIcon/></div>
        <div className={cls.imageMobile}><FirstRowIconMobile/></div>
      </div>
      <div className={classNames(cls.secondBlock, {}, [ cls.block ])}>
        <div className={cls.image}><SecondRowIcon/></div>
        <div className={cls.imageMobile}><SecondRowIconMobile/></div>
        <div className={cls.text}>СТУДЕНЧЕСКОЕ</div>
      </div>
      <div className={classNames(cls.thirdBlock, {}, [ cls.block ])}>
        <div className={cls.text}>СООБЩЕСТВО</div>
        <div className={cls.imageMobile}><ThirdRowIconMobile/></div>
        <div className={cls.image}>
          <div className={cls.btn}>
            <a href="https://studlog.ru/reg" target='_blank'>Вступить <ArrowIcon /></a>
          </div>
        </div>
      </div>
      <div className={classNames(cls.mobileBtn, {}, [ cls.btn ])}>
        <a href="https://studlog.ru/reg" target='_blank'>Вступить <ArrowIcon /></a>
      </div>
    </div>
  );
};