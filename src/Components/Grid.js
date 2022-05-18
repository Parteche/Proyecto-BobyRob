import React from "react";
import { Grid } from "@mui/material";
import { Container } from "@mui/material";

const GridResponsive = () => {
    return (
        <Container className='container'>

            <Grid container spacing={3}>

                <Grid item lg={3} md={4} sm={6} xs={12} >
                    <div className="gridItem">
                        Grid 1
                    </div>
                </Grid>

                <Grid item lg={3} md={4} sm={6} xs={12}>
                    <div className="gridItem">
                        Grid 2
                    </div>
                </Grid>

                <Grid item lg={3} md={4} sm={6} xs={12}>
                    <div className="gridItem">
                        Grid 3
                    </div>
                </Grid>

                <Grid item lg={3} md={4} sm={6} xs={12}>
                    <div className="gridItem">
                        Grid 4
                    </div>
                </Grid>

                <Grid item sm={6} xs={12}>
                    <div className="gridItem">
                    Grid item con container
                        <Grid container>
                            <Grid item lg={3} md={4} sm={6} xs={12}>
                                <div className="anidado">
                                    Grid 1 de un subGrid
                                </div>
                            </Grid>
                        </Grid>
                    </div>
                </Grid>

            </Grid>

        </Container>
    )
}



export default GridResponsive;