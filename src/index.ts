import app from './user/user.app';

const PORT = process.env['PORT'] ?? 3000;

app.listen(PORT, () => {
  console.log(`Listening on ${PORT}`);
});
// https://www.youtube.com/watch?v=497L4-LhvdM minute: 1:01:32
