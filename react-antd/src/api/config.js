const devBaseUrl = 'https://www.baidu.com'
const proBaseUrl = 'https://www.rabbit.com'

export const BASE_URL = process.env.NODE_ENV === 'development' ? devBaseUrl: proBaseUrl

export const TIMEOUT = 5000;