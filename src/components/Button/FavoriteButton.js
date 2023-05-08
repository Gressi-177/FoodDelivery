import Ionicons from 'react-native-vector-icons/Ionicons';
import { TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { addItemOnFavorite, removeItemOnFavorite } from '../../utils/favorite';

function FavoriteButton({ restaurant, like = false }) {
  const [isLike, setIsLike] = useState(like);
  return (
    <TouchableOpacity
      onPress={() => {
        if (!isLike)
          addItemOnFavorite({
            id: restaurant.id,
            name: restaurant.name,
            imageUrl: restaurant.imageUrl,
          }).then(() => setIsLike(true));
        else removeItemOnFavorite(restaurant.id).then(() => setIsLike(false));
      }}
    >
      <Ionicons name={isLike ? 'heart' : 'heart-outline'} size={24} />
    </TouchableOpacity>
  );
}
export default FavoriteButton;
