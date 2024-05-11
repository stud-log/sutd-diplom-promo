import BtnRowIcon from '@/shared/assets/img/button.svg';
import { FC } from 'react';
import FirstRowIcon from '@/shared/assets/img/new.svg';
import OktElementIcon from '@/shared/assets/img/oct.svg';
import OktRedElementIcon from '@/shared/assets/img/Polygon 3.svg';
import SecondRowIcon from '@/shared/assets/img/second.svg';
import StarElementIcon from '@/shared/assets/img/Star 2.svg';
import StarOrangeElementIcon from '@/shared/assets/img/Star 1.svg';
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
      </div>
      <div className={classNames(cls.secondBlock, {}, [ cls.block ])}>
        <div className={cls.image}><SecondRowIcon/></div>
        <div className={cls.text}>СТУДЕНЧЕСКОЕ</div>
      </div>
      <div className={classNames(cls.thirdBlock, {}, [ cls.block ])}>
        <div className={cls.text}>СООБЩЕСТВО</div>
        <div className={cls.image}><BtnRowIcon style={{ cursor: 'pointer' }} /></div>
      </div>
    </div>
  );
};