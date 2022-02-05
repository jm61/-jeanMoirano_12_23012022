import {userData} from '../mock/mockDatas'
export const useMockDatas = () => {
  const activity = userData.activities.map(activity => activity)
  const average = userData.averages.map(average => average)
  const performance = userData.performances.map(performance => performance)
  const score = userData.todayScore
  const keyData = userData.keyData

  return {activity, average, performance, score, keyData};
}