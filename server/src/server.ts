import { fastify } from "fastify"
import { fastifyCors } from "@fastify/cors"
import { getAllPromptsRoute } from "./routes/get-all-prompts"
import { uploadVideosRoute } from "./routes/upload-video"
import { createTranscriptionRoute } from "./routes/create-transcription"

const app = fastify()

app.get("/", () => {
  return "Hello"
})

app.register(fastifyCors, {
  origin: "*",
})

app.register(getAllPromptsRoute)
app.register(uploadVideosRoute)
app.register(createTranscriptionRoute)

app
  .listen({
    port: 3333,
  })
  .then(() => {
    console.log("HTTP Server Running")
  })
