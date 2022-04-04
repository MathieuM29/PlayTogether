/* eslint-disable no-case-declarations */
import axios from 'axios';
import {
  addFavoritesGamesSucces,
  ADD_FAVORITES_GAMES,
  gameAlreadyInFavoritesSucces,
} from '../actions';

const addGameToFavoritesMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case ADD_FAVORITES_GAMES:
      const user_id = store.getState().user_id;
      // const user_id = store.getState().user.favoritesGames[0].user_id;

      const currentGameId = parseInt(store.getState().currentGameId, 10);
      const { accessToken } = store.getState();
     
      
      console.log(user_id, currentGameId);
      axios({
        method: 'post',
        url: `https://playtogether-back.herokuapp.com/user/${user_id}/game/${currentGameId}/addgame`,
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
        data: {
          platform: 'psn',
          level: 'jedi',
          gameplay: 'chill',
        },
      })
        .then((res) => {
          // console.log(res.data);
          const actionAddFavoritesGames = addFavoritesGamesSucces(res.data.datas);
          store.dispatch(actionAddFavoritesGames);
          store.dispatch(gameAlreadyInFavoritesSucces());
        })
        .catch((err) => {
          console.log(err);
        });
      break;
    default:
      next(action);
  }
};

export default addGameToFavoritesMiddleware;
