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

    async function getUserData(userId) {
        try {
            const userInfos = await FetchApi(`user/${userId}`)
            setUser(userInfos.data)
        } catch (error) {
            console.log(error)
        } finally {
            setLoading(false);
            console.log(userId)
        }
    }

useEffect(() => {
    getUserData(userId)
  }, [userId])
  return {loading, user};
}
