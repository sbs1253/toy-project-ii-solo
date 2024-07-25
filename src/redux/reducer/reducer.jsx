const initialState = {
  profileData: {
    name: '송병훈',
    imageSrc:
      'https://blush.design/api/download?shareUri=W38PZslKVyKgqgVR&c=New%2520Palette%25201_0%7Effffff&bg=fcfcfc&w=800&h=800&fm=png',
    items: [
      { label: '직급', value: '팀원' },
      { label: '부서', value: 'Frontend' },
      { label: '입사일', value: '24.01.01' },
      { label: '이메일', value: 'hello@gmail.com' },
    ],
  },
  payrollData: {
    title: '6월 급여 명세서',
    manager: '담당자: 송병훈',
    items: [
      { label: '급여일', value: '24.07.01' },
      { label: '지급 총액', value: '5,000,000' },
      { label: '실지급액', value: '4,000,000' },
    ],
  },
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_PROFILE_DATA':
      return {
        ...state,
        profileData: action.payload,
      };
    case 'SET_PAYROLL_DATA':
      return {
        ...state,
        payrollData: action.payload,
      };
    default:
      return state;
  }
};

export default profileReducer;
