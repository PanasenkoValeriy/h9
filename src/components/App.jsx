import { StickerList } from './StickerList/StickerList';
import stickers from '../../src/stickers.json';
import { AppBar } from './AppBar/AppBar';

export const App = () => {
  return (
    <>
      <AppBar />
      <StickerList stickers={stickers} />;
    </>
  );
};
