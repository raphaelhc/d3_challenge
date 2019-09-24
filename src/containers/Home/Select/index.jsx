import React from 'react';
import { withTheme } from 'styled-components';
import { withStyles } from '@material-ui/core/styles';
import Button from '../../../components/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemText from '@material-ui/core/ListItemText';

const CustomizedMenus = (props) => {
  const { onChange } = props
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleFilter = (value) => {
    onChange(value)
    handleClose()
  }

  const StyledMenu = withStyles({
    paper: {
      backgroundColor: props.theme[props.theme.selectedTheme].contrast,
      color: props.theme[props.theme.selectedTheme].color,
      marginTop: '3px',
      width: '100px'
    },
  })(props => (
    <Menu
      elevation={0}
      getContentAnchorEl={null}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'center',
      }}
      transformOrigin={{
        vertical: 'top',
        horizontal: 'center',
      }}
      {...props}
    />
  ));
  
  const StyledMenuItem = withStyles(
    {
    root: {
      '&:focus': {
        backgroundColor: props.theme[props.theme.selectedTheme].contrast,
        '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
          color: props.theme[props.theme.selectedTheme].color,
        },
      },
    },
  })(MenuItem);

  return (
    <div {...props}>
      <Button
        aria-controls="customized-menu"
        aria-haspopup="true"
        variant="contained"
        onClick={handleClick}
      >
        Filter by Region
      </Button>
      <StyledMenu
        id="customized-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <StyledMenuItem onClick={() => handleFilter('africa')}>
          <ListItemText primary="Africa" />
        </StyledMenuItem>
        <StyledMenuItem onClick={() => handleFilter('americas')}>
          <ListItemText primary="America" />
        </StyledMenuItem>
        <StyledMenuItem onClick={() => handleFilter('asia')}>
          <ListItemText primary="Asia" />
        </StyledMenuItem>
        <StyledMenuItem onClick={() => handleFilter('europe')}>
          <ListItemText primary="Europe" />
        </StyledMenuItem>
        <StyledMenuItem onClick={() => handleFilter('oceania')}>
          <ListItemText primary="Oceania" />
        </StyledMenuItem>
      </StyledMenu>
    </div>
  );
}

export default withTheme(CustomizedMenus)