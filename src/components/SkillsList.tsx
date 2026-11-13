
import { Card, CardContent, Chip, Typography } from '@mui/material'
import { makeStyles } from 'tss-react/mui'

function SkillsList() {
    const { classes } = useStyles()

    const feSkills = ["HTML5, CSS3, JavaScript, TypeScript", "React, Next.js, Vue.js", "Tailwind CSS, Bootstrap"];
    const beSkills = ["Node.js, Express.js, Python, Django", "REST APIs, GraphQL", "JWT Authentication, OAuth"];
    const dbSkills = ["PostgreSQL, MySQL", "MongoDB, Firebase", "Prisma, Mongoose"]

    return (
        <div className={classes.skillsContainer}>
            <Card className={classes.skillCard}>
                <CardContent className={classes.cardContent}>
                    <Typography variant="h6" className={classes.categoryTitle}>
                        Front-End
                    </Typography>
                    <ul className={classes.skillList}>
                        {feSkills.map((skill) => (
                            <Chip
                                key={skill}
                                label={skill}
                                variant="outlined"
                            />
                        ))}
                    </ul>
                </CardContent>
            </Card>

            <Card className={classes.skillCard}>
                <CardContent className={classes.cardContent}>
                    <Typography variant="h6" className={classes.categoryTitle}>
                        Back-End
                    </Typography>
                    <ul className={classes.skillList}>
                        {beSkills.map((skill) => (
                            <Chip
                                key={skill}
                                label={skill}
                                variant="outlined"
                            />
                        ))}
                    </ul>
                </CardContent>
            </Card>

            <Card className={classes.skillCard}>
                <CardContent className={classes.cardContent}>
                    <Typography variant="h6" className={classes.categoryTitle}>
                        Databases
                    </Typography>
                    <ul className={classes.skillList}>
                        {dbSkills.map((skill) => (
                            <Chip
                                key={skill}
                                label={skill}
                                variant="outlined"
                            />
                        ))}
                    </ul>
                </CardContent>
            </Card>
        </div>
    )
}

export default SkillsList

const useStyles = makeStyles()({
    skillsContainer: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
        gap: 20,
        maxWidth: 700,
        margin: '0 auto',
    },
    skillCard: {
        borderRadius: 12,
        border: '1px solid #e5eaf0',
        boxShadow: '0 3px 12px rgba(0, 0, 0, 0.04)',
    },
    cardContent: {
        padding: 20,
        '&:last-child': {
            paddingBottom: 20,
        },
    },
    categoryTitle: {
        color: '#3478c7',
        fontWeight: 700,
        marginBottom: 12,
    },
    skillList: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: 1,
}
})