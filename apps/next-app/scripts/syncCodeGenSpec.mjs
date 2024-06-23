import fs from 'fs'

const SPEC_URL = 'https://api.feedoong.io/v3/api-docs' // OpenAPI 스펙이 있는 URL
const SPEC_WRITE_PATH = 'src/services/spec.json' // 스펙을 저장할 파일 경로

console.log('API 스펙을 가져오는 중...')

await fetch(SPEC_URL)
  .then((response) => response.json())
  .then((data) => {
    const jsonContent = JSON.stringify(data, null, 2) // 보기 좋게 포맷팅
    fs.writeFile(SPEC_WRITE_PATH, jsonContent, 'utf8', (err) => {
      if (err) {
        console.log('파일 저장 중 에러 발생:', err)
      } else {
        console.log('spec.json 파일이 성공적으로 저장되었습니다.')
      }
    })
  })
  .catch((error) => {
    console.log('API 요청 중 에러 발생:', error)
  })
