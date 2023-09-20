
import React from 'react'
import  AppBar  from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { useDispatch } from 'react-redux';
import { Container, Toolbar, Typography } from '@mui/material';
import {categories} from '../../store/categories/index';
import productSlice from '../../store/products';

function Header() {
  
  const dispatch =useDispatch();

  return (
    <AppBar>
      <Container>
        <Toolbar>
          <Typography
            role='banner'
            variant='h4'
            noWrap
            component='a'
            href='/'
            sx={{
              mt: -1,
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            <h2>The Squirrel Store!</h2>
          </Typography>
          <Box>
            {categories.map((category)=> (
              <Button
                key={category.name}
                onClick={()=>{
                  dispatch(
                    productSlice.actions.setActiveCategory(category.name)
                  );
                }}
              >
                {category.displayName}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>

  )
}
// header component is working

export default Header;