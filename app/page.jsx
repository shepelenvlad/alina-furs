import home from '../content/home.json';
import Block from '../components/Block';

export default function Page() {
  return (
    <main className="main">
      {home.blocks.map((block, i) => (
        <Block key={i} block={block} />
      ))}
    </main>
  );
}
