import { Fragment } from 'react';

// Shows text with line breaks exactly as typed in the admin panel.
export default function Lines({ text = '' }) {
  return text.split('\n').map((line, i) => (
    <Fragment key={i}>
      {i > 0 && <br />}
      {line}
    </Fragment>
  ));
}
