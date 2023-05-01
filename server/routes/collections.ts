import express from 'express'
import checkJwt from '../auth0'
import { JwtRequest } from '../auth0'

import { getCollectionsByUserId } from '../db/functions/collections'

const router = express.Router()


router.get('/', checkJwt, async (req: JwtRequest, res) => {
  try {
    const auth0Id = req.auth?.sub
    if(!auth0Id) {
      return res.status(401).send('Unauthorized')
    }

    const collections = await getCollectionsByUserId(auth0Id)
    res.json(collections)
  } catch (error) {
    res.status(500).json({
      error: 'There was an error trying to get your collections'
    })
  }
})

export default router