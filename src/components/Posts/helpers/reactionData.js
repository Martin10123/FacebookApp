import { care, like, haha, angry, love, sad, wow } from "../../../assets";

// Component: ReactionsPost
export const reactionsDataPost = [
  { name: "Me gusta", tofire: "like", img: like, classE: "profile__like" },
  { name: "Me encanta", tofire: "love", img: love, classE: "profile__love" },
  { name: "Me importa", tofire: "care", img: care, classE: "profile__care" },
  { name: "Me divierte", tofire: "funny", img: haha, classE: "profile__haha" },
  { name: "Me asombra", tofire: "amazes", img: wow, classE: "profile__wow" },
  { name: "Me entristece", tofire: "sad", img: sad, classE: "profile__sad" },
  { name: "Me enoja", tofire: "angry", img: angry, classE: "profile__angry" },
];

// Component: CountReactions
export const countReactionsSelected = ({ reactions }) => {
  const reactionsData1 = [
    {
      name: "Me gusta",
      img: like,
      tofire: "like",
      count: reactions?.like?.length,
    },
    {
      name: "Me encanta",
      img: love,
      tofire: "love",
      count: reactions?.love?.length,
    },
    {
      name: "Me importa",
      img: care,
      tofire: "care",
      count: reactions?.care?.length,
    },
    {
      name: "Me divierte",
      img: haha,
      tofire: "funny",
      count: reactions?.funny?.length,
    },
    {
      name: "Me asombra",
      img: wow,
      tofire: "amazes",
      count: reactions?.amazes?.length,
    },
    {
      name: "Me entristece",
      img: sad,
      tofire: "sad",
      count: reactions?.sad?.length,
    },
    {
      name: "Me enoja",
      img: angry,
      tofire: "angry",
      count: reactions?.angry?.length,
    },
  ];

  return reactionsData1
    .filter((reaction) => reaction.count > 0)
    .sort((a, b) => b.count - a.count)
    .slice(0, 3);
};

// Component: ButtonsReactions
export const getWhatReactionSelected = ({ reactions, infoUserActive }) => {
  const reactionsData2 = [
    {
      name: "Me gusta",
      img: like,
      textColor: "#0000ff",
      condition: reactions?.like?.includes(infoUserActive?.uid),
    },
    {
      name: "Me encanta",
      img: love,
      textColor: "#ff0000",
      condition: reactions?.love?.includes(infoUserActive?.uid),
    },
    {
      name: "Me importa",
      img: care,
      textColor: "#f7b125",

      condition: reactions?.care?.includes(infoUserActive?.uid),
    },
    {
      name: "Me divierte",
      img: haha,
      textColor: "#f7b125",
      condition: reactions?.funny?.includes(infoUserActive?.uid),
    },
    {
      name: "Me asombra",
      img: wow,
      textColor: "#f7b125",
      condition: reactions?.amazes?.includes(infoUserActive?.uid),
    },
    {
      name: "Me entristece",
      img: sad,
      textColor: "#f7b125",
      condition: reactions?.sad?.includes(infoUserActive?.uid),
    },
    {
      name: "Me enoja",
      img: angry,
      textColor: "#ff0000",
      condition: reactions?.angry?.includes(infoUserActive?.uid),
    },
  ];

  const matchingReaction = reactionsData2.find(
    (reaction) => reaction.condition
  );

  if (matchingReaction) {
    const { name, img, textColor } = matchingReaction;
    return { name, img, textColor };
  }

  return null;
};
