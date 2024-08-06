const regex = {
  emailRegex: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/,
  nicknameRegex: /^.{0,10}$/,
  carNumberRegex:
    /^([서울부산경기강원충전북남제주]{2})?\w?\d{2,3}[가나다라마거너더러머버서어저고노도로모보소오조구누두루무부수우주바사아자배허하호국합육해공]\d{4}$/,
  cardValidThruRegex: /^((0[1-9])|(1[0-2]))(\d{2})$/,
  cardPasswordRegex: /^(\d{2})$/,
  cardCvcRegex: /^(\d{3})$/,
  cardNumberRegex: /^(\d{16})/,
  phoneNumberRegex: /^01([016789])-?([0-9]{3,4})-?([0-9]{4})$/,
  personalNumberRegex: /\d{2}([0]\d|[1][0-2])([0][1-9]|[1-2]\d|[3][0-1])[-]*[1-8]/,
  userNameRegex: /^[가-힣a-zA-Z\s]+$/,
  passwordRegex: /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,20}$/,
} as const;

export type ValidationType = keyof typeof regex;

export const textValidator = (validationType: ValidationType, text: string) => {
  return regex[validationType].test(text);
};
