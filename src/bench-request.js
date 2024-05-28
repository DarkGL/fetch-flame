import { request } from 'undici';

console.time('fetch');
for (let i = 0; i < 100000; i++) {
    const req = await request('http://localhost:3000');
    await req.body.text();
}
console.timeEnd('fetch');
