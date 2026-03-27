export default function Layout({ header, main, footer }) {
  return (
    <div className="app-container">
      <header className="app-header">{header}</header>
      <main className="app-main">{main}</main>
      <footer className="app-footer">{footer}</footer>
    </div>
  );
}
