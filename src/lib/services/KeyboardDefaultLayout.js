export const getDefaultLayout = () => {
  return {
    default: [
      "` 1 2 3 4 5 6 7 8 9 0 - = {bksp}",
      "{tab} ㅂ ㅈ ㄷ ㄱ ㅅ ㅛ ㅕ ㅑ ㅐ ㅔ [ ] \\",
      "{language} ㅁ ㄴ ㅇ ㄹ ㅎ ㅗ ㅓ ㅏ ㅣ ; ' {enter}",
      "{shift} ㅋ ㅌ ㅊ ㅍ ㅠ ㅜ ㅡ , . / {shift}",
      ".com @ {space}"
    ],
    shift: [
      "~ ! @ # $ % ^ & * ( ) _ + {bksp}",
      "{tab} ㅃ ㅉ ㄸ ㄲ ㅆ ㅛ ㅕ ㅑ ㅒ ㅖ { } |",
      '{language} ㅁ ㄴ ㅇ ㄹ ㅎ ㅗ ㅓ ㅏ ㅣ : " {enter}',
      "{shift} ㅋ ㅌ ㅊ ㅍ ㅠ ㅜ ㅡ < > ? {shift}",
      ".com @ {space}"
    ]
  };
};
