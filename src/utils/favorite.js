import AsyncStorage from '@react-native-async-storage/async-storage';
import auth from '@react-native-firebase/auth';

const getCurrentUserUid = () => {
  const { currentUser } = auth();
  if (currentUser) {
    return currentUser.uid;
  }
  return null;
};

const addItemOnFavorite = async (item = []) => {
  const key = `favorite${getCurrentUserUid()}`;
  try {
    const listFavorite = await AsyncStorage.getItem(key);
    let newListFavorite = [];
    if (listFavorite !== null) {
      newListFavorite = JSON.parse(listFavorite);
    }
    const existingItem = newListFavorite.find((i) => i.id === item.id);
    if (!existingItem) newListFavorite.push(item);
    await AsyncStorage.setItem(key, JSON.stringify(newListFavorite));
  } catch (error) {
    console.error(error);
  }
  console.log(JSON.parse(await AsyncStorage.getItem(key)));
};

const removeItemOnFavorite = async (resId) => {
  try {
    const key = `favorite${getCurrentUserUid()}`;
    const listFavorite = await AsyncStorage.getItem(key);

    if (listFavorite) {
      const listData = JSON.parse(listFavorite);
      const index = listData.findIndex((i) => i.id === resId);
      if (index !== -1) listData.splice(index, 1);
      await AsyncStorage.setItem(key, JSON.stringify(listData));
    }
    console.log(JSON.parse(await AsyncStorage.getItem(key)));
  } catch (e) {
    console.log(e);
  }
};

export { addItemOnFavorite, removeItemOnFavorite };
