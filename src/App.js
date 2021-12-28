import Emoji from './components/composition/Emoji';
import Text from './components/inheritance/Text';

function App() {
  return <Emoji>{({ addEmoji }) => <Text addEmoji={addEmoji} />}</Emoji>;
}

export default App;
