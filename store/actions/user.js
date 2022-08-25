
export const getusersRequest = () => ({
  url: '/users',
  transform: responseBody => {
    return responseBody
  },
  update: {
    users: (oldValue, newValue) => {
      // We fetched all the playlists, so can disregard previous value
      return newValue;
    }
    
  },
});

export const getUsers = state => state.entities.users;
