export const cookieParser = (cookieString: string) => {
  const refreshToken = cookieString.split('refreshToken=')[1];
  if (refreshToken) {
    return refreshToken.split(';')[0];
  }
};
