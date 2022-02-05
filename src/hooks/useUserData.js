import {useState, useEffect} from 'react'
import {FetchApi} from '../utils/fetchApi'
import {userMock, activityMock, averageMock, performanceMock} from '../mock/mockData'
/**
 * Hook for backEnd API get fetch
 * @param {string} userId
 * @param {string} REACT_APP_ENV
 * @returns {object} data
 * @returns {boolean} loading
 */
export const useUserData = userId => {
    const [loading, setLoading] = useState(true)
    const [user, setUser] = useState(null)
    const [error, setError] = useState(false);
    const [activity, setActivity] = useState(null)
    const [average, setAverage] = useState(null)
    const [performance, setPerformance] = useState(null)

    async function getUserData(userId) {
        let userInfos, userActivity, userAverage, userPerformance
        try {
            if(process.env.REACT_APP_ENV === 'prod') {
                userInfos = await FetchApi(`user/${userId}`)
                userActivity = await FetchApi(`user/${userId}/activity`)
                userAverage = await FetchApi(`user/${userId}/average-sessions`)
                userPerformance = await FetchApi(`user/${userId}/performance`)
            } else {
                userInfos = userMock
                userActivity = activityMock
                userAverage = averageMock
                userPerformance = performanceMock
            }  
            setUser(userInfos.data)
            setActivity(userActivity.data.sessions)
            setAverage(userAverage.data.sessions)
            setPerformance(userPerformance.data.data)
        } catch (error) {
            setError(true);
            console.log(error)
        } finally {
            setLoading(false)
        }
    }
useEffect(() => {
    getUserData(userId)
  }, [userId])
  return {loading, user, activity, average, performance};
}
