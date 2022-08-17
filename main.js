

const daily = document.querySelector('#daily')
const weekly = document.querySelector('#weekly')
const monthly = document.querySelector('#monthly')
const workData = document.querySelector('#dataTextWork')
const workDataPrevious = document.querySelector('#lastWeekData-work')
const playData = document.querySelector('#dataTextPlay')
const playDataPrevious = document.querySelector('#lastWeekData-play')
const studyData = document.querySelector('#dataTextStudy')
const studyDataPrevious = document.querySelector('#lastWeekData-study')
const exerciseData = document.querySelector('#dataTextExercise')
const exerciseDataPrevious = document.querySelector('#lastWeekData-exercise')
const socialData = document.querySelector('#dataTextSocial')
const socialDataPrevious = document.querySelector('#lastWeekData-social')
const selfCareData = document.querySelector('#dataTextSelfCare')
const selfCareDataPrevious = document.querySelector('#lastWeekData-SelfCare')
const box = document.querySelector('.element')





daily.addEventListener('click', function() {
  workData.innerHTML = `5 Hrs`
  workDataPrevious.innerHTML = ` 7Hrs`
  playData.innerHTML = ' 1Hrs'
  playDataPrevious.innerHTML =' 2Hrs'
  studyData.innerHTML =' 0Hrs'
  studyDataPrevious.innerHTML =' 1Hrs'
  exerciseData.innerHTML =' 1Hrs'
  exerciseDataPrevious.innerHTML =' 1Hrs'
  socialData.innerHTML =' 1Hrs'
  socialDataPrevious.innerHTML =' 3Hrs'
  selfCareData.innerHTML = ' 0Hrs'
  selfCareDataPrevious.innerHTML =' 1Hrs'
})
weekly.addEventListener('click', function() {
  workData.innerHTML = `32 Hrs`
  workDataPrevious.innerHTML = ` 36Hrs`
  playData.innerHTML = ' 10Hrs'
  playDataPrevious.innerHTML = ' 8Hrs'
  studyData.innerHTML = ' 4Hrs'
  studyDataPrevious.innerHTML =' 7Hrs'
  exerciseData.innerHTML = ' 4Hrs'
  exerciseDataPrevious.innerHTML =' 5Hrs'
  socialData.innerHTML = ' 5Hrs'
  socialDataPrevious.innerHTML =' 10Hrs'
  selfCareData.innerHTML = ' 2Hrs'
  selfCareDataPrevious.innerHTML =' 2Hrs'
})

monthly.addEventListener('click', function() {
  workData.innerHTML = `103 Hrs`
  workDataPrevious.innerHTML = ` 128Hrs`
  playData.innerHTML = ' 23Hrs'
  playDataPrevious.innerHTML =' 29Hrs'
  studyData.innerHTML = ' 13Hrs'
  studyDataPrevious.innerHTML =' 19Hrs'
  exerciseData.innerHTML = ' 11Hrs'
  exerciseDataPrevious.innerHTML =' 18Hrs'
  socialData.innerHTML = ' 21Hrs'
  socialDataPrevious.innerHTML =' 23Hrs'
  selfCareData.innerHTML = ' 7Hrs'
  selfCareDataPrevious.innerHTML =' 11Hrs'
})


