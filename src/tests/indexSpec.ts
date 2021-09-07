import formatter from '../utils/formatter';
import app from '..';
import supertest from 'supertest';

const request = supertest(app);

describe('test of image formatter', () => {
  it('will return the thumb image', async () => {
    await expectAsync(formatter('china', 200, 200)).toBeResolved();
  });
});

describe('Test for API endpoint', () => {
  it('retrieves the main endpoint', async () => {
    const res = await request.get('/');
    expect(res.status).toBe(200);
  });
});

describe('Test for image endpoint', () => {
  it('retrieves the resized image endpoint', async () => {
    const res = await request.get('/api/image?file=china&width=200&height=200');
    expect(res.status).toBe(200);
    return;
  });
});

describe('Tests an invalid endpoint', () => {
  it('sends an error message to the broswer', async () => {
    const res = await request.get('/api/image');
    expect(res.status).toBe(400);
  });
});
