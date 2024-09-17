function Spinner({ message }) {
  return (
    <div className="grid items-center justify-center">
      <div className="spinner"></div>
      {message ?? <p className="text-xl text-primary-200">{message}</p>}
    </div>
  );
}

export default Spinner;
