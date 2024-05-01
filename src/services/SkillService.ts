// DataService.ts
class DataService {
    async fetchData() {
      try {
        const response = await fetch('src/config/dataConfig/Skill.json'); // Assumes that data.json is in the public folder
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        return data;
      } catch (error) {
        console.error('Error fetching data:', error);
        return [];
      }
    }
  }
  
  export default DataService;
  