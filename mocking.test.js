const fetchData = require('./fetchData');
const fetch = require('node-fetch');
jest.mock('node-fetch');

fetch.mockImplementation(async () => ({json:()=> ({id:1 }) }));

test('without mock', async ()=> {
    const  todo = await fetchData(1);
    expect(todo.id).toBe(1);
})