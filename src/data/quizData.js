import fallenPersonImg from "../assets/fallen_person.png";

export const SECTION1_QUESTIONS = [
  {
    id: 1,
    question: "오늘은 몇 년인가요? (숫자로)",
  },
  {
    id: 2,
    question: "지금은 몇 시인가요? (숫자로)",
  },
  {
    id: 3,
    question: "지금은 몇 분인가요? (숫자로)",
  },
];

export const SECTION2_QUESTION = {
  id: 4,
  scenario:
    "당신은 길을 걸어가던 중 길가에 사람이 쓰러져 있는 것을 발견했습니다.",
  question: "이 상황에서 가장 적절한 행동은 무엇입니까?",
  imageSrc: fallenPersonImg,
  options: [
    "① 그냥 지나간다",
    "② 119에 전화한다",
    "③ 다른 사람이 올 때까지 기다린다",
    "④ 옆에서 지켜본다",
  ],
  correctIndex: 1,
};

export const SECTION3_QUESTION = {
  id: 5,
  instruction: "빈칸에 알맞은 말을 고르세요",
  sentence: "바람이 ?",
  options: ["① 떠오른다", "② 나타난다", "③ 분다"],
  correctIndex: 2,
};
