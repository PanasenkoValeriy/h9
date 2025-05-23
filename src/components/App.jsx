import { StickerList } from './StickerList/StickerList';
import stickers from '../../src/stickers.json';

export const App = () => {
  return <StickerList stickers={stickers} />;
};
