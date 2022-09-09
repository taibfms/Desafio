import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  root: {
    maxWidth: 345
  },
  media: {
    height: 140
  }
});

interface TimeCardProps {
  team: string;
  amount: number;
  id: string;
}
export default function TimeCard({ amount, id, team }: TimeCardProps) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {team} - {amount}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Link to={`time/${id}`}>
          <Button size="small" color="primary">
            Abrir
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
}
