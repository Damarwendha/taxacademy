function MainContent({ isFullscreen, children }) {
  return (
    <div
      className={`items-center justify-center lg:h-screen lg:-mt-20 lg:flex ${
        isFullscreen ? "" : "lg:mr-72 xl:mr:96"
      }`}
    >
      {children}
    </div>
  );
}

export default MainContent;
