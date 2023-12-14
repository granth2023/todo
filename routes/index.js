import { Router } from 'express'

const router = Router()

router.get('/', function(req, res) {
    res.json({
        message: `Welcome to Express`
    })
})

router.post('/greet', function(req, res) {
    const name = req.body.name

    res.json({
        greeting: `Welcome to Express ${name}`
    })
})

export default router