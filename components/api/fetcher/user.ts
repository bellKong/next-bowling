import axios from 'axios';

export const IsUser = async () => {
  const res = await axios.get('/use');
  return res.data;
};
