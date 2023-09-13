import { fastify } from "fastify"
import { getAllPromptsRoute } from "./routes/get-all-prompts"
import { uploadVideosRoute } from "./routes/upload-video"

const app = fastify()

app.get("/", () => {
  return "Hello"
})

app.register(getAllPromptsRoute)
app.register(uploadVideosRoute)

app
  .listen({
    port: 3333,
  })
  .then(() => {
    console.log("HTTP Server Running")
  })
