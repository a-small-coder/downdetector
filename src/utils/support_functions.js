// user token

export function getStorageUserToken() {
  let user = JSON.parse(localStorage.getItem('user'))

  if (user && user.token) {
    return user.token
  } else {
    return null
  }
}

export function setStorageUser(token) {
  let user = {
    token: token,
  }
  localStorage.setItem('user', JSON.stringify(user))
}

export function removeStorageUser() {
  localStorage.removeItem('user')
}

// избранные компании

export function getStorageFavorities() {
  let favoriteServices = JSON.parse(localStorage.getItem('favoriteServices'))

  return favoriteServices
}

export function setStorageFavorities(services) {
  localStorage.setItem('favoriteServices', JSON.stringify(services))
}

export function removeStorageFavorities() {
  localStorage.removeItem('favoriteServices')
}

/**
 * Randomize function
 * @param min minimal value
 * @param max max value
 * @returns Random value from min to max (included)
 */
export function random(min, max) {
  const minRounded = Math.ceil(min)
  const maxRounded = Math.floor(max)
  return Math.floor(Math.random() * (maxRounded - minRounded + 1)) + minRounded
}
