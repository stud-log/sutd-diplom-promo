import CompImage from '@/shared/assets/img/Group 41291.svg';
import { FC } from 'react';
import StudiImage from '@/shared/assets/img/Group 41290.svg';
import TargetImage from '@/shared/assets/img/target-04.svg';
import TimeImage from '@/shared/assets/img/Group 41167.svg';
import { classNames } from '@/shared/lib/helpers/classNames/classNames';
import cls from './AboutUs.module.scss';

interface AboutUsProps {
  className?: string;
}

const advs = [
  { img: TargetImage, title: 'Централизованный источник информации', text: 'Сайт-расписание собирает важные учебные материалы и события в одном месте, облегчая студентам организацию и информированность' },
  { img: TimeImage, title: 'Экономия времени', text: 'Структурированное представление информации на сайте-расписании помогает студентам избегать долгих поисков и сэкономить время' },
  { img: CompImage, title: 'Удобство и доступность', text: 'Доступ через веб-браузеры и мобильные устройства обеспечивает студентам возможность получения информации в любое время и в любом месте' },
];

export const AboutUs: FC<AboutUsProps> = ({ className }) => {

  return (
    <div className={classNames(cls.AboutUs, {}, [ className ])}>
      <div className={cls.about}>
        <div className={cls.leftCol}>
          <div className={cls.header}>О STUDLOG</div>
          <div className={cls.description}>
            <div className={cls.bold}>
              <span className='accent'>Studlog</span> — твой надежный путеводитель в мире учебы! Он объединяет
              важные источники информации в одном месте, делая твою учебу
              более информативной и организованной.
            </div>
            <div>
              С доступностью через <span className='accent'>веб-браузеры</span> и <span className='accent'>мобильные устройства</span>,
              Studlog всегда под рукой, когда тебе это нужно. Создай персональное
              учебное пространство, где ты можешь легко просматривать информацию,
              связанную с твоим учебным планом и группой. Экономь время и усилия,
              избегая долгих поисков необходимой информации. Присоединяйся
              к Studlog и улучши свой образовательный опыт уже сегодня!
            </div>
          </div>
          <div className={cls.btn}>
            <a href="https://studlog.ru/reg" target='_blank'>Зарегистрироваться</a>
          </div>
        </div>
        <div className={cls.rightCol}>
          <StudiImage />
        </div>
      </div>

      <div className={cls.advents}>
        <div className={cls.header}>ПРЕИМУЩЕСТВА</div>
        <div className={cls.wrapper}>
          {advs.map((item, idx) => {
            return (
              <div className={cls.adv} key={idx}>
                <div className={cls.image}><item.img /></div>
                <div className={cls.title}>{item.title}</div>
                <div className={cls.text}>{item.text}</div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};