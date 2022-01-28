import React from "react";
import { Card, CardActions, CardContent, CardMedia, Button, Typography } from '@mui/material'
import mochaMantis from "../../themes/mocha.png";


function ProductCard() {
    return(
        <Card sx={{ maxWidth: 400, boxShadow: 4, bgcolor: 'secondary.main', }}>
            <CardMedia
                component="img"
                height="300"
                image={mochaMantis}
                alt="mocha the mantis"
                sx={{ borderBottom:2}}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">Product Title</Typography>
                <Typography variant="body2" color="text.secondary">We exist, we dream, we are reborn. To roam the mission is to become one with it. 
                    Consciousness consists of sub-atomic particles of quantum energy. “Quantum” means a maturing of the holistic.
                    You must take a stand against pain. Desire is the antithesis of life-force. 
                    Illusion is born in the gap where energy has been excluded.</Typography>
            </CardContent>
            <CardActions>
                <Button>Button 1</Button>
                <Button>Button 2</Button>
            </CardActions>
        </Card>
    )
}

export default ProductCard;