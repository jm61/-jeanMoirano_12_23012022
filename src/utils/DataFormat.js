/**
 * Format date on X axis from yyyy-mm-dd to dd/mm
 * used in DailyActivity component
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

/**
 * Format day on X axis from number to letter
 * used in SessionAverage component
 * @param {number} day
 * @returns {string}
 */
export const sessionAverageDate = day => {
  const dayAsLetter = ['L','M','M','J','V','S','D']
  if(day) return dayAsLetter[day-1]
}

/**
 * Translate performance data number as a string category
 * used in RadarChart component
 * @param {number} cat
 * @returns {string}
 */
export const performanceCategory = cat => {
  const catAsString = ['Cardio','Energie','Endurance','Force','Vitesse','Intensité']
  if(cat) return catAsString[cat-1]
}

/**
 * Categories list reversed by sort() method
 * used in RadarChart component
 * @param {object} performance
 * @returns {object}
 */
 export const reverseCategoriesOrder = performance => {
  return [...performance].sort((a, b) => b.kind - a.kind);
};

