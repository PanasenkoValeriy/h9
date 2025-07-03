import { StickerList } from './StickerList/StickerList';
import stickers from '../../src/stickers.json';
import { AppBar } from './AppBar/AppBar';
import Counter from './Counter/Counter';

export const App = () => {
  return (
    <>
      <AppBar />
      <Counter />
      <StickerList stickers={stickers} />;
    </>
  );
};
