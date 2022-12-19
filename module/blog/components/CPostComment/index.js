import { TextField } from '@mui/material'
import style from './post.module.css'

const CPostComment = () => {
    return (
        <div>
            <div className={style.title}>Leave a Reply</div>
            <div className={style.description}>Your email address will not be published. Required fields are marked *</div>
            <div className={style.input}>
                <TextField
                    required
                    label="Full name"
                    fullWidth
                />
                <TextField
                    required
                    label="Email"
                    fullWidth
                />
            </div>
            <TextField
                required
                label="Your name"
                fullWidth
            />
            <button className={style.btn}>
                Post Comment
            </button>
        </div>
    )
}

export default CPostComment