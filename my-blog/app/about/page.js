export const metadata = { title: "About" };

export default function About() {
  return (
    <div className="about-page">
      <p className="eyebrow"><span className="eyebrow-mark" /> A NOTE FROM THE AUTHOR</p>
      <h1 className="page-title">A little about <em>this place.</em></h1>
      <div className="about-copy">
        <p>
          Hi, and welcome to Fieldnotes. This is a small corner of the internet
          for writing about web development, useful ideas, and things learned
          along the way.
        </p>
        <p>
          The best way to learn is to stay curious, make things, and share what
          you find. These notes are a record of that process, written one page
          at a time.
        </p>
      </div>
    </div>
  );
}