import { rest } from 'msw';

let userInfo = [
  {
    id: 1,
    name: '임종빈',
  },
  {
    id: 2,
    name: '윔종뷘',
  },
  {
    id: 3,
    name: '웜줭붠',
  },
  {
    id: 4,
    name: '중궈',
  },
];

export const handlers = [
  rest.get('/use', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(userInfo));
  }),
];
