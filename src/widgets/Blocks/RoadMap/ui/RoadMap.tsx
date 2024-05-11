import { FC } from 'react';
import LineIcon from '@/shared/assets/img/Group 41293.svg';
import Polygon2Icon from '@/shared/assets/img/Polygon 5.svg';
import PolygonIcon from '@/shared/assets/img/Polygon 6.svg';
import Star2Icon from '@/shared/assets/img/Star 4.svg';
import StarIcon from '@/shared/assets/img/Star 5.svg';
import { classNames } from '@/shared/lib/helpers/classNames/classNames';
import cls from './RoadMap.module.scss';

interface RoadMapProps {
  className?: string;
}

export const RoadMap: FC<RoadMapProps> = ({ className }) => {

  return (
    <div className={classNames(cls.RoadMap, {}, [ className ])}>
      <LineIcon className={cls.line} />
      <div className={cls.header}>НАШИ ЦЕЛИ</div>
      <div className={cls.cardsWrapper}>
        <div className={classNames(cls.justifyEnd, {}, [ cls.row ])}>
          <StarIcon className={cls.star} />
          
          <div className={cls.card}>
            <div>Коллаборация с СПБГУПТД <br /> и внедрение Studlog</div>
            <div className={cls.year}>2024</div>
          </div>
        </div>
        <div className={classNames(cls.justifyStart, {}, [ cls.row ])}>
          <PolygonIcon className={cls.poly} />

          <div className={cls.card}>
            <div>Добавление новых функций <br /> и возможностей</div>
            <div className={cls.year}>2024</div>
          </div>
        </div>
        <div className={classNames(cls.justifyEnd, {}, [ cls.row ])}>
          <Polygon2Icon className={cls.poly2} />
          <div className={cls.card}>
            <div>Создание цельной экосистемы,<br /> объединяющей студентов и учителей</div>
            <div className={cls.year}>2025</div>
          </div>
        </div>
        <div className={classNames(cls.justifyStart, {}, [ cls.row ])}>
          <Star2Icon className={cls.star2} />
          
          <div className={cls.card}>
            <div>Коллаборация с другими <br /> университетами </div>
            <div className={cls.year}>2025</div>
          </div>
        </div>
      </div>
    </div>
  );
};