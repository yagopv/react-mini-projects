import React, { useEffect } from 'react';
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button,
  Box
} from '@material-ui/core';
import { Menu } from '@material-ui/icons';
import { useFirebase } from '../shared/context/firebase-context';
import { useHistory } from 'react-router-dom';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';

export function Header({ onOpenMenu }) {
  const { auth } = useFirebase();
  const history = useHistory();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('xs'));

  const handleSignOut = () => {
    auth.signOut().then(function() {
      history.push('/login');
    });
  };

  return (
    <AppBar position="fixed">
      <Toolbar>
        {matches && (
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={onOpenMenu}
          >
            <Menu />
          </IconButton>
        )}
        <Typography variant="h6">News</Typography>
        <Box flexGrow="1" textAlign="right">
          <Button color="inherit" onClick={handleSignOut}>
            Logout
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
