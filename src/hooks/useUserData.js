import {useState, useEffect} from 'react'
import {FetchApi} from '../utils/fetchApi'

/**
 * Hook to fetch data
 * @param {string} userId
 * @returns {object} data
 * @returns {boolean} loading
 */
export const useUserData = userId => {
    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState(null)
    const [error, setError] = useState(false);

    async function getUserData(userId) {
        try {
            const userInfos = await FetchApi(`user/${userId}`)
            console.log({userInfos})
            setUser(userInfos.data)
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
  return {loading, user};
}
