export function Button({ text, orientation = 'center' }) {
    return (
      <>
        <button className="boton" style={{ textAlign: orientation }}>
          {text}
        </button>
      </>
    );
  }