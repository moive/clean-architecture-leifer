import 'dotenv/config';

import { connect } from 'mongoose';

const DB_URI = `${process.env['DB_URI']}`;

const dbInit = async () => {
  const res = await connect(DB_URI);
  return res;
};

export default dbInit;
