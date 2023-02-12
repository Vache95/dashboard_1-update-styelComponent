import { gql } from '@apollo/client';

export const TODO = gql`
  query ALLTODO {
    allPosts {
      id
      title
    }
  }
`;

export const ADD_TODO = gql`
  mutation AddTodo($title: String!, $userId: ID!, $views: Int!) {
    newtodo: createPost(title: $title, user_id: $userId, views: $views) {
      id
      title
      views
    }
  }
`;
