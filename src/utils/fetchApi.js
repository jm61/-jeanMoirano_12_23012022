const baseUrl = 'http://localhost:3000'

/**
 * Service to fetch data on local backend API
 * @param {string} path
 * @returns {object} response
 */

export const FetchApi = async path => {
  const response = await fetch(`${baseUrl}/${path}`)
  return response.json()
}