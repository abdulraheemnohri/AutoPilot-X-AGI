// Real SQLite is often done via react-native-sqlite-storage
// For this environment, we'll use a reliable AsyncStorage-backed mock
import AsyncStorage from '@react-native-async-storage/async-storage';

class Database {
  async query(table) {
    const data = await AsyncStorage.getItem(`@db_${table}`);
    return data ? JSON.parse(data) : [];
  }

  async execute(table, data) {
    const current = await this.query(table);
    current.push(data);
    await AsyncStorage.setItem(`@db_${table}`, JSON.stringify(current));
  }

  async save(table, data) {
    await AsyncStorage.setItem(`@db_${table}`, JSON.stringify(data));
  }
}

export default new Database();
