
import { useState } from 'react'
import { Card, CardContent, Typography, Button } from '@mui/material'
import { makeStyles } from 'tss-react/mui'

function Counter() {
    const { classes } = useStyles()
    const [count, setCount] = useState(0)

    function increment() {
        setCount(count + 1)
    }

    function decrement() {
        if (count !== 0) {
            setCount(count - 1)
        }
    }

    function reset() {
        setCount(0)
    }

    return (
        <Card className={classes.counterCard}>
            <CardContent className={classes.content}>
                <Typography className={classes.count}>
                    {count}
                </Typography>
                <Typography variant="h5" className={classes.title}>
                    My Like Counter
                </Typography>

                {count === 0 ? (
                    <Typography variant="body1" className={classes.message}>
                        You haven't liked anything yet.
                    </Typography>
                ) :
                    (<Typography variant="body1" className={classes.message}>
                        You have liked this {count} times
                    </Typography>)
                }
                {count > 5 && (
                    <Typography variant="body1" className={classes.message}>
                        You have liked this more than {count} times
                    </Typography>
                )}

                <div className={classes.buttonContainer}>
                    <Button variant="contained" onClick={increment}>
                        Increment
                    </Button>

                    <Button variant="outlined" onClick={decrement} disabled={count === 0}>
                        Decrement
                    </Button>

                    <Button variant="text" onClick={reset}>
                        Reset
                    </Button>
                </div>
            </CardContent>
        </Card>
    )
}

export default Counter

const useStyles = makeStyles()({
    counterCard: {
        maxWidth: 700,
        width: '100%',
        margin: '24px auto',
        borderRadius: 12,
        border: '1px solid #e5eaf0',
        boxShadow: '0 3px 12px rgba(0, 0, 0, 0.04)',
        textAlign: 'center',
    },
    content: {
        padding: 28,
        '&:last-child': {
            paddingBottom: 28,
        },
    },
    title: {
        color: '#263b5e',
        fontWeight: 700,
        marginBottom: 12,
    },
    count: {
        color: '#3478c7',
        fontSize: 32,
        fontWeight: 700,
        marginBottom: 20,
    },
    message: {
        color: '#64748b',
        marginBottom: 24,
    },
    buttonContainer: {
        display: 'flex',
        justifyContent: 'center',
        gap: 12,
        flexWrap: 'wrap',
    },
})
