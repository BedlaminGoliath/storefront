import { BottomNavigation, Typography } from '@mui/material'
import React from 'react'

function Footer() {
  return (

    <BottomNavigation sx={{ backgroundColor: "#b9ac9f", bottom:0}}>
      <Typography
          variant="h6"
          noWrap
          component="a"
          href="/"
          sx={{
            mr: 2,
            mt: '10px',
            display: { xs: "none", md: "flex" },
            fontFamily: "monospace",
            fontWeight: 700,
            letterSpacing: ".3rem",
            color: "white",
            textDecoration: "none",
          }}
      >
        &copy; Lopez
      </Typography>
      </BottomNavigation>
  )
}

export default Footer