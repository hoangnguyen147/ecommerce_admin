import React, { memo } from 'react';

// libs
import clsx from 'clsx';
import { useDispatch } from 'react-redux';
import { setSearchContent } from 'redux/actions/app.action';

// material core
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import InputBase from '@material-ui/core/InputBase';

// material icon
import HomeIcon from '@material-ui/icons/Home';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';

// components
import Account from './components/Account';
import Language from './components/Language';
import DarkMode from './components/DarkMode';

// styles
import useStyles from './styles';

type IProps = {
  handleToogleDrawer: () => void;
  isDrawer: boolean;
};

function TopBar({ isDrawer, handleToogleDrawer }: IProps) {
  const classes = useStyles();
  const dispatch = useDispatch();

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setSearchContent(e.target.value));
  };

  return (
    <AppBar
      position="fixed"
      className={clsx(classes.appBar, {
        [classes.appBarShift]: isDrawer,
      })}
    >
      <Toolbar>
        <IconButton color="inherit" aria-label="open drawer" edge="start" className={clsx(classes.menuButton)}>
          <HomeIcon />
        </IconButton>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={handleToogleDrawer}
          edge="start"
          className={clsx(classes.menuButton)}
        >
          <MenuIcon />
        </IconButton>
        <div className={classes.search}>
          <div className={classes.searchIcon}>
            <SearchIcon />
          </div>
          <InputBase
            placeholder="Search…"
            classes={{
              root: classes.inputRoot,
              input: classes.inputInput,
            }}
            inputProps={{ 'aria-label': 'search' }}
            onChange={handleSearch}
          />
        </div>
        <div className={classes.grow} />
        <div className={classes.topBar_setting}>
          <Language {...classes} />
          <DarkMode />
          <Account {...classes} />
        </div>
      </Toolbar>
    </AppBar>
  );
}

export default memo(TopBar);
