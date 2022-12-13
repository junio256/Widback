import express from 'express'
import { NodemailerMailAdapter } from './adapters/nodemailer/nodemailer-mail-adapter';
import prisma from "./prisma";
import { PrismaFeedbackRepository } from './repositories/prisma/PrismaFeedbackRepository';
import { SubmitFeedbackService } from './services/SubmitFeedbackService';

export const routes = express.Router()

routes.post('/feedbacks', async (req, res) => {

  const { type, comment, screenshot } = req.body;
  const nodemailerMailAdapter = new NodemailerMailAdapter()


  const prismaFeedbacksRepository = new PrismaFeedbackRepository();
  const service = new SubmitFeedbackService(
    prismaFeedbacksRepository,
    nodemailerMailAdapter
  );

  const feedback = await prisma.feedbacks.create({
    data: {
      type: type,
      comment: comment,
      screenshot: screenshot,
    }
  })
  res.json(feedback)
  await service.execute(req.body)

  return res.status(201).send();
})

routes.get('/feedbacks', async (req, res) => {
  // Retrieve the page number from the query string
  const page = req.query.page || 1;

  // Calculate the number of items to skip based on the page number
  const skip = (+page - 1) * 20;

  // Retrieve the items from the database using Prisma
  const feedback = await prisma.feedbacks.findMany({
    skip,
    take: 20,
    orderBy: {
      createdAt: 'desc',
    },
  });

  // Return the items as a JSON response
  res.json({ feedback });
});