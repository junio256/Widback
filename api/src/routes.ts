import express from 'express'
import { NodemailerMailAdapter } from './adapters/nodemailer/nodemailer-mail-adapter';
import prisma from "./prisma";
import { PrismaFeedbackRepository } from './repositories/prisma/PrismaFeedbackRepository';
import { SubmitFeedbackService } from './services/SubmitFeedbackService';

export const routes = express.Router()



routes.post('/feedback', async (req, res) => {

  const { type, comment, screenshot } = req.body;
  const nodemailerMailAdapter = new NodemailerMailAdapter()


  const prismaFeedbacksRepository = new PrismaFeedbackRepository();
  const service = new SubmitFeedbackService(
    prismaFeedbacksRepository,
    nodemailerMailAdapter
  );

  const result = await prisma.feedback.create({
    data: {
      type: type,
      comment: comment,
      screenshot: screenshot,
    }
  })
  res.json(result)
  await service.execute(req.body)

  return res.status(201).send();
})