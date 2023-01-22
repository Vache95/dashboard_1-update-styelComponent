import { FC, memo, useRef } from 'react';

const RenderComponents: FC<{ plays: () => void; obj: any }> = ({ plays, obj }) => {
  const renderRef = useRef(0);
  renderRef.current++;

  return <p>{`render ${renderRef.current}`}</p>;
};

export default memo(RenderComponents);
