const connection = require('../db/conn')
const request = require('supertest')
const app = require('../app')
const WebSite = require('../models/WebSite')

let id = ''

beforeAll(async () => {
  connection(process.env.MONGODB_URI_TEST)
  await WebSite.deleteMany()
})

describe('WebSite', () => {
  it('should create website in database', async () => {
    const response = await request(app)
      .post('/salve_info')
      .send({
        url: 'https://www.similarweb.com/pt/website/facebook.com/#overview',
      })
      .expect(201)

    id = response.body.id
  }, 10000)

  it('should get website from database', async () => {
    const response = await request(app)
      .get(`/get_info/${id}`)
      .send()
      .expect(200)
  })
})
