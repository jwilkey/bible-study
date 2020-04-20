const fs = require('fs')

const main = () => {
  const studyName = process.argv[2]
  if (!studyName) throw new Error('Study name required')
  const studyDir = `./studies/${studyName}`
  if (!fs.existsSync(studyDir)) { fs.mkdirSync(studyDir, { recursive: true }) }
  fs.copyFileSync('./template/meta.js', `${studyDir}/meta.js`)
  fs.copyFileSync('./template/STUDY_1.js', `${studyDir}/STUDY_1.js`)
  fs.mkdirSync(`${studyDir}/texts`, { recursive: true })
  fs.copyFileSync('./template/texts/STUDY_1.txt', `${studyDir}/texts/STUDY_1.txt`)
}

main()