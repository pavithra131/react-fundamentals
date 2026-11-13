
import { Card, CardContent, Typography } from '@mui/material'
import { makeStyles } from 'tss-react/mui'

interface ProfileCardProps {
    name: string;
    role: string;
    description: string;
}

function ProfileCard({ name, role, description }: ProfileCardProps) {
    const { classes } = useStyles()

    return (
        <Card className={classes.profileCard}>
            <CardContent className={classes.content}>
                <Typography variant="h5" className={classes.name}>
                    {name}
                </Typography>

                <Typography variant="subtitle1" className={classes.role}>
                    {role}
                </Typography>

                <Typography variant="body1" className={classes.description}>
                    {description}
                </Typography>
            </CardContent>
        </Card>
    )
}

export default ProfileCard

const useStyles = makeStyles()({
    profileCard: {
        maxWidth: 700,
        margin: '0 auto 24px',
        borderRadius: 12,
        border: '1px solid #e5eaf0',
        boxShadow: '0 3px 12px rgba(0, 0, 0, 0.05)',
    },
    content: {
        padding: 28,
        '&:last-child': {
            paddingBottom: 28,
        },
    },
    name: {
        color: '#263b5e',
        fontWeight: 700,
        marginBottom: 8,
    },
    role: {
        color: '#3478c7',
        fontWeight: 600,
        marginBottom: 16,
    },
    description: {
        color: '#64748b',
        lineHeight: 1.8,
    },
})