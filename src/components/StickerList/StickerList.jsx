import { Sticker } from 'components/Sticker/Sticker';
import css from './StickerList.module.css';

export const StickerList = ({ stickers }) => {
  return (
    <ul className={css.stickerList}>
      {stickers.map(({ img, label }, index) => {
        return <Sticker img={img} label={label} key={index} />;
      })}
    </ul>
  );
};
