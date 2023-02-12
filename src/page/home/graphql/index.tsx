import { FC, useEffect } from 'react';
import { useQuery, gql, useMutation } from '@apollo/client';
import { ADD_TODO, TODO } from '../../../graphql/index';

const GraphQl: FC = () => {
  const { error, loading, data } = useQuery(TODO);
  const [addtodo, { error: er, loading: lod, data: dt }] = useMutation(ADD_TODO, {
    refetchQueries: [
      {
        query: TODO, //tarmacnum e lriv todonero mutationic heto sra myus tarberako aveli lavn a taramcnum e qesho ev avelacnum e miayn avelacac elemento update()
      },
    ],
  });
  const addfunc = () => {
    addtodo({
      variables: {
        title: 'king',
        userId: 123,
        views: 1111,
      },
    });
  };
  return (
    <div>
      {data?.allPosts?.map(({ title }: any, i: any) => (
        <p key={i}>{title}</p>
      ))}
      <button
        onClick={addfunc}
        style={{ width: '200px', height: '30px', color: '#fff', background: 'black' }}>
        add
      </button>
    </div>
  );
};

export default GraphQl;
