function CopyRight({ color, size }) {
  return (
    <span
      className="copyright"
      style={{ backgroundColor: color, fontSize: size }}
    >
      by{" "}
      <a
        href="https://www.linkedin.com/in/quanganhha99/"
        className="copyright__link"
      >
        wilson-here
      </a>
    </span>
  );
}

export default CopyRight;
