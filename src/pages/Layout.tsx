import { Grid, GridItem } from "@chakra-ui/react"
import { Outlet } from "react-router-dom"
import Navbar from "../components/Navbar"

const Layout = () => {
  return (
    <Grid
      templateAreas={
        {
          base: `"nav" "main" "footer"`,
          lg: `"nav nav" "aside main" "footer footer"`
        }
      }
      templateColumns={
        {
          base: "1fr",
          lg: '300px 1fr'
        }
      }
    >
      <GridItem area={'nav'}>
        <Navbar />
      </GridItem>
      <Outlet />
    </Grid>
  )
}

export default Layout