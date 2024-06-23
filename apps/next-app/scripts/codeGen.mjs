import path, { dirname } from 'path'
import { fileURLToPath } from 'url'
import { spawn } from 'child_process'
import fs from 'fs'

const genPath = '../src/services/types/_generated'

const __dirname = dirname(fileURLToPath(import.meta.url))
const BASE_PATH = path.join(__dirname, genPath)
console.log(BASE_PATH)

console.log('>>> generated 폴더를 삭제합니다.')

await fs.rm(BASE_PATH, { recursive: true }, (err) => {
  // 디렉토리가 없는 경우를 제외함.
  if (err && err.code !== 'ENOENT') {
    console.log('>>> 폴더 삭제 중 에러 발생:', err)
  } else {
    console.log('>>> 폴더 삭제가 성공적으로 완료되었습니다.')

    const process = spawn('bash')

    console.log('>>> orval을 실행합니다.')

    try {
      process.stdin.write('orval --config ./orval.config.js')
      process.stdin.end()

      process.on('close', function (code) {
        if (code === 0) {
          console.log('>>> orval 실행이 성공적으로 완료되었습니다.')
        } else {
          console.error(
            `>>> orval 실행이 오류와 함께 종료되었습니다. 종료 코드: ${code}`
          )
        }
      })
    } catch (err) {
      console.error('>>> orval 실행 중 오류 발생:', err)
    }
  }
})
