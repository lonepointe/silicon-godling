import React, { useEffect, useRef } from 'react';

function Log({ entries }) {
  const logContainerRef = useRef(null);

  useEffect(() => {
    const el = logContainerRef.current;
    if (el) {
      el.scrollTop = el.scrollHeight;
    }
  }, [entries]);

  return (
    <div
      ref={logContainerRef}
      style={{
        marginTop: '20px',
        backgroundColor: '#111',
        padding: '10px',
        borderRadius: '5px',
        height: '150px',
        overflowY: 'auto',
        color: '#aaa',
      }}
    >
      <h3>Log</h3>
      <ul style={{ listStyle: 'none', paddingLeft: '10px' }}>
        {entries.map((entry, index) => (
          <li key={index}>{entry}</li>
        ))}
      </ul>
    </div>
  );
}

export default Log;
