import express from 'express'
import { app } from './src/app.js'
import {connectToDb} from './src/Config/database.js'

app.listen(5000)
connectToDb();