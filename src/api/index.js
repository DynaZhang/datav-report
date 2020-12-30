import request from '@/utils/request'

const code = '13926EAFCAA16CC3'

export function wordCloud() {
  return request({
    url: '/screen/wordcloud',
    method: 'get',
    params: { icode: code }
  })
}

export function mapScatter() {
  return request({
    url: '/screen/map/scatter',
    method: 'get',
    params: { icode: code }
  })
}

export function screenData() {
  return request({
    url: '/screen/data',
    method: 'get',
    params: { icode: code }
  })
}
