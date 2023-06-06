import express from "express"
import authRoutes from "./routes/auth.js"
import userRoutes from "./routes/users.js"
import postRoutes from "./routes/posts.js"

const app = express()
const port = 5000

app.use(express.json())
app.use("/api/auth", authRoutes)
app.use("/api/users", userRoutes)
app.use("/api/posts", postRoutes)

/* app.get('/test', (_, res) => {
  res.json('It works!')
}) */

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

