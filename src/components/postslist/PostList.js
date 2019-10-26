import React, { Component } from 'react';

import './Posts.css';
import PostItem from './PostItem';

class PostList extends Component {
  state = {
    posts: [
      {
        id: 1,
        author: {
          name: 'Ricardo Batista',
          avatar: 'https://i.pravatar.cc/150?img=60'
        },
        date: '08 de Abril de 2019',
        content: 'Um texto bem legalzinho',
        comments: [
          {
            id: 2,
            author: {
              name: 'Wj',
              avatar: 'https://i.pravatar.cc/150?img=44'
            },
            date: '04 Jun 2019',
            content:
              'Que massa vei',
          }
        ]
      },
      {
        id: 3,
        author: {
          name: 'Bruno Medeiros',
          avatar: 'https://i.pravatar.cc/150?img=54'
        },
        date: '21 de novembro de 2019',
        content:
          'SERIES?',
        comments: [
          {
            id: 4,
            author: {
              name: 'Cardin',
              avatar: 'https://i.pravatar.cc/150?img=12'
            },
            date: '21 de novembro de 2019',
            content:
              'Ganhei 7 KG',
          },
          {
            id: 5,
            author: {
              name: 'Was',
              avatar: 'https://i.pravatar.cc/150?img=3'
            },
            date: '21 de novembro de 2019',
            content:
              'Tenho 1.80 de tenis'
          }
        ]
      },
      {
        id: 6,
        author: {
          name: 'Rozendinho',
          avatar: 'https://i.pravatar.cc/150?img=70'
        },
        date: '21 de novembro de 2019',
        content:
          'Muitos textos bem legais',
        comments: [
          {
            id: 4,
            author: {
              name: 'Rhennan',
              avatar: 'https://i.pravatar.cc/150?img=50'
            },
            date: '21 DE novembro DE 2019',
            content:
             'Olá'
          },
          {
            id: 5,
            author: {
              name: 'Dilson',
              avatar: 'https://i.pravatar.cc/150?img=30'
            },
            date: '11 de Junho de 2019',
            content:
              'Direto'
          }
        ]
      }
    ]
  };

  render() {
    const { posts } = this.state;
    return (
      <div className="postlist">
        {posts.map(post => (
          <PostItem key={post.id} {...post} />
        ))}
      </div>
    );
  }
}

export default PostList;