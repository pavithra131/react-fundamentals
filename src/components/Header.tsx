
import { Typography } from '@mui/material'
import { makeStyles } from 'tss-react/mui'

function Header() {
    const { classes } = useStyles()

    return (
        <div className={classes.header}>
            <Typography variant="h4" className={classes.title}>
                My React Learning Journey
            </Typography>

            <Typography variant="body2" className={classes.subtitle}>
                A little introduction about me
            </Typography>
        </div>
    )
}

export default Header

const useStyles = makeStyles()({
    header: {
        padding: '28px 24px',
        textAlign: 'center',
        backgroundColor: '#f0f5ff',
        borderRadius: 12,
        marginBottom: 24,
    },
    title: {
        color: '#263b5e',
        fontWeight: 700,
    },
    subtitle: {
        color: '#64748b',
        marginTop: 8,
    },
})
