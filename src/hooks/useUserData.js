import {useState, useEffect} from 'react'
import {FetchApi} from '../utils/fetchApi'

/**
 * Hook for backEnd API get fetch
 * @param {string} userId
 * @returns {object} data
 * @returns {boolean} loading
 */
export const useUserData = userId => {
    const [loading, setLoading] = useState(true)
    const [user, setUser] = useState(null)
    const [error, setError] = useState(false);
    const [activity, setActivity] = useState(null)
    const [average, setAverage] = useState(null)

    async function getUserData(userId) {
        try {
            const userInfos = await FetchApi(`user/${userId}`)
            const userActivity = await FetchApi(`user/${userId}/activity`)
            const userAverage = await FetchApi(`user/${userId}/average-sessions`)
            setUser(userInfos.data)
            setActivity(userActivity.data.sessions)
            setAverage(userAverage.data.sessions)
        } catch (error) {
            setError(true);
            console.log(error)
        } finally {
            setLoading(false);
        }
    }

useEffect(() => {
    getUserData(userId)
  }, [userId])
  return {loading, user, activity, average};
}
