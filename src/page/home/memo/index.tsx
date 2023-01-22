import { FC, useCallback, useMemo, useState } from 'react';
import RenderComponents from './components';

const Memo: FC = () => {
  const [value, setValue] = useState('');
  const [play, setPlay] = useState(false);

  const onPlay = useCallback(() => {
    setPlay(true);
  }, []);
  const obj = useMemo(() => {
    return {
      text: 'str',
    };
  }, []);
  return (
    <>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="test"
      />
      <RenderComponents plays={onPlay} obj={obj} />
    </>
  );
};

export default Memo;
