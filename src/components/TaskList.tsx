import { Chip, Card, CardContent, Typography } from '@mui/material'
import { makeStyles } from 'tss-react/mui'

function TaskList() {
    const { classes } = useStyles()

    const tasks = [
        'Learn React components',
        'Understand useState',
        'Practise TypeScript'
    ]

    return (
        <Card className={classes.taskCard}>
            <CardContent className={classes.cardContent}>
                <Typography variant="h5" className={classes.title}>
                    My Learning Tasks
                </Typography>

                <div className={classes.taskContainer}>
                    {tasks.map((task) => (
                        <Chip
                            key={task}
                            label={task}
                            variant="outlined"
                            className={classes.taskChip}
                        />
                    ))}
                </div>
            </CardContent>
        </Card>
    )
}

export default TaskList

const useStyles = makeStyles()({
    taskCard: {
        maxWidth: 700,
        width: '100%',
        margin: '24px auto',
        borderRadius: 12,
        border: '1px solid #e5eaf0',
        boxShadow: '0 3px 12px rgba(0, 0, 0, 0.04)',
    },
    cardContent: {
        padding: 24,
        '&:last-child': {
            paddingBottom: 24,
        },
    },
    title: {
        color: '#1e293b',
        fontWeight: 700,
        marginBottom: 20,
    },
    taskContainer: {
        display: 'flex',
        flexWrap: 'wrap',
        gap: 12,
    },
    taskChip: {
        borderRadius: 8,
        fontWeight: 500,
        color: '#3478c7',
        borderColor: '#cbdcf0',
        backgroundColor: '#f8fbff',
    },
})