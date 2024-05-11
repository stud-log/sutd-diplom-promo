import { FC } from 'react';
import Video from 'next-video';
import { classNames } from '@/shared/lib/helpers/classNames/classNames';
import cls from './VideoPlayer.module.scss';
import promo from 'https://api.studlog.ru/static/studlog_promo.mp4';

interface VideoPlayerProps {
  className?: string;
}

export const VideoPlayer: FC<VideoPlayerProps> = ({ className }) => {

  return (
    <div className={classNames(cls.VideoPlayer, {}, [ className ])} id='presentation'>
      <Video src={promo} className={cls.player} loop>
        <div slot='poster' className={cls.placeholder}>Презентация Studlog</div>
      </Video>
    </div>
  );
};