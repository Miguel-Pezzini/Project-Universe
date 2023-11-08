import { Router } from './router.js'

const router = new Router()
router.add('/', "/pages/home.html")
router.add('/O-Universo', "/pages/O-Universo.html")
router.add('/Exploracao', "/pages/Exploracao.html")

router.handle()

window.onpopstate = () => router.handle()
window.route = () => router.route()
