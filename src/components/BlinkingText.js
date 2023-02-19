import { useState } from 'react';

import { StyledBlinkingText } from '../styles.js';

const BlinkingText = () => {
  const [blink, setBlink] = useState(0);

  return (
    <StyledBlinkingText blink={blink}>
      some text
    </StyledBlinkingText>
  )
}

export default BlinkingText;