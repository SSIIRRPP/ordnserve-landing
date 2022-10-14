export default function Style({ theme }) {
  return (
    <style jsx global>{`
      .layout {
        min-height: 100vh;
        display: contents;
        display: grid;
        grid-template-rows: auto 1fr;
      }
      p,
      h1,
      h2,
      h3,
      h4,
      h5,
      h6,
      span,
      small {
        word-wrap: break-word;
        color: ${theme.color};
      }
    `}</style>
  );
}
