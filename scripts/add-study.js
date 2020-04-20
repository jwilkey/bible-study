const fs = require('fs')

const nextStudyNumber = (studyDir) => {
  const files = fs.readdirSync(studyDir)
  const numbers = files
    .filter(f => f.startsWith('STUDY_'))
    .map(f => parseInt(f.match(/STUDY_(\d?).js/)[1]))
  return Math.max(...numbers) + 1
}

const replaceInFile = (filePath, find, replace) => {
  const file = fs.readFileSync(filePath, 'utf8')
  const result = file.replace(find, replace)
  fs.writeFileSync(filePath, result, 'utf8')
}

const main = () => {
  const studyName = process.argv[2]
  if (!studyName) throw new Error('Study name required')
  const studyDir = `./studies/${studyName}`
  const nextStudy = nextStudyNumber(studyDir)
  const newStudyPath = `${studyDir}/STUDY_${nextStudy}.js`
  fs.copyFileSync('./template/STUDY_1.js', newStudyPath)
  fs.copyFileSync('./template/texts/STUDY_1.txt', `${studyDir}/texts/STUDY_${nextStudy}.txt`)
  replaceInFile(newStudyPath, /BOOK/g, studyName)
  replaceInFile(newStudyPath, /STUDY_1/g, `STUDY_${nextStudy}`)
}

main()
