var fs = require('fs')

const generate = () => {
  const base = './studies'
  const studiesDir = './public/studies'
  if (!fs.existsSync(studiesDir)) { fs.mkdirSync(studiesDir, { recursive: true }) }
  fs.readdir(base, (e, files) => {
    files.forEach(f => {
      const path = base + '/' + f
      if (fs.lstatSync(path).isDirectory()) {
        makeStudyOutputDirectory(studiesDir, f)
        fs.readdir(path, (e, files2) => {
          files2.forEach(f2 => {
            if (f2.endsWith('js')) {
              const studyPath = path.replace('./', '../') + '/' + f2
              const study = require(studyPath)
              if (f2.startsWith('meta')) {
                study.studyCount = files2.filter(j => j.startsWith('STUDY')).length
              }
              loadStudyText(study)
              saveCompiledStudy(studiesDir, study, f, f2)
            }
          })
        })
      }
    })
  })
}

generate()

const makeStudyOutputDirectory = (studiesDir, f) => {
  if (!fs.existsSync(`${studiesDir}/${f}`)) { fs.mkdirSync(`${studiesDir}/${f}`) }
}

const loadStudyText = study => {
  if (study.text && study.text.endsWith('.txt')) {
    study.text = fs.readFileSync(study.text, 'utf8')
  }
}

const saveCompiledStudy = (studiesDir, study, f, f2) => {
  const outputFile = `${studiesDir}/${f}/${f2}on`
  fs.writeFile(outputFile, JSON.stringify(study, null, 2), err => {
    if (err) { return console.error(err) }
    console.log('Wrote: ', outputFile)
  })
}
