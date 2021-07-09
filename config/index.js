const Config = {
  baseURL: process.env.NODE_ENV === 'production' ? 'http://www.alone.chat' : 'http://127.0.0.1:8808/api/v1',
  staticPath: 'www.alone.chat'
}

export default Config
