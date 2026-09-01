const ScrollCue = () => {
  return (
    <div className="scroll-cue" aria-hidden="true">
      <div className="scroll-cue__track">
        <div className="scroll-cue__thumb"></div>
      </div>
      <span className="scroll-cue__label">scroll</span>
    </div>
  );
};

export default ScrollCue;
