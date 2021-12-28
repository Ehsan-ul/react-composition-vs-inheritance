export default function Text({ addEmoji }) {
  const text = 'I am Sahat';

  return <div>{addEmoji ? addEmoji(text, '❤️') : text}</div>;
}
