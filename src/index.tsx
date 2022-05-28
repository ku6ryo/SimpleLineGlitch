import { Renderer } from "./Renderer"
import "./style.scss"
import Stats from "stats.js"

;(async () => {
  const stats = new Stats()
  document.body.appendChild(stats.dom)
  const renderer = new Renderer()
  const canvas = renderer.getCanvas()
  document.body.appendChild(canvas)

  const { clientWidth, clientHeight } = document.body

  const img = await new Promise<HTMLImageElement>((resolve, reject) => {
    const img = new Image()
    img.crossOrigin = "anonymous"
    img.src = `https://picsum.photos/${clientWidth}/${clientHeight}`
    img.onload = () => resolve(img)
    img.onerror = reject
  })
  renderer.setSize(clientWidth, clientHeight)

  function loop() {
    stats.begin()
    renderer.render(img)
    stats.end()
    requestAnimationFrame(loop)
  }
  requestAnimationFrame(loop)
})()