import express from 'express'
import session from 'express-session'
import connectPgSimple from 'connect-pg-simple'
import path from 'path'
import { fileURLToPath } from 'url'
import router from './routes/index.js'
import connection from './db/pool.js'
import passport from 'passport'
import passportConfig from './config/passport.js'

const PgStore = connectPgSimple(session)

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const app = express()

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

const sessionStore = new PgStore({
  pool: connection,
  createTableIfMissing: true,
})

app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false,
  store: sessionStore,
  cookie: {
    maxAge: 1000 * 60 * 60 * 24 * 7, // 7 days
  },
}))

app.use(passport.initialize())
app.use(passport.session())

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(express.static(path.join(__dirname, 'public')))

app.use('/', router) 

const port = process.env.PORT || 3000
app.listen(port, () => {
  console.log(`Server listening on port ${port}`)
})
