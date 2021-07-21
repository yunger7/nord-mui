import { Button, Container, Paper, Typography } from "@material-ui/core";
import { useTheme, makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
	paper: {
		padding: 20,
    height: "100vh",
	},
	wrapper: {
		display: "flex",
		gap: 10,
	},
	item: {
		width: 50,
		height: 50,
		marginBottom: 10,
	},
});

export default function Home() {
	const classes = useStyles();
	const theme = useTheme();

	return (
		<Container maxWidth="lg">
			<Paper className={classes.paper}>
				<Typography variant="h1" gutterBottom>
					Hello, nordic world! ⛄
				</Typography>
				<div className={classes.wrapper}>
					<Paper
						className={classes.item}
						style={{ backgroundColor: theme.palette.primary.main }}
					/>
					<Paper
						className={classes.item}
						style={{ backgroundColor: theme.palette.secondary.main }}
					/>
					<Paper
						className={classes.item}
						style={{ backgroundColor: theme.palette.info.main }}
					/>
					<Paper
						className={classes.item}
						style={{ backgroundColor: theme.palette.error.main }}
					/>
					<Paper
						className={classes.item}
						style={{ backgroundColor: theme.palette.warning.main }}
					/>
					<Paper
						className={classes.item}
						style={{ backgroundColor: theme.palette.success.main }}
					/>
				</div>
				<Typography paragraph variant="body1">
					Lorem ipsum dolor sit amet consectetur adipisicing elit.
					Exercitationem voluptatibus, facilis modi in ullam, quo harum
					perferendis amet, deleniti saepe nostrum autem necessitatibus mollitia
					nam enim dolorum dolore pariatur delectus. Lorem ipsum dolor sit amet
					consectetur adipisicing elit. Corrupti ratione, voluptatum eaque
					repudiandae a qui pariatur ea eligendi hic natus incidunt rem, eum
					fugiat? Minus tempore pariatur atque inventore ab! Lorem ipsum dolor
					sit amet consectetur adipisicing elit. Quibusdam, tempore sit esse
					nisi voluptatem pariatur cumque quos odio excepturi blanditiis atque
					quis consectetur debitis vero quo voluptates doloremque cum nihil!
        </Typography>
          <Button
            variant="contained"
            color="primary"
          >
            Nordify everything
          </Button>
			</Paper>
		</Container>
	);
}
