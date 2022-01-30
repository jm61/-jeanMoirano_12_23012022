/**
 * Format date on X axis from yyyy-mm-dd to dd/mm
 * I find it more coherent than the original figma design
 * @param {string} date
 * @returns {string}
 */
export const dailyActDate = date => {
  const dateFormatChange = new Intl.DateTimeFormat('fr-FR', {
    day: 'numeric',
    month: 'numeric'
  }).format(new Date(date));
  return dateFormatChange;
};

