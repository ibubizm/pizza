import { server_url } from '../vars'

export const getAvatar = (imgName) => {
  if (imgName !== '') {
    return `${server_url}avatars/${imgName}`
  } else {
    return 'https://m.media-amazon.com/images/I/61hpdSzdo6L._UF894,1000_QL80_.jpg'
  }
}
