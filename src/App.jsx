import React, { useEffect } from 'react';

import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import StarIcon from '@mui/icons-material/Star';

import useHydra from './components/Hydra/hydra';

function App() {

  const [currentKeyCombo, updateGapTolerance] = useHydra(1000);


  return (
    <div className="App">
      <Container>
        <Stack>
          <Typography variant="h3" align="center">
            Hydra
          </Typography>
        </Stack>
        <Stack>
          <ul>
            <li>
              <code>useHydra()</code> helps with reacting to keystrokes from the user. It can chain keystrokes.
            </li>
            <li>
              Keys pressed inside a set interval (gapTolerance window) can be chained.
            </li>
            <li>
              A key pressed after the interval will start a new chain.
            </li>
              <li>
            Usage: <code>const [currentKeyCombo, updateGapTolerance] = useHydra(defaultGaTolerance)</code>
                      </li>
            <li>
                 <code>currentKeyCombo</code> is an array containing the current keystrokes of the user.
                          </li>
                        <li>
                <code>updateGapTolerance</code> (milliseconds) is used to chain key pressed inside of an interval.
               </li>
              </ul>
        </Stack>
          <Stack>
           <p>
              You have pressed (key codes):
            </p>
        <Typography variant="h4" align="center">
            {currentKeyCombo && `${currentKeyCombo.join(" ")}`}
    </Typography>
        </Stack>
      </Container>
    </div>
  );
}

export default App;
