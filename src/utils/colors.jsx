export const borderColors = [
  "border-l-red-600",
  "border-l-yellow-500",
  "border-l-blue-600",
  "border-l-green-600",
  "border-l-purple-600",
  "border-l-pink-600",
  "border-l-indigo-600",
  "border-l-orange-600",
  "border-l-teal-600",
];

export const getRandomColor = () => {
  return borderColors[Math.floor(Math.random() * borderColors.length)];
};
