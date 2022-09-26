import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App';

import { createServer, Model } from 'miragejs';

createServer({
  models: {
    transaction: Model,
  },

  seeds(server) {
    server.db.loadData({
      transactions: [
        {
          id: 1,
          title: 'Freelance',
          type: 'income',
          category: 'Development',
          amount: 6000,
          createAt: new Date('2022-09-25 9:00:00'),
        },
        {
          id: 2,
          title: 'Rent',
          type: 'outcome',
          category: 'House',
          amount: 1000,
          createAt: new Date('2022-09-14 8:00:00'),
        }
      ]
    })
  },

  routes() {
    this.namespace = 'api';

    this.get('/transactions', () => {
      return this.schema.all('transaction');
    })


    this.post('/transactions', (schema, request) => {
      const data = JSON.parse(request.requestBody);

      return schema.create('transaction', data);
    });
  }
});

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
